import { useEffect, useState } from 'react';
import './HeroPhotoBackground.css';

const PHOTOS_RAW = [
  '/WebsitePhotos/1W8A0446.jpg',
  '/WebsitePhotos/1W8A0872.jpeg',
  '/WebsitePhotos/IMG_0056.jpeg',
  '/WebsitePhotos/IMG_0075.jpeg',
  '/WebsitePhotos/IMG_3464.jpg',
  '/WebsitePhotos/IMG_3481.jpg',
  '/WebsitePhotos/IMG_4213.jpg',
  '/WebsitePhotos/IMG_4215.jpg',
  '/WebsitePhotos/IMG_4222.jpg',
];

function shuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const PHOTOS = shuffle(PHOTOS_RAW);

const ROTATE_INTERVAL_MS = 5000;

function HeroPhotoBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-photo-bg" aria-hidden="true">
      {PHOTOS.map((src, i) => (
        <div
          key={src}
          className={`hero-photo-bg-slide ${i === index ? 'hero-photo-bg-slide--active' : ''}`}
        >
          <img src={src} alt="" className="hero-photo-bg-img" />
        </div>
      ))}
      <div className="hero-photo-bg-overlay" />
    </div>
  );
}

export default HeroPhotoBackground;
