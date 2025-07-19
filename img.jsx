import React from 'react';

const images = [
  { id: 1, src: '/images/image1.jpg', alt: 'Image 1' },
  { id: 2, src: '/images/image2.jpg', alt: 'Image 2' },
];

const img = () => {
  return (
    <div>
      <h1>Dynamic Image Rendering</h1>
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} style={{ width: '200px', margin: '10px' }} />
      ))}
    </div>
  );
};

export default img;
