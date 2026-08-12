import Image from "next/image";
import { Inter, Roboto_Mono, Young_Serif } from 'next/font/google';
import { IconLeaf, IconClock, IconShieldCheck } from '@tabler/icons-react';


import Card from "@/componants/Card";


<IconLeaf size={20} stroke={1.5} />

export default function Home() {
  return (
    <main>
    <div className="p-10 flex flex-col items-center gap-5 mt-[20vh] gap-10">
        <div className="bg-[#F0997B]/90 text-[#4A1B0C] py-1 px-2 rounded-[999px] border border-[#F0997B]">
          <p id="animate">farm fresh, delivered daily</p>
        </div>
        <h1 id="animate" className="text-[#8B4226] font-black text-6xl font-[Young_serif] md:text-center md:max-w-[60vw]">
          Fresh, Quality Poultry Delivered Straight from the Farm
        </h1>
        <h3 id="animate" className="text-[#5C3A21] text-lg md:text-center">
          Ethically raised, hand-picked, and on your doorstep within 24 hours of harvest.
        </h3>
          <div id="animate">
            <button className=" cursor-pointer py-3 px-6 rounded-lg bg-[#E85D3F]/90 border text-[#FDFBF6] border-[#E85D3F] m-2 transition duration-160 active:bg-transparent active: border-2 active:text-[#E85D3F] hover:scale-[1.02] z-index:0">shop</button>
            <button className="cursor-pointer py-3 px-6 rounded-lg border border-2 border-[#5C3A21] font-bold text-[#5C3A21] m-2 transition duration-160 active:bg-[#5C3A21] active:text-[#FDFBF6] hover:scale-[1.02] z-index:0">learn more</button>
          </div>

      <div id="animate" className="flex flex-wrap w-full h-auto justify-center gap-2 px-4">
          <div className="cursor-pointer flex items-center gap-1.5 py-4 px-8 sm:py-2 sm:px-4 rounded-[999px] border border-[#97C459] bg-[#EAF3DE] text-[#27500A]">
            <IconLeaf size={16} className="sm:w-[18px] sm:h-[18px]" stroke={1.75} />
            <span className="text-md sm:text-md font-medium whitespace-nowrap">Ethically raised</span>
          </div>

          <div className="cursor-pointer flex items-center gap-1.5 py-4 px-8 sm:py-2 sm:px-4 rounded-[999px] border border-transparent bg-[#F0997B] text-[#4A1B0C]">
            <IconClock size={16} className="sm:w-[18px] sm:h-[18px]" stroke={1.75} />
            <span className="text-md sm:text-md font-medium whitespace-nowrap">24hr fresh</span>
          </div>

          <div className="cursor-pointer flex items-center gap-1.5 py-4 px-8 sm:py-2 sm:px-4 rounded-[999px] border border-transparent bg-[#FAC775] text-[#412402]">
            <IconShieldCheck size={16} className="sm:w-[18px] sm:h-[18px]" stroke={1.75} />
            <span className="text-md sm:text-md font-medium whitespace-nowrap">500+ verified farms</span>
          </div>
      </div>

      <div>
      </div>
      </div>

      <div className="bg-[#F0997B]/49 w-full flex flex-col p-5 items-center">
        <h3 className="text-[#5C3A21] text-lg font-bold mb-10">products</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>

      <div className="w-full h-30 bg-[#3D2B1F] flex flex-col item-center justify-center">
         <p className=" text-[#FDFBF6] text-center"> © 2026 eggos.shop. Serving fresh styles daily. Egg-straordinary quality, always.</p>
         <p className=" text-[#FDFBF6]/80 text-center text-sm">Designed & Developed with  by <a href="https://github.com/Atif360x">atif mansuri</a></p>
      </div>
    </main>
  );
}
