import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
            <div className="w-[90vw] bg-[#C97B3D]/60 border border-[#C97B3D] rounded-[16] flex justify-self-center justify-around items-center px-8 py-4 m-5">
                <div>

                </div>

                <div className="text-bold w-auto">
                    <h3>
                        eggos.shop
                    </h3>
                </div>

                <div className="w-auto flex gap-3">
                    <Link href="#">shop</Link>
                    <p>|</p>
                    <Link href="#">about</Link>
                </div>
            </div>
        </nav>
    )
}