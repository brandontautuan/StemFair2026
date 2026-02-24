import { useEffect, useState } from 'react';
import './PhotoCarousel.css';

const PHOTOS = [
  '/WebsitePhotos/1W8A0446.jpg',
  '/WebsitePhotos/1W8A0872.jpeg',
  '/WebsitePhotos/IMG_0056.jpeg',
  '/WebsitePhotos/IMG_0075.jpeg',
];

const ROTATE_INTERVAL_MS = 5000;

function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHOTOS.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="photo-carousel" role="region" aria-label="Event photos">
      <div className="photo-carousel-inner">
        {PHOTOS.map((src, i) => (
          <div
            key={src}
            className={`photo-carousel-slide ${i === index ? 'photo-carousel-slide--active' : ''}`}
            aria-hidden={i !== index}
          >
            <img src={src} alt="" className="photo-carousel-img" />
          </div>
        ))}
      </div>
      <div className="photo-carousel-dots" aria-hidden="true">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`photo-carousel-dot ${i === index ? 'photo-carousel-dot--active' : ''}`}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoCarousel;
