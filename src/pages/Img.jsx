import React from 'react';

const images = [
  { id: 1, src: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg', alt: 'Local Image' },
  { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png', alt: 'Online Image' },
];

const Img = () => {
  return (
    <div>
      <h1>Dynamic Image Rendering</h1>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={{ width: '200px', margin: '10px', borderRadius: '8px' }}
        />
      ))}
    </div>
  );
};

export default Img;
