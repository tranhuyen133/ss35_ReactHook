import React, { useState } from 'react';
export default function Form5() {
    const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <div> 
        <p>Bai5</p>
      
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Nhập giá trị..." 
      />
      <p>Giá trị bạn nhập: {inputValue}</p>
    </div>
    </div>
  )
}
