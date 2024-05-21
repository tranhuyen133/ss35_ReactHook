import React, { useState } from 'react';
export default function ChangeColour3() {
    const [color, setColor] = useState<string>('black');

  const toggleColor = () => {
    setColor(prevColor => (prevColor === 'black' ? 'red' : 'black'));
  };

  return (
    <div>Bai3
      <div>
      <p style={{ color: color }}>Văn bản này sẽ thay đổi màu sắc khi bạn nhấn vào nút</p>
      <button onClick={toggleColor}>Thay đổi màu chữ</button>
    </div>
    </div>
  )
}
