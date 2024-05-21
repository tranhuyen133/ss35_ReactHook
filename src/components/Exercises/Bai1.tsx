import React, { useState } from 'react';
export default function Bai1() {
    const [name, setName] = useState<string>('Nguyễn Văn A');
  return (
    <div>
      <div>Bai1
      <h2>Họ và tên: {name}</h2>
    </div>
    </div>
  )
}
