import Image from "next/image";
import { Inter, Roboto_Mono, Young_Serif } from 'next/font/google';

export default function Home() {
  return (
    <main>
      <div className="p-10 flex flex-col gap-5 mt-[20vh]">
        <h1 className="text-[#8B5A2B] font-black text-8xl font-[Young_serif]">
          Fresh, Quality Poultry Delivered Straight from the Farm
        </h1>
      </div>
    </main>
  );
}
