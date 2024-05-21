// import React from 'react'
import { useState } from 'react'
export default function UseState() {
  const [count,setCount]=useState<number>(0);
  const increase=()=>{
    setCount(count+1)
    setCount(pre=>pre+1)
    setCount(a => a+2)
    setCount(b=>b+3)
    setCount(5)
    setCount(b=>b+3)
  }
  /*
  Batch Update


  */
    /*
    Hook là những cái hàm ,thôi, khi dùng hàm để ý cho thầy đầu vào của hàm ,đầu về trả về kết quả là gì?
    useState dùng đê quản lí trạng thái của dữ liệu 
    useState trả về 1 cái mảng có 2 phân tử 
        + phần tử đầu tiên là giá trị truyền vào useState
        +phần tử thứ hai là 1 cái function
    Dùng Destruction để hứng lấy giá trị
    khi cập nhật lại trạng thái của dữ liệu (setCount ) thì copmponet re-render lại


    */
    const result=useState(0)//[0,F]
    const[c,d]=useState(0);
    console.log("giá trị result",result);
    // let arr=[5,6]
    // let [a,b]=arr
    console.log("component re-render");
    
  return (
    <div>UseState 
      <p>Gía trị biến count {count}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={()=>setCount(count-1)}>Giảm</button>
    </div>
  )
}
