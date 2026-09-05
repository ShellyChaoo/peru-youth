import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { locations } from '../data/journeyNodes';

const markerIcon = L.icon({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function isVideoSource(src) {
  return /\.mp4$/i.test(src);
}

function MapView({ activeKey, activeNode, onSelect }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const [viewMode, setViewMode] = useState('map');

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const map = L.map(containerRef.current, {
      center: [-13.525, -71.972],
      zoom: 8,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }).addTo(map);

    const markers = {};
    Object.entries(locations).forEach(([key, location]) => {
      const marker = L.marker(location.coords, { icon: markerIcon }).addTo(map);
      const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.coords[0]},${location.coords[1]}`;
      marker.bindPopup(`
        <div class="custom-popup-title">${location.title}</div>
        <a class="custom-popup-link" href="${googleMapsUrl}" target="_blank" rel="noreferrer">在 Google Maps 開啟</a>
      `, {
        className: 'custom-popup',
      });
      marker.on('click', () => onSelect(key));
      markers[key] = marker;
    });

    mapRef.current = map;
    markersRef.current = markers;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, [onSelect]);

  useEffect(() => {
    const map = mapRef.current;
    const location = locations[activeKey];
    if (!map || !location) return;

    map.flyTo(location.coords, location.zoom, { animate: true, duration: 1.5 });
    markersRef.current[activeKey]?.openPopup();
  }, [activeKey]);

  useEffect(() => {
    if (viewMode === 'map') {
      mapRef.current?.invalidateSize();
    }
  }, [viewMode]);

  const photos = activeNode?.gallery ?? [];

  return (
    <div className="map-view">
      <div className="map-view-toggle" role="group" aria-label="地圖內容切換">
        <button
          type="button"
          className={viewMode === 'map' ? 'view-toggle active' : 'view-toggle'}
          onClick={() => setViewMode('map')}
        >
          <i className="fa-solid fa-map" aria-hidden="true" /> 地圖
        </button>
        <button
          type="button"
          className={viewMode === 'photos' ? 'view-toggle active' : 'view-toggle'}
          onClick={() => setViewMode('photos')}
        >
          <i className="fa-solid fa-images" aria-hidden="true" /> 照片
        </button>
      </div>

      <div
        ref={containerRef}
        className={`map ${viewMode === 'map' ? '' : 'is-hidden'}`}
        aria-label="祕魯與台灣旅程地圖"
      />

      {viewMode === 'photos' && (
        <div className="map-photo-panel" aria-label={`${activeNode?.title ?? '目前節點'}照片`}>
          <div className="map-photo-heading">
            <span>{activeNode?.subtitle}</span>
            <h2>{activeNode?.title}</h2>
          </div>
          {photos.length > 0 ? (
            <div className="map-photo-grid">
              {photos.map((photo) => (
                <figure key={photo.src}>
                  {isVideoSource(photo.src) ? (
                    <video className="map-photo-media" src={photo.src} controls playsInline preload="metadata">
                      您的瀏覽器不支援影片播放。
                    </video>
                  ) : (
                    <img className="map-photo-media" src={photo.src} alt={photo.alt} loading="lazy" />
                  )}
                  {photo.caption && <figcaption>{photo.caption}</figcaption>}
                </figure>
              ))}
            </div>
          ) : (
            <p className="map-photo-empty">這個旅程節點目前還沒有照片。</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MapView;
