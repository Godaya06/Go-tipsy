// PREMIUM UI WITH ANIMATIONS (React + Tailwind + Framer Motion)

import { useState } from "react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { motion } from "framer-motion";

const products = [ { name: "Johnnie Walker Red", price: 2500, image: "https://images.unsplash.com/photo-1580910051074-3eb694886505" }, { name: "Tusker Lager", price: 250, image: "https://images.unsplash.com/photo-1608270586620-248524c67de9" }, { name: "Smirnoff Vodka", price: 1800, image: "https://images.unsplash.com/photo-1582571352032-448f7924d7e3" }, { name: "Jameson Whiskey", price: 3200, image: "https://images.unsplash.com/photo-1613070120286-98bfc2c3d4c3" } ];

export default function LiquorStoreUI() { const [cart, setCart] = useState([]);

const addToCart = (product) => { setCart([...cart, product]); };

const total = cart.reduce((sum, item) => sum + item.price, 0);

return ( <div className="p-6 bg-gray-100 min-h-screen"> <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold mb-6 text-center" > 🍾 Kenya Liquor Store </motion.h1>

{/* PRODUCTS GRID */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {products.map((p, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        <Card className="rounded-2xl shadow-lg overflow-hidden">
          <motion.img
            src={p.image}
            alt={p.name}
            className="h-48 w-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600 mb-2">KES {p.price}</p>
            <Button onClick={() => addToCart(p)} className="w-full">
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>

  {/* CART */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mt-10 bg-white p-6 rounded-2xl shadow-xl max-w-xl mx-auto"
  >
    <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>
    {cart.length === 0 ? (
      <p className="text-gray-500">Cart is empty</p>
    ) : (
      <ul className="space-y-2">
        {cart.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex justify-between"
          >
            <span>{item.name}</span>
            <span>KES {item.price}</span>
          </motion.li>
        ))}
      </ul>
    )}

    <div className="mt-4 font-semibold">Total: KES {total}</div>

    <input
      type="text"
      placeholder="2547XXXXXXXX"
      className="w-full mt-4 p-2 border rounded-lg"
    />

    <motion.div whileTap={{ scale: 0.95 }}>
      <Button
        className="w-full mt-4"
        onClick={() => alert("Integrate M-Pesa here")}
      >
        Pay with M-Pesa
      </Button>
    </motion.div>
  </motion.div>
</div>

); }

// ANIMATIONS ADDED: // - Page fade-in // - Product card stagger animation // - Hover zoom effects // - Cart slide-up // - Button press animation

// NEXT LEVEL: // - Page transitions // - Skeleton loading UI // - Micro-interactions (success checkmarks) // - Floating cart drawer
