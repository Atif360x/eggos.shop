import React, { useState } from "react";
import { Plus, Check, Egg, Sparkles } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  // Default values
  const [selectedSize, setSelectedSize] = useState(product.sizesAvailable[0]);
  const [selectedPack, setSelectedPack] = useState(product.packsAvailable[0]);
  const [added, setAdded] = useState(false);

  // Price calculations
  const pricePerEgg = product.basePricePerEgg[selectedSize];
  const totalPrice = pricePerEgg * selectedPack;

  const handleAdd = () => {
    onAddToCart({
      id: `${product.id}_${selectedSize}_${selectedPack}`,
      productId: product.id,
      name: product.name,
      category: product.category,
      size: selectedSize,
      pack: selectedPack,
      pricePerEgg: pricePerEgg,
      totalPrice: totalPrice
    });
    
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const getCategoryColor = (cat) => {
    switch (cat.toLowerCase()) {
      case "organic":
        return "bg-green-100 text-green-800 border-green-800";
      case "specialty":
        return "bg-purple-100 text-purple-800 border-purple-800";
      default:
        return "bg-yellow-100 text-yellow-800 border-yellow-800";
    }
  };

  return (
    <div className="panel-brutal rounded-xl p-5 flex flex-col justify-between bg-white relative overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-neo-lg duration-150 border-2.5">
      
      {/* Product Tag */}
      <div className="flex justify-between items-center mb-3">
        <span className={`px-2 py-0.5 border-1.5 border-brand-dark rounded text-[10px] font-black uppercase tracking-wider ${getCategoryColor(product.category)}`}>
          {product.category}
        </span>
        {product.category === "Specialty" && (
          <span className="flex items-center gap-0.5 text-[10px] font-bold text-brand-orange animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> SPECIAL
          </span>
        )}
      </div>

      <div>
        {/* Visual Egg Card Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-brand-cream border-2 border-brand-dark w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-[2px_2px_0px_rgba(26,26,26,1)] relative">
            <Egg className={`w-8 h-8 text-brand-dark fill-current ${
              product.category === "Organic" 
                ? "text-emerald-700/10" 
                : product.category === "Specialty" 
                ? "text-amber-600/20" 
                : "text-amber-500/10"
            }`} />
            {product.category === "Specialty" && (
              <span className="absolute -top-1.5 -right-1.5 text-xs">🥚</span>
            )}
          </div>
          <div>
            <h3 className="text-lg font-black tracking-tight text-brand-dark leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-brand-dark/70 mt-1 font-semibold leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>

        {/* Size Selection (if multiple sizes exist) */}
        {product.sizesAvailable.length > 1 && (
          <div className="mb-4 text-left">
            <span className="text-[10px] font-black text-brand-dark/50 block mb-1.5 uppercase tracking-wider">SELECT SIZE:</span>
            <div className="flex gap-2">
              {product.sizesAvailable.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-xs font-bold border-2 rounded-lg cursor-pointer transition-all ${
                    selectedSize === size
                      ? "bg-brand-dark text-white border-brand-dark"
                      : "bg-white hover:bg-brand-cream text-brand-dark border-brand-dark/25"
                  }`}
                >
                  {size.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Pack Selection */}
        <div className="mb-5 text-left">
          <span className="text-[10px] font-black text-brand-dark/50 block mb-1.5 uppercase tracking-wider">SELECT PACK:</span>
          <div className="flex gap-2">
            {product.packsAvailable.map((pack) => (
              <button
                key={pack}
                onClick={() => setSelectedPack(pack)}
                className={`px-3 py-1.5 text-xs font-bold border-2 rounded-lg cursor-pointer transition-all ${
                  selectedPack === pack
                    ? "bg-brand-orange text-white border-brand-dark"
                    : "bg-white hover:bg-brand-cream text-brand-dark border-brand-dark/25"
                }`}
              >
                {pack} PACK {pack === 30 ? "(Tray)" : ""}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing & Add to Cart */}
      <div>
        <div className="flex items-center justify-between border-t border-brand-dark/10 pt-4 mb-4">
          <div className="text-left">
            <span className="text-[9px] font-black text-brand-dark/40 block leading-none uppercase">Total Price</span>
            <span className="text-2xl font-black text-brand-dark font-display leading-tight">
              ₹{totalPrice.toFixed(0)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[9px] font-bold text-brand-dark/40 block leading-none uppercase">Unit cost</span>
            <span className="text-xs font-bold text-brand-dark/80">
              ₹{pricePerEgg.toFixed(2)}/egg
            </span>
          </div>
        </div>

        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer border-2 border-brand-dark shadow-[2px_2px_0px_rgba(26,26,26,1)] transition-all ${
            added
              ? "bg-green-400 text-brand-dark translate-y-[1.5px] shadow-[0.5px_0.5px_0px_rgba(26,26,26,1)]"
              : "bg-brand-yellow hover:-translate-y-[1.5px] hover:shadow-[3.5px_3.5px_0px_rgba(26,26,26,1)] active:translate-y-[1.5px] active:shadow-[0.5px_0.5px_0px_rgba(26,26,26,1)] text-brand-dark"
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>ADDED TO CARTON</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>ADD TO CARTON</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
}
