import img2961 from '../assets/images/IMG_2961.jpg';
import img3054 from '../assets/images/IMG_3054.jpg';
import img3297 from '../assets/images/IMG_3297.jpg';
import img3597 from '../assets/images/IMG_3597.jpg';
import img3613 from '../assets/images/IMG_3613.jpg';
import img3616 from '../assets/images/IMG_3616.jpg';
import img3723 from '../assets/images/IMG_3723.jpg';
import lima1 from '../assets/images/lima1.mp4';
import chirapaq1 from '../assets/images/chirapaq1.jpg';
import chirapaq2 from '../assets/images/chirapaq2.jpg';
import economica1 from '../assets/images/economica1.jpeg';
import economica2 from '../assets/images/economica2.jpeg';
import economica3 from '../assets/images/economica2.jpg';
import iep1 from '../assets/images/IEP1.jpeg';
import iep2 from '../assets/images/IEP2.jpg';
import pucp1 from '../assets/images/PUCP1.jpg';
import pucp2 from '../assets/images/PUCP2.jpg';
import qosqococatea from '../assets/images/qosqo-cocatea.jpg';
import qosqocorn from '../assets/images/qosqo-corn.jpeg';
import qosqomain from '../assets/images/qosqo-main.jpeg';
import qosqo1 from '../assets/images/qosqo1.jpg';
import qosqo2 from '../assets/images/qosqo2.jpeg';
import qosqo3 from '../assets/images/qosqo3.jpeg';
import qosqo4 from '../assets/images/qosqo4.jpeg';
import qosqo5 from '../assets/images/qosqo5.jpeg';

export const locations = {
  lima: { coords: [-12.0464, -77.0428], zoom: 11, title: '祕魯首都：利馬' },
  cuscoPlaza: { coords: [-13.5167567, -71.9788134], zoom: 16, title: '庫斯科武器廣場' },
  misminay: { coords: [-13.3431987, -72.2005362], zoom: 16, title: 'Misminay 高原社區' },
  cbc: { coords: [-13.518319, -71.974546], zoom: 17, title: 'CBC 安地斯區域研究中心' },
  qosqo: { coords: [-13.5169693, -71.9859324], zoom: 17, title: 'Asociación Qosqo Maki' },
  chirapaq: { coords: [-12.0663364, -77.0432831], zoom: 17, title: 'CHIRAPAQ 祕魯原住民文化中心' },
  taiwanOffice: { coords: [-12.0800082, -76.9708825], zoom: 16, title: '駐祕魯臺北經濟文化辦事處' },
  pucp: { coords: [-12.0690919, -77.0782022], zoom: 15, title: '天主教利馬大學（PUCP）' },
  iep: { coords: [-12.0678229, -77.04426], zoom: 17, title: '祕魯研究所（IEP）' },
  taiwan: { coords: [24.3070653, 120.7148917], zoom: 16, title: '台中市后里區內埔國民小學' },

};

