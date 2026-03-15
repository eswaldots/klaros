import { Carrusel } from "./components/carrusel";

const Products = () => {
  return (
    <section className="z-10 -mt-48 md:mt-64 px-12  md:h-screen flex items-center w-full relative overflow-x-hidden">
      <h2 className="text-8xl text-primary max-w-sm font-medium tracking-tight leading-[0.9] absolute top-1/2 -translate-y-1/2 left-4 md:left-12">
        <span className="text-primary-light">Limpiar</span> ya no significa
        dolor.
      </h2>

      <Carrusel />
    </section>
  );
};

export { Products };
