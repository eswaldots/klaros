import { AnimatedProduct } from "@/components/products/components/animated-product";
import { PRODUCTS } from "@/lib/consts";

const ServerPage = () => {
  return (
    <main className="w-screen bg-white px-4 md:px-6 pb-16">
      <div className="md:pt-[15vw] pt-[30vw] space-y-16">
        <h2 className="text-neutral-500 text-6xl md:text-8xl font-medium tracking-tight leading-[0.9]">
          Nuestros principales
          <br />
          <span className="text-neutral-900">Productos.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => {
            return <AnimatedProduct {...product} key={product.id} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default ServerPage;
