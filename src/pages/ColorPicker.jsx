import React, { useState } from 'react';
import './ColorPicker.css';

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const hexToHsl = (hex) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 7) {
    r = parseInt(hex.substr(1, 2), 16) / 255;
    g = parseInt(hex.substr(3, 2), 16) / 255;
    b = parseInt(hex.substr(5, 2), 16) / 255;
  }

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
};

const ColorPicker = () => {
  const [color, setColor] = useState('#ff0000');

  return (
    <div className="color-picker-container">
      <h1>React Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        <h5>HEX: {color}</h5>
        {/* <h5>RGB: {hexToRgb(color)}</h5>
        <h5>HSL: {hexToHsl(color)}</h5> */}
      </div>
            <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        {/* <h5>HEX: {color}</h5> */}
        <h5>RGB: {hexToRgb(color)}</h5>
        {/* <h5>HSL: {hexToHsl(color)}</h5> */}
      </div>
            <div
        className="color-display"
        style={{ backgroundColor: color }}
      >
        {/* <h5>HEX: {color}</h5> */}
        {/* <h5>RGB: {hexToRgb(color)}</h5> */}
        <h5>HSL: {hexToHsl(color)}</h5>
      </div>
      
    </div>
  );
};

export default ColorPicker;
