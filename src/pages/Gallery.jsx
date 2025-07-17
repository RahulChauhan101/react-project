import React, { useState, useEffect } from 'react';
import './Gallery.css';

const sampleImages = [
  'https://picsum.photos/id/1018/400/300',
  'https://picsum.photos/id/1025/400/300',
  'https://picsum.photos/id/1035/400/300',
  'https://picsum.photos/id/1041/400/300',
  'https://picsum.photos/id/1060/400/300',
  'https://picsum.photos/id/1074/400/300',
];

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulate API call
    setImages(sampleImages);
  }, []);

  return (
    <div className="gallery-container">
        <h1>Photo Gallary App</h1>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index}`} className="gallery-image" />
      ))}
    </div>
  );
};

export default Gallery;
