import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className='flex justify-center items-center my-12 font-extrabold text-3xl text-[#3b71ca]'>
            <h1>SMIT Certificate Generation System</h1>
        </div>
        <div className='flex flex-col justify-center w-80 items-center mx-auto'>
            <input className='bg-[#dfe7f6] my-2 px-5 py-2 rounded-md text-[#3b71ca]' type="number" placeholder='Student ID' />
            <input className='bg-[#dfe7f6] my-2 px-5 py-2 rounded-md text-[#3b71ca]' type="text" placeholder='Course Name' />
            <input className='bg-[#dfe7f6] my-2 px-5 py-2 rounded-md text-[#3b71ca]' type="number" placeholder='Batch No'/>
            <button className='bg-[#3b71ca] h-10 rounded-md px-3 mx-5 my-6 text-white'>Check Eligibility</button>
        </div>

    </>
    
  );
}
