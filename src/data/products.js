export const products = [
  {
    id: "prod_fresh_eggs",
    name: "Farm Fresh Table Eggs",
    category: "Standard",
    description: "Daily collected fresh farm eggs. Cleaned, graded, and packed securely. High in protein, perfect for daily home use.",
    sizesAvailable: ["Small", "Medium", "Large"],
    // Base price per egg in Indian Rupees (₹)
    basePricePerEgg: {
      Small: 6.00,
      Medium: 7.50,
      Large: 9.00
    },
    packsAvailable: [6, 12, 30] // Pack of 6, Pack of 12, Tray of 30
  },
  {
    id: "prod_organic_eggs",
    name: "Organic Free-Range Eggs",
    category: "Organic",
    description: "Laid by pasture-raised, grass-fed hens on our organic feeding routine. Rich golden yolks with premium taste.",
    sizesAvailable: ["Small", "Medium", "Large"],
    basePricePerEgg: {
      Small: 10.00,
      Medium: 12.50,
      Large: 15.00
    },
    packsAvailable: [6, 12, 30]
  },
  {
    id: "prod_double_yolk",
    name: "Premium Double-Yolk Eggs",
    category: "Specialty",
    description: "A rare delight! Hand-inspected and candled to guarantee two golden yolks inside every single shell.",
    sizesAvailable: ["Large"],
    basePricePerEgg: {
      Large: 22.00
    },
    packsAvailable: [6, 12]
  }
];
