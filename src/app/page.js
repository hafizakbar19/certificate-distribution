'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  let [id, setId] = useState(0);
  let [course, setCourse] = useState('');
  let [batch, setBatch] = useState(0)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/api/check-eligibility', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id, course, batch}),
    });

    // Check if the response has content before parsing it
    if (response.headers.get("content-length") !== "0") {
      const data = await response.json();
      alert(data.message);
    } else {
      // Handle the case where there is no content in the response
      alert("No data returned from the server");
    }
}
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center my-12 font-extrabold text-3xl text-[#3b71ca]'>
            <h1>SMIT Certificate Generation System</h1>
        </div>
        <form className='flex flex-col justify-center w-80 items-center mx-auto'>
            <input className='bg-[#dfe7f6] my-2 px-5 py-2 rounded-md text-[#3b71ca]' type="number" placeholder='Student ID' onChange={(e)=>setId(e.target.value)} />
            <input className='bg-[#dfe7f6] my-2 px-5 py-2 rounded-md text-[#3b71ca]' type="text" placeholder='Course Name' onChange={(e)=>setCourse(e.target.value)} />
            <input className='bg-[#dfe7f6] my-2 px-5 py-2 rounded-md text-[#3b71ca]' type="number" placeholder='Batch No' onChange={(e)=>setBatch(e.target.value)}/>
            <button onClick={handleSubmit} type="submit" className='bg-[#3b71ca] h-10 rounded-md px-3 mx-5 my-6 text-white'>Check Eligibility</button>
        </form>

    </>
    
  );
}
