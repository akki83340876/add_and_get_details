import axios from "axios";
import React, { useState } from "react";
const Modal = ({ handelClose }) => {
  const[name,setName]=useState("")
  const[desc,setDesc]=useState("")
  const[price,setPrice] = useState(0)
  const handelClick=async()=>{
    const url= "http://localhost:7878/create_product"
    const response= await axios.post(url,{
      name:name,
      description:desc,
      price:price
    })
    console.log(response)
    {response.status=== 200 ?alert("Product added successfully"):alert("Unable to add")}
    
    handelClose()
  }
  return (
    <div className="bg-white lg:w-[700px] flex flex-col gap-6 rounded-lg px-3 py-3 lg:py-6 lg:px-10">
      <p className="text-[20px] font-bold">Add Product</p>
      <p className="text-[20px] font-semibold">
        Add product here for your customers
      </p>
      <div className="flex flex-col w-full gap-2">
        <label className="text-[15px]">Product Name</label>
        <input
        onChange={(e)=>setName(e.target.value)}
          className="rounded-lg border-[1px] border-gray-600 py-2 w-full px-8 "
          placeholder="Your product name here"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <label className="text-[15px]">Product Description</label>
        <textarea
        onChange={(e)=>setDesc(e.target.value)}
          rows={5}
          className="rounded-lg border-[1px] border-gray-600 py-2 w-full px-8 "
          placeholder="Describe your product (less than 50 words)"
        />
      </div>
      <div className="flex flex-col  gap-2">
        <label className="text-[15px]">Product Price</label>
        <input
        onChange={(e)=>setPrice(e.target.value)}
          type="number"
          className="rounded-lg border-[1px] border-gray-600 py-2 w-[20%] px-8 "
          placeholder="$4.00"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handelClose}
          className="px-4 py-2 text-white font-bold rounded-full bg-blue-200">
          Cancel
        </button>
        <button onClick={handelClick} className="px-4 py-2 text-white font-bold rounded-full bg-blue-800">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Modal;
