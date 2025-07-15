import React, { useState } from 'react';
import './ColorPicker.css';

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
        {color}
      </div>
    </div>
  );
};

export default ColorPicker;
