import React, { useState } from 'react';

export default function Toggle4() {
    const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };
  return (
    <div>
      <p>Bai4</p>
      <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ẩn tiêu đề' : 'Hiển thị tiêu đề'}
      </button>
      {isVisible && <h1>Đây là tiêu đề</h1>}
    </div>
    </div>
  )
}
