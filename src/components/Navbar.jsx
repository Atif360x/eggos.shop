import React from "react";
import { Egg, ShoppingBasket, HelpCircle } from "lucide-react";

export default function Navbar({ cartCount, openCart, onOpenHelp }) {
  return (
    <header className="border-b-4 border-brand-dark bg-white py-4 px-6 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-yellow border-2.5 border-brand-dark p-1.5 rounded-lg rotate-[-3deg] shadow-[2px_2px_0px_rgba(26,26,26,1)] transition-transform hover:rotate-[3deg] cursor-pointer">
            <Egg className="w-6 h-6 fill-white text-brand-dark" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-brand-dark m-0 select-none font-display">
              eggos<span className="text-brand-orange">.shop</span>
            </h1>
            <p className="text-[10px] font-black text-brand-dark/50 tracking-widest font-display uppercase">
              Fresh Poultry Eggs Online
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Help button */}
          <button
            onClick={onOpenHelp}
            className="btn-brutal-white p-2 rounded-lg flex items-center justify-center cursor-pointer border-2"
            title="How to order"
          >
            <HelpCircle className="w-5 h-5" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={openCart}
            className="btn-brutal px-4 py-2 rounded-lg flex items-center gap-2 relative cursor-pointer border-2 shadow-[2px_2px_0px_rgba(26,26,26,1)]"
          >
            <ShoppingBasket className="w-4 h-4" />
            <span className="font-display font-bold text-xs uppercase">Carton</span>
            <span className="bg-brand-orange text-white border-2 border-brand-dark font-display font-extrabold text-[10px] w-5 h-5 rounded-full flex items-center justify-center absolute -top-2 -right-2 shadow-[1px_1px_0px_rgba(0,0,0,1)]">
              {cartCount}
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}
