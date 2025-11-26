import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    image: product1,
    title: "Founder's Reserve",
    description: "Rich, full-bodied with notes of dark chocolate and caramel.",
  },
  {
    image: product2,
    title: "Morning Ritual Blend",
    description: "A smooth, balanced blend perfect for starting your day.",
  },
  {
    image: product3,
    title: "Signature Espresso",
    description: "Intense and aromatic, the heart of a perfect Italian coffee.",
  },
  {
    image: product4,
    title: "Decaf Delight",
    description: "All the flavor without the caffeine, smooth and satisfying.",
  },
];

const FanFavorites = () => {
  return (
    <section className="px-4 sm:px-10 lg:px-20 py-5">
      <h2 className="text-foreground text-2xl font-bold px-4 pb-3 pt-5">
        Fan Favorites
      </h2>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FanFavorites;
