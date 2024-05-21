import React, { useState } from 'react';
export default function Bai6() {
    // Tạo state để quản lý giá trị đếm
  const [count, setCount] = useState<number>(0);

  // Hàm xử lý khi nhấn vào nút tăng
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Hàm xử lý khi nhấn vào nút giảm
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <div>Bai6
      <h2>Bạn đã Click :{count} lần</h2>
      <button onClick={handleIncrement}>Tăng</button> 
      
      <button onClick={handleDecrement}>Giảm</button>
    </div>
    </div>
  )
}
