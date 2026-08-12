import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartonCart from "./components/CartonCart";
import { products } from "./data/products";
import eggsImg from "./assets/eggs.jpg";
import { Egg, CheckCircle2, X, Sparkles, MapPin, Phone, HelpCircle } from "lucide-react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [completedOrderDetails, setCompletedOrderDetails] = useState(null);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = (totalCost) => {
    setCompletedOrderDetails({
      items: [...cart],
      total: totalCost,
      orderId: `EGG-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString()
    });
    setCart([]);
    setIsCartOpen(false);
    setOrderCompleted(true);
  };

  const totalCartEggs = cart.reduce((sum, item) => sum + (item.pack * item.quantity), 0);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col justify-between selection:bg-brand-orange selection:text-white pb-12 font-sans">
      
      {/* Navbar */}
      <Navbar
        cartCount={totalCartEggs}
        openCart={() => setIsCartOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-grow">
        
        {/* MINIMAL HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-12 border-b-2.5 border-brand-dark pb-10">
          <div className="flex-1 text-left">
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-brand-yellow text-brand-dark text-[10px] font-black border border-brand-dark px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Direct from Poultry Farm 🐓
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-brand-dark mb-4 uppercase">
              Fresh Organic & <br />
              <span className="text-brand-orange">Double-Yolk</span> Eggs.
            </h2>
            <p className="text-sm font-semibold text-brand-dark/75 leading-relaxed max-w-lg mb-6">
              Welcome to the Eggos farm shop. We breed happy free-range hens, collecting layings daily for clean, premium quality. Order Standard eggs, certified Organics, or our famous Double-Yolk specials directly to your doorstep.
            </p>
            
            {/* Quick Farm Badges */}
            <div className="flex flex-wrap gap-2 text-[10px] font-black">
              <span className="bg-white border-2 border-brand-dark px-2.5 py-1 rounded-md shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                📍 LOCAL DELIVERY (₹40 / FREE above ₹300)
              </span>
              <span className="bg-white border-2 border-brand-dark px-2.5 py-1 rounded-md shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                🍳 100% ORGANIC CERTIFIED
              </span>
              <span className="bg-white border-2 border-brand-dark px-2.5 py-1 rounded-md shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                ✨ HAND CANDLED SPECIALTIES
              </span>
            </div>
          </div>

          {/* Minimal Spotlight Image */}
          <div className="w-full md:w-72 h-64 panel-brutal rounded-2xl overflow-hidden shadow-neo rotate-[1.5deg] shrink-0 border-2.5 hover:rotate-0 transition-transform duration-200">
            <img 
              src={eggsImg} 
              alt="Farm Eggs Collection" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-2 left-2 right-2 bg-brand-yellow border-2 border-brand-dark py-1 text-[10px] font-black rounded text-center">
              TODAY'S FARM LAYINGS
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="text-left mb-10">
          <h3 className="text-xl font-black text-brand-dark uppercase tracking-wider mb-6 flex items-center gap-1.5">
            <span className="text-brand-orange">●</span> OUR FRESH LAYINGS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

      </main>

      {/* Shopping Carton Drawer */}
      <CartonCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckout={handleCheckout}
      />

      {/* Help Modal */}
      {isHelpOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs font-display p-4">
          <div className="w-full max-w-md bg-brand-cream border-3 border-brand-dark p-6 rounded-xl shadow-neo-lg relative text-left">
            <button
              onClick={() => setIsHelpOpen(false)}
              className="absolute top-4 right-4 btn-brutal-white p-1 rounded-full cursor-pointer hover:bg-brand-orange hover:text-white border-2"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-black mb-4 uppercase flex items-center gap-1.5 border-b border-brand-dark/10 pb-2">
              <span>🥚 HOW TO ORDER</span>
            </h2>
            
            <div className="space-y-4 text-xs font-semibold text-brand-dark/95">
              <div className="border-2 border-brand-dark p-3 bg-white rounded-lg flex items-start gap-2.5">
                <span className="text-sm font-bold bg-brand-yellow border-2 border-brand-dark rounded-full w-6 h-6 flex items-center justify-center shrink-0">1</span>
                <div>
                  <h4 className="font-bold text-xs mb-0.5">CHOOSE YOUR EGGS</h4>
                  <p className="text-[10px] font-semibold text-brand-dark/65">Select Standard or Organic eggs, choose size (Small, Medium, Large), and select pack size (6, 12, or 30-egg tray).</p>
                </div>
              </div>

              <div className="border-2 border-brand-dark p-3 bg-white rounded-lg flex items-start gap-2.5">
                <span className="text-sm font-bold bg-brand-orange text-white border-2 border-brand-dark rounded-full w-6 h-6 flex items-center justify-center shrink-0">2</span>
                <div>
                  <h4 className="font-bold text-xs mb-0.5">FILL THE CARTON</h4>
                  <p className="text-[10px] font-semibold text-brand-dark/65">Your shopping cart simulates an egg box filling up. 1 visual egg slot represents 2 physical eggs.</p>
                </div>
              </div>

              <div className="border-2 border-brand-dark p-3 bg-white rounded-lg flex items-start gap-2.5">
                <span className="text-sm font-bold bg-brand-yellow border-2 border-brand-dark rounded-full w-6 h-6 flex items-center justify-center shrink-0">3</span>
                <div>
                  <h4 className="font-bold text-xs mb-0.5">FREE HOME DELIVERY</h4>
                  <p className="text-[10px] font-semibold text-brand-dark/65">We charge ₹40 flat delivery fee to support farm logistics. Orders above ₹300 unlock free home delivery.</p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsHelpOpen(false)}
              className="btn-brutal w-full py-2.5 rounded-lg font-bold text-xs mt-6 cursor-pointer border-2 shadow-[2px_2px_0px_rgba(26,26,26,1)]"
            >
              START ORDERING
            </button>
          </div>
        </div>
      )}

      {/* Checkout Order Completed Modal */}
      {orderCompleted && completedOrderDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs font-display p-4">
          <div className="w-full max-w-md bg-white border-3 border-brand-dark p-6 rounded-2xl shadow-neo-xl text-center relative overflow-hidden">
            
            <div className="absolute top-0 left-0 right-0 h-3 bg-brand-yellow border-b-2 border-brand-dark" />
            
            <div className="w-12 h-12 bg-green-50 border-2 border-brand-dark rounded-full flex items-center justify-center mx-auto mb-3 mt-3">
              <CheckCircle2 className="w-6 h-6 text-green-700" />
            </div>

            <h2 className="text-2xl font-black text-brand-dark uppercase tracking-tight mb-1">
              ORDER RECEIVED!
            </h2>
            <p className="text-[10px] font-bold text-brand-dark/50 mb-5">
              ORDER REF: {completedOrderDetails.orderId} | DATE: {completedOrderDetails.date}
            </p>

            <div className="border-2 border-brand-dark p-3.5 bg-brand-cream rounded-xl mb-5 text-left space-y-2 font-semibold text-xs text-brand-dark">
              <h4 className="font-black text-xs text-brand-dark border-b border-brand-dark/10 pb-1 uppercase">
                Order Manifest
              </h4>
              <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
                {completedOrderDetails.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-[11px] font-bold">
                    <span>
                      {item.quantity} × {item.pack} Pack ({item.name} - {item.size})
                    </span>
                    <span>₹{(item.totalPrice * item.quantity).toFixed(0)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between border-t border-brand-dark/10 pt-2 font-black text-sm text-brand-orange">
                <span>TOTAL AMOUNT PAID:</span>
                <span>₹{completedOrderDetails.total.toFixed(0)}</span>
              </div>
            </div>

            <p className="text-[10px] font-bold text-brand-dark/70 mb-5 leading-relaxed max-w-xs mx-auto">
              Your farm fresh eggs are being packed in shock-proof boxes. Our delivery driver will reach your location within 4 hours. Keep frying!
            </p>

            <button
              onClick={() => {
                setOrderCompleted(false);
                setCompletedOrderDetails(null);
              }}
              className="btn-brutal-orange w-full py-2.5 rounded-lg font-bold text-xs cursor-pointer shadow-[2px_2px_0px_rgba(26,26,26,1)] text-white hover:bg-brand-orange border-2"
            >
              ORDER MORE EGGS
            </button>
          </div>
        </div>
      )}

      {/* Minimal Footer */}
      <footer className="mt-12 text-center text-[10px] font-black text-brand-dark/45 max-w-6xl mx-auto px-6 w-full">
        <div className="border-t border-brand-dark/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-brand-orange" /> Eggos Poultry Farm, Sector 12, Chandigarh</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-brand-orange" /> Farm Hotline: +91 98765 43210</span>
          </div>
          <p>© 2026 EGGOS FRESH POULTRY FARM. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

    </div>
  );
}
