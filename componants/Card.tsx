import Animations from "@/componants/Animations";

import Link from "next/link";

export default function Card () {
    return (
        <div id="animate" className="h-[40vh] p-3 aspect-[3/4.5] bg-[#FDFBF6] transition duration-160 rounded-2xl hover:scale-[1.02] z-index:0">
            <div className="h-[65%] bg-[#111] mb-2 rounded-[12]" />
            <h1 className="text-[#3D2B1F] font-bold text-lg">larg eggs</h1>
            <h3 className="text-[#E85D3F]/80">250</h3>
            <Link href="/products">
            <button className="bg-[#E85D3F] cursor-pointer m-1 border-2 border-[#E85D3F] px-2 py-1 rounded-md text-[#EDE0C8]">view</button></Link>
            <Link href="/cart">
            <button  className="bg-none m-1 cursor-pointer border-2 border-[#E85D3F] px-2 py-1 rounded-md text-[#E85D3F]">add to cart</button></Link>
            </div>
    )
}