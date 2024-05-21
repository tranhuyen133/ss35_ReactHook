import React, { useState } from 'react';
export default function Bai8() {
    const [selectedOption, setSelectedOption] = useState<string>('');

  // Hàm xử lý khi giá trị của select thay đổi
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div> Bài8
       <div>
      {/* Select để chọn giá trị */}
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Chọn thành phố</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="T.P Hồ Chí Minh">T.P Hồ Chí Minh</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
      {/* Hiển thị giá trị đã chọn */}
      <p>Thành Phố bạn chọn: {selectedOption}</p>
    </div>
    </div>
  )
}
