import Image from "next/image";
import { TestimonialList } from "./components/testimonial-list";

const Testimonials = () => {
  return (
    <section className="w-screen md:w-full h-[150vh] -mt-12 relative z-10 flex justify-center items-end overflow-x-hidden">
      <picture className="absolute inset-0 z-10">
        <Image
          src="/formule.png"
          alt="Formula"
          width={6000}
          height={6000}
          className="object-cover h-[150vh] w-full"
        />
      </picture>

      <h2 className="text-center leading-[0.8] tracking-tight text-8xl md:text-9xl font-medium text-white z-50 top-24 left-1/2 -translate-x-1/2 absolute text-nowrap">
        Claridad.
        <br className="md:hidden" /> simplicidad.
        <br />
        Klaros
      </h2>

      <TestimonialList />
    </section>
  );
};

export { Testimonials };
