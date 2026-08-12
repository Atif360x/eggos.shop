import React from "react";
import { X, Egg, ShoppingCart, Trash2, CheckCircle2, ShieldCheck, Truck } from "lucide-react";

export default function CartonCart({ isOpen, onClose, cartItems, onRemoveFromCart, onClearCart, onCheckout }) {
  if (!isOpen) return null;

  const totalEggsCount = cartItems.reduce((sum, item) => sum + (item.pack * item.quantity), 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.totalPrice * item.quantity), 0);
  
  // Carton visual filling logic:
  // 1 egg slot represents 2 eggs. Max 12 slots = 24+ eggs.
  const slotsToFill = Math.min(12, Math.max(cartItems.length > 0 ? 1 : 0, Math.ceil(totalEggsCount / 2)));

  const eggColors = [
    "bg-amber-100", // standard brown
    "bg-yellow-50",  // white
    "bg-emerald-100", // blue/green heirloom
    "bg-orange-100",  // light tint brown
    "bg-amber-200"   // dark brown
  ];

  const getEggColor = (index) => {
    return eggColors[index % eggColors.length];
  };

  // Shipping & Local Delivery calculations:
  // Delivery is free above ₹300, else it's ₹40.
  const freeDeliveryThreshold = 300;
  const baseDeliveryFee = 40;
  const deliveryFee = subtotal >= freeDeliveryThreshold ? 0 : baseDeliveryFee;
  const deliveryStatusText = subtotal >= freeDeliveryThreshold 
    ? "🎉 CONGRATS: FREE HOME DELIVERY UNLOCKED!"
    : `Add ₹${(freeDeliveryThreshold - subtotal).toFixed(0)} more for FREE Home Delivery!`;

  const totalCost = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs font-display">
      <div className="w-full max-w-lg bg-brand-cream border-l-3 border-brand-dark p-6 overflow-y-auto flex flex-col justify-between h-full shadow-xl relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 btn-brutal-white p-1 rounded-full cursor-pointer hover:bg-brand-orange hover:text-white border-2"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <ShoppingCart className="w-6 h-6 text-brand-orange" />
            <h2 className="text-2xl font-black tracking-tight text-brand-dark">
              MY SHOPPING CARTON
            </h2>
          </div>

          {/* EGG CARTON VISUAL (2x6 Grid) */}
          <div className="panel-brutal p-4 rounded-xl bg-brand-pulp mb-5 relative border-2.5 shadow-neo">
            <div className="text-[9px] font-black text-brand-dark/45 select-none text-left mb-3">
              EGGOS CARTON INDICATOR
            </div>
            
            <div className="grid grid-cols-6 gap-2">
              {[...Array(12)].map((_, index) => {
                const isFilled = index < slotsToFill;
                const eggColor = isFilled ? getEggColor(index) : "";
                
                return (
                  <div
                    key={index}
                    className={`aspect-square rounded-full flex items-center justify-center relative border-2 ${
                      isFilled 
                        ? `${eggColor} border-brand-dark shadow-[1.5px_1.5px_0px_rgba(26,26,26,1)] animate-wobble cursor-pointer` 
                        : "bg-brand-dark/5 border-dashed border-brand-dark/25 shadow-inner"
                    }`}
                    title={isFilled ? `Egg Slot ${index + 1}: Filled` : `Slot ${index + 1}: Empty`}
                  >
                    {isFilled ? (
                      <div className="relative flex flex-col items-center">
                        <Egg className="w-7 h-7 text-brand-dark fill-current opacity-85" />
                      </div>
                    ) : (
                      <div className="w-1.5 h-1.5 bg-brand-dark/10 rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Visual carton latch */}
            <div className="flex justify-center -mb-7 mt-3">
              <div className="w-12 h-4 bg-brand-orange border-2 border-brand-dark rounded-b-md shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] relative z-10 flex items-center justify-center">
                <div className="w-4 h-0.5 bg-brand-dark rounded-full" />
              </div>
            </div>
          </div>

          {/* Delivery Promotion Badge */}
          <div className={`border-2 border-brand-dark p-2 rounded-lg mb-5 font-bold text-[10px] text-center flex items-center justify-center gap-1.5 ${
            subtotal >= freeDeliveryThreshold
              ? "bg-green-50 text-green-950 border-green-800"
              : "bg-white text-brand-dark"
          }`}>
            <Truck className="w-3.5 h-3.5 text-brand-orange" />
            <span>{deliveryStatusText}</span>
          </div>

          {/* List of items */}
          <div className="space-y-3 mb-6 max-h-[350px] overflow-y-auto pr-1">
            <h3 className="text-xs font-black tracking-tight text-brand-dark border-b border-brand-dark/10 pb-1 text-left uppercase">
              Selected Products
            </h3>
            
            {cartItems.length === 0 ? (
              <div className="text-center py-10 bg-white border-2 border-brand-dark border-dashed rounded-xl text-brand-dark/60 font-semibold text-xs">
                <p>Your carton is empty!</p>
                <p className="text-[10px] mt-0.5 text-brand-dark/50">Add fresh eggs to start filling it.</p>
              </div>
            ) : (
              cartItems.map((item) => {
                const itemTotal = item.totalPrice * item.quantity;
                return (
                  <div key={item.id} className="panel-brutal p-3 rounded-lg bg-white flex items-center justify-between gap-3 border-2 shadow-sm">
                    <div className="text-left">
                      <h4 className="font-bold text-brand-dark text-xs">{item.name}</h4>
                      <p className="text-[10px] text-brand-dark/60 font-semibold">
                        Size: {item.size} | {item.pack} Pack
                      </p>
                      <p className="text-[10px] text-brand-orange font-bold mt-1">
                        Qty: {item.quantity} × ₹{item.totalPrice.toFixed(0)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-brand-dark">₹{itemTotal.toFixed(0)}</span>
                      <button
                        onClick={() => onRemoveFromCart(item.id)}
                        className="btn-brutal-white p-1 rounded-md text-red-600 border-2 border-brand-dark cursor-pointer hover:bg-red-50"
                        title="Remove product"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Pricing calculations & checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-brand-dark/10 pt-4">
            <div className="space-y-1.5 text-xs font-semibold text-brand-dark mb-4">
              <div className="flex justify-between">
                <span>Subtotal ({totalEggsCount} eggs):</span>
                <span>₹{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Home Delivery Fee:</span>
                <span>{deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}</span>
              </div>
              <div className="flex justify-between text-base font-black border-t border-brand-dark/10 pt-2 text-brand-orange">
                <span>TOTAL PAYABLE:</span>
                <span>₹{totalCost.toFixed(0)}</span>
              </div>
            </div>

            {/* Clear & Purchase buttons */}
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={onClearCart}
                className="btn-brutal-white py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 cursor-pointer col-span-1 text-xs border-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>EMPTY</span>
              </button>
              <button
                onClick={() => onCheckout(totalCost)}
                className="btn-brutal-orange py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 cursor-pointer col-span-2 shadow-[2px_2px_0px_rgba(26,26,26,1)] hover:shadow-[3px_3px_0px_rgba(26,26,26,1)] border-2 text-white text-xs"
              >
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>PLACE SECURE ORDER</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
