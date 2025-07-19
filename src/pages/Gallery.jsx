import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [newImage, setNewImage] = useState('');

  // Fetch images from backend
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get('http://localhost:5000/api/images')
      .then((response) => {
        const urls = response.data.map((item) => item.image);
        setImages(urls.length > 0 ? urls : sampleImages);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setImages(sampleImages); // fallback
      });
  };

  // POST new image to backend
  const handleAddImage = () => {
    if (!newImage.trim()) return;

    axios
      .post('http://localhost:5000/api/images', { image: newImage })
      .then(() => {
        fetchImages(); // Refresh the gallery
        setNewImage('');
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <div className="gallery-container">
      <h1>Photo Gallery App</h1>

      <div className="upload-section">
        <input
          type="text"
          placeholder="Enter image URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <button onClick={handleAddImage}>Add Image</button>
      </div>

      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
