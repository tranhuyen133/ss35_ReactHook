import React, { useState } from 'react';
export default function Bai7() {
     // Tạo state để quản lý giá trị của input
  const [inputValue, setInputValue] = useState<string>('');

  // Hàm xử lý khi giá trị của input thay đổi
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>Bai7
      <div>
      {/* Input để lấy giá trị từ người dùng */}
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Nhập dữ liệu..." 
      />
      {/* Hiển thị thông điệp dựa trên giá trị của input */}
      {inputValue === '' ? (
        <p>Khi chưa nhập dữ liệu</p>
      ) : (
        <p>Khi nhập dữ liệu: {inputValue.length} ký tự</p>
      )}
    </div>
    </div>
  )
}
