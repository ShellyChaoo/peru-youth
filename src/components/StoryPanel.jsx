import React from 'react';
import InteractiveModules from './InteractiveModules';

function isVideoSource(src) {
  return /\.mp4$/i.test(src);
}

function StoryPanel({ node }) {
  return (
    <div className="story-scroll">
      <div className="story-heading">
        <span>{node.subtitle}</span>
        <h2>{node.title}</h2>
      </div>
      <div className="heading-rule" />

      {/* {node.image && (
        <img className="story-image" src={node.image} alt={node.imageAlt || ''} />
      )} */}

      {/* {node.gallery && (
        <div className="story-gallery" aria-label={`${node.title}照片`}>
          {node.gallery.map((photo) => (
            isVideoSource(photo.src) ? (
              <video key={photo.src} src={photo.src} controls playsInline preload="metadata">
                您的瀏覽器不支援影片播放。
              </video>
            ) : (
              <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
            )
          ))}
        </div>
      )} */}

      <div className="story-copy">
        {node.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>

      {node.callout && (
        <aside className="story-callout">
          <h3>{node.callout.title}</h3>
          <p>{node.callout.text}</p>
        </aside>
      )}

      <InteractiveModules node={node} />

      {node.quote && <blockquote>{node.quote}</blockquote>}

      {node.projects && (
        <div className="projects">
          {node.projects.map((project) => (
            <div className="project-card" key={project.title}>
              <span className="project-icon" aria-hidden="true">{project.icon}</span>
              <div>
                <h3 className={project.tone}>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {node.cta && (
        <div className="story-cta">
          <a href={node.cta.href} target="_blank" rel="noreferrer">{node.cta.label}</a>
        </div>
      )}
    </div>
  );
}

export default StoryPanel;
