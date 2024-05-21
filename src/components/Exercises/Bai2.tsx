import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
export default function Bai2() {
    const [product, setProduct] = useState<Product>({
        id: 1,
        name: 'CocaCola',
        price: 1000,
        quantity: 10
      });
  return (
    <div>Bai2
       <div>
      <h3>Id: {product.id}</h3>
      <h3>Name:{product.name} </h3>
      <h3>Price :{product.price}</h3>
      <h3>Quanlity :{product.quantity}</h3>
      
    </div>
    </div>
  )
}