export const journeyNodes = [
  {
    key: 'lima',
    navLabel: '1. 利馬首站',
    title: '秘魯的首都兼最大城市',
    subtitle: '建在沙漠上的不雨之城',
    gallery: [
      { src: lima1, alt: '利馬' },
    ],
    paragraphs: [
      '許多秘魯人都會湧入利馬尋找更好的工作機會。我在短短一天的車程中，從整齊的住宅、植栽，到沒有完善基礎設施的聚落，只相隔幾條街而已。',
    ],
  },
  {
    key: 'cuscoPlaza',
    navLabel: '2. 庫斯科武器廣場',
    title: '從古城廣場走進 Qosqo Maki',
    subtitle: 'CUSCO PLAZA',
    gallery: [
      { src: qosqomain, alt: '庫斯科武器廣場' },
      { src: qosqo1, alt: '庫斯科武器廣場' },
      { src: qosqo2, alt: '庫斯科武器廣場' },
      { src: qosqo3, alt: '庫斯科武器廣場' },
      { src: qosqo4, alt: '庫斯科武器廣場' },
      { src: qosqo5, alt: '庫斯科武器廣場' },
      { src: qosqococatea, alt: '庫斯科武器廣場' },
    ],
    paragraphs: [
      '庫斯科是昔日印加帝國的首都，也是進入世界奇景馬丘比丘的門戶。廣場周邊同時保留殖民城市的公共空間與安地斯文明的歷史痕跡，理解一個組織之前，必須先理解它所在的城市、社群與歷史脈絡。',
    ],
    callout: {
      title: '海拔 3400 公尺，比台灣的合歡山主峰還要高',
      text: '飯店都會提供古柯茶（Coca tea），幫助緩解高山症。若情況緊急，飯店會提供吸氧服務給高山症狀的人。部分高檔奢華飯店會標榜「氧氣房」。',
    },
  },
  {
    key: 'misminay',
    navLabel: '3. 高原祈福',
    title: '高原祈福 安地斯山神（Apu）與大地母親（Pachamama）',
    subtitle: 'MISMINAY ─ 面對文化隔閡',
    gallery: [
      { src: img3054, alt: 'Misminay' },
      { src: img3723, alt: 'Misminay' },
      { src: qosqocorn, alt: 'Misminay' },
    ],
    paragraphs: [
      '在寒冷稀薄的高原上，當地原住民帶著無比莊嚴的神情，虔誠地向安地斯山神（Apu）與大地母親（Pachamama）祈福',
      '外來遊客在緊湊的行程表下，僅能單向地觀賞傳統祈福、進行短暫的農事勞動，並在最後與排成一列的居民進行公式化的合影。',
    ],
  },
  {
    key: 'cbc',
    navLabel: '4. CBC 智庫',
    title: '在地知識與環境監測的融合',
    subtitle: 'CBC ─ 科技作為多方對話的「溝通橋梁」',
    gallery: [
      { src: img2961, alt: 'CBC' },
      
    ],
    paragraphs: [
      '安地斯區域研究中心（CBC）的「Ojo al Agua（水資源與生命觀測）」平台：整合高原兒童、科學家與地方社區，攜手守護 Puray 潟湖。',
    ],
  },
  {
    key: 'qosqo',
    navLabel: '5. Qosqo Maki',
    title: '街頭青年的自立陪伴與發聲',
    subtitle: 'QOSQO MAKI ─ 改變弱勢孩子對未來的想像',
    gallery: [
      { src: img3297, alt: 'Qosqo Maki' },
      { src: img3597, alt: 'Qosqo Maki' },
    ],
    paragraphs: [
      'Qosqo Maki 實踐**「共同管理」**機制。這裡沒有由上而下的教條，宿舍的規則、每日的時間表、甚至是日常資金與物資的分配，都是由孩子們共同討論、民主決定。為了協助青年自立，協會更設有「烘焙工作坊（panadería）」與「木工工作坊（carpintería）」，讓青年在平等的環境中學習實務技能，從被動的「社會受助者」蛻變為具備自立能力的「勞動生產者」 ',
    ],
    quote: '協會自己開的咖啡店裡賣的麵包非常好吃！咖啡和麵包都是由居住在那裡的青少年做的',
  },
  {
    key: 'chirapaq',
    navLabel: '6. CHIRAPAQ',
    title: '食農主權與祖傳知識的科學轉譯',
    subtitle: 'CHIRAPAQ ─ 原民青年重建文化認同',
    gallery: [
      { src: img3613, alt: 'CHIRAPAQ' },
      { src: chirapaq1, alt: 'CHIRAPAQ' },
      { src: chirapaq2, alt: 'CHIRAPAQ' },
    ],
    paragraphs: [
      '在利馬拜訪 CHIRAPAQ 原民文化中心，深深被克丘亞族青年生物學家 Mark 的畢業論文打動。他使用現代分子生物學，對 4 種安地斯祖傳藜麥進行蛋白質結構分析，用科學的語言重新評估祖傳作物的價值，親手拿回糧食自主權。',
    ],
  },
  {
    key: 'taiwanOffice',
    navLabel: '7. 代表處茶敘',
    title: '在體制縫隙中直接交付支持',
    subtitle: 'TAIWAN OFFICE ─ 常民生存',
    gallery: [
      { src: economica1, alt: '駐祕魯代表處交流' },
      { src: economica2, alt: '駐祕魯代表處交流' },
      { src: economica3, alt: '駐祕魯代表處交流' },
    ],
    paragraphs: [
      '在駐祕魯代表處的茶敘中，我更具體地理解祕魯基層常民面對的非正規就業、低薪與公共服務落差。祕魯並非缺乏資源，而是資源常在行政流程中無法有效抵達使用者。',
    ],
  },
  {
    key: 'pucp',
    navLabel: '8. PUCP 學術交流',
    title: '從高等教育看見階級與文化治理',
    subtitle: 'PUCP ─ 學術研究、語言保存與教育門檻',
    gallery: [
      { src: pucp1, alt: '天主教利馬大學校園' },
      { src: pucp2, alt: '天主教利馬大學校園' },
      { src: img3616, alt: '天主教利馬大學校園' },
    ],
    paragraphs: [
      '天主教利馬大學（PUCP）提供了從學術與高等教育理解祕魯社會的視角。校方與研究中心透過跨學科研究深化對多元族群的理解，也嘗試將研究成果轉化為公共文化資源。',
      '交流同時讓我看見教育資源的階級差異：高昂學費可能形成進入頂尖大學的門檻，而推廣型大學與職業培訓則以較低門檻支持基層學習者。真正具包容性的教育系統，必須同時看見兩種需求。',
    ],
  },
  {
    key: 'iep',
    navLabel: '9. IEP 研究交流',
    title: '從研究理解多元文化治理',
    subtitle: 'IEP ─ 社會研究、公共治理與歷史記憶',
    gallery: [
      { src: iep1, alt: '祕魯研究所 IEP' },
      { src: iep2, alt: '祕魯研究所 IEP' },
    ],
    paragraphs: [
      '祕魯研究所（IEP）是長期研究祕魯社會結構、社會不平等、公共治理與政策發展的重要智庫。',
      '他們有專門為小學一至三年級設計的公民與多元教育教材編纂。祕魯教育部官方認可了高達 48 種原住民本土語言，並系統性地為每一種語種編寫相應的雙語母語教科書',
    ],
  },
  {
    key: 'taiwan',
    navLabel: '10. 🇹🇼 回台落地',
    title: '社會實踐行動',
    subtitle: 'TAIWAN ─ 歸國實踐大綱',
    paragraphs: [
      '放下一開始的執念，我著手規劃了兩個歸國社會實踐行動：',
    ],
    projects: [
      {
        icon: '🎯',
        title: '一日資訊與 AI 公民素養工作坊 (準備中 預計 2026/10/16)',
        text: '教導台灣學童，在 AI 假訊息時代，如何用建立批判性思考。',
        tone: 'clay',
      },
      {
        icon: '💻',
        title: 'GitHub 互動式地圖',
        text: '將所見所聞用數位導覽呈現，讓更多人能夠理解秘魯的文化、生態與社會。',
        tone: 'forest',
      },
    ],
    cta: { label: '開源 GitHub ', href: 'https://github.com/ShellyChaoo/peru-youth' },
  },
];

export const journeyNodeByKey = Object.fromEntries(journeyNodes.map((node) => [node.key, node]));
