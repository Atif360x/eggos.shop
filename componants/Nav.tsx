import Link from "next/link";



export default function Navbar(){
    return(
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center">
            <div className=" w-[90vw] bg-[#3D2B1F]/90 backdrop-blur-md border border-[#3D2B1F] text-[#FDFBF6] rounded-[16px] flex justify-self-center justify-between bg-blur-md items-center px-8 py-4 m-5">
                <div>
                    <img src="/egg.svg" alt="logo" width={25} className="cursor-pointer fill-[#FDFBF6]"/>
                    
                </div>

                <div className="font-bold w-auto hidden md:block">
                    <h3 className="cursor-pointer">
                        eggos.shop
                    </h3>
                </div>

                <div className="w-auto flex gap-3">
                    <Link href="/shop" className="hover: hover:scale-105 transition-all duration-300 ease-out inline-block">shop</Link>
                    <p>|</p>
                    <Link href="about" className="hover: hover:scale-105 transition-all duration-300 ease-out inline-block">about</Link>
                    <p>|</p>
                    <Link href="about" className="hover: hover:scale-105 transition-all duration-300 ease-out inline-block">profile</Link>
                </div>
            </div>
        </nav>
    )
}