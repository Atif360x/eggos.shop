import React, { useState } from "react";
import ListingCard from "./ListingCard";
import eggsImg from "../assets/eggs.jpg";
import { Search, Filter, SlidersHorizontal, RefreshCw } from "lucide-react";

export default function BuyerDashboard({ listings, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [farmingFilter, setFarmingFilter] = useState("All");
  const [sizeFilter, setSizeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("freshness"); // 'priceAsc', 'priceDesc', 'freshness'

  const farmingMethods = ["All", "Free-Range", "Organic Free-Range", "Pasture-Raised", "Cage-Free"];
  const sizes = ["All", "Medium", "Large", "Jumbo"];

  const filteredListings = listings
    .filter((l) => {
      const matchSearch =
        l.farmName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.eggType.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchFarming = farmingFilter === "All" || l.farmingMethod === farmingFilter;
      const matchSize = sizeFilter === "All" || l.eggSize === sizeFilter;

      return matchSearch && matchFarming && matchSize;
    })
    .sort((a, b) => {
      if (sortBy === "priceAsc") return a.pricePerDozen - b.pricePerDozen;
      if (sortBy === "priceDesc") return b.pricePerDozen - a.pricePerDozen;
      if (sortBy === "freshness") return a.freshnessDays - b.freshnessDays;
      return 0;
    });

  const resetFilters = () => {
    setSearchTerm("");
    setFarmingFilter("All");
    setSizeFilter("All");
    setSortBy("freshness");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-display">
      
      {/* HEAVY BRUTALIST HERO BANNER */}
      <section className="panel-brutal-lg rounded-3xl p-6 md:p-8 bg-brand-cream border-4 border-brand-dark mb-10 flex flex-col md:flex-row items-center gap-8 shadow-neo-lg">
        <div className="flex-1 text-left">
          <span className="bg-brand-orange text-white border-2 border-brand-dark px-3 py-1 font-bold text-xs rounded-full uppercase tracking-wider inline-block mb-3">
            Hatch Premium Deals 🥚
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-brand-dark leading-none mb-4 uppercase">
            Bulk Eggs directly from <span className="text-brand-orange">quality farms</span>.
          </h2>
          <p className="text-sm md:text-base text-brand-dark/80 font-medium mb-6 leading-relaxed max-w-xl">
            Skip the middleman. Connect with certified poultry owners across the nation. Secure premium cases of Organic, Pasture-Raised, and Cage-Free eggs with guaranteed fresh laying dates.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="bg-white border-2 border-brand-dark px-3 py-1.5 rounded-lg text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              📈 Live Spot Pricing
            </div>
            <div className="bg-white border-2 border-brand-dark px-3 py-1.5 rounded-lg text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              🚚 Cold Freight Audited
            </div>
            <div className="bg-white border-2 border-brand-dark px-3 py-1.5 rounded-lg text-xs font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              🛡️ Escrow Protected
            </div>
          </div>
        </div>

        {/* Clean Eggs Image display in Brutalist Frame */}
        <div className="w-full md:w-80 h-64 panel-brutal rounded-2xl overflow-hidden shadow-neo-lg rotate-[2deg] relative flex-shrink-0 group hover:rotate-0 transition-transform">
          <img 
            src={eggsImg} 
            alt="Wholesale Organic Brown Eggs" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-brand-yellow border-2 border-brand-dark px-2 py-1 text-xs font-extrabold rounded text-center">
            SPOTLIGHT: GRADE-A ORGANICS
          </div>
        </div>
      </section>

      {/* FILTER & CONTROL PANEL */}
      <section className="panel-brutal p-5 rounded-2xl bg-white mb-8 border-3 border-brand-dark shadow-neo">
        <div className="flex flex-col gap-4">
          
          {/* Row 1: Search & Reset */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-brand-dark/50" />
              <input
                type="text"
                placeholder="Search farms, locations or egg types..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-brand-cream border-3 border-brand-dark rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-[2px_2px_0px_rgba(26,26,26,1)]"
              />
            </div>
            
            <button
              onClick={resetFilters}
              className="btn-brutal-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer font-bold text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>RESET FILTER</span>
            </button>
          </div>

          {/* Row 2: Selectors */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-brand-dark">
            
            {/* Farming Method */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-brand-orange" />
              <span>FARMING:</span>
              <div className="flex flex-wrap gap-1 bg-brand-cream p-1 border-2 border-brand-dark rounded-lg">
                {farmingMethods.map((m) => (
                  <button
                    key={m}
                    onClick={() => setFarmingFilter(m)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer transition-colors ${
                      farmingFilter === m
                        ? "bg-brand-dark text-white"
                        : "hover:bg-brand-orange/20 text-brand-dark"
                    }`}
                  >
                    {m.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Egg Size */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-brand-orange" />
              <span>SIZE:</span>
              <div className="flex flex-wrap gap-1 bg-brand-cream p-1 border-2 border-brand-dark rounded-lg">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSizeFilter(s)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold cursor-pointer transition-colors ${
                      sizeFilter === s
                        ? "bg-brand-dark text-white"
                        : "hover:bg-brand-orange/20 text-brand-dark"
                    }`}
                  >
                    {s.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2 ml-auto">
              <span>SORT BY:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-brand-cream border-2 border-brand-dark px-2.5 py-1 rounded-lg text-xs font-bold focus:outline-none focus:ring-1 focus:ring-brand-orange cursor-pointer"
              >
                <option value="freshness">LAID DATE (FRESHNESS)</option>
                <option value="priceAsc">PRICE: LOW TO HIGH</option>
                <option value="priceDesc">PRICE: HIGH TO LOW</option>
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCT LISTINGS GRID */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-black text-brand-dark font-display uppercase tracking-tight">
            Available wholesale batches ({filteredListings.length})
          </h3>
        </div>

        {filteredListings.length === 0 ? (
          <div className="text-center py-16 bg-white border-4 border-brand-dark border-dashed rounded-3xl p-8">
            <span className="text-5xl block mb-4">🍳</span>
            <h4 className="text-xl font-black mb-2 text-brand-dark uppercase">No egg batches found!</h4>
            <p className="text-sm text-brand-dark/70 font-medium max-w-md mx-auto">
              Try adjusting your search query, selecting "All" sizes/methods, or resetting your filter criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard
                key={listing.id}
                listing={listing}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
