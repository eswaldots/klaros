import { Link } from "next-view-transitions";
import { AnimatedButton } from "../animated/animated-button";
import Image from "next/image";

const LastSection = () => {
  return (
    <section className="w-full h-fit flex flex-col gap-28 items-center">
      <div className="w-full mt-48 flex flex-col items-center justify-center space-y-4 md:space-y-6 md:px-0 px-4">
        <h1 className="text-7xl text-center md:text-[10rem] font-medium tracking-tight text-primary leading-[0.8]">
          Ritual de cuidado total
        </h1>
        <h2 className="text-4xl text-center md:text-5xl tracking-tight text-primary-light font-medium leading-[1]">
          Proteccion + Brillo. Tu Formula Invencible.
        </h2>

        <p className="text-primary tracking-tight text-2xl max-w-sm leading-[1] text-center">
          KLAROS te da limpieza, y nuestra formula con pH neutro cuida tus
          manos. ¡La combinacion perfecta para un hogar que brilla y una familia
          que está protegida!
        </p>
      </div>

      <div className="flex items-center justify-between px-42 w-full gap-16">
        <div className="h-96 w-[32rem] relative">
          <div className="w-[60rem] h-[60rem] absolute -top-[18rem] -left-[29rem] md:-left-[14rem] md:-top-[14rem]">
            {/* TODO: cambiar esto a un <video />*/}
            <Image
              src="/animated_lavaplatos.webp"
              unoptimized
              fill
              loading="eager"
              className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)"
              alt="Lavaplatos"
            />
          </div>
        </div>

        <span className="font-bold text-primary md:block hidden text-9xl">
          +
        </span>

        <div className="h-96 w-[32rem] relative md:block hidden">
          <div className=" md:size-auto size-[124rem] top-0 -mt-20 absolute left-0">
            {/* TODO: cambiar esto a un <video />*/}
            <Image
              src="/output_animated.webp"
              unoptimized
              loading="eager"
              className="md:w-96 drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)"
              width="350"
              height="500"
              alt="Detergent"
            />
          </div>
        </div>
      </div>

      <div className="text-center gap-6 flex flex-col items-center -mt-12">
        <div className="text-primary-light text-xl tracking-tight">
          <span>Recien lanzado</span>
          <h3 className="font-semibold tracking-tight text-primary text-5xl">
            LAVAPLATOS
          </h3>
        </div>

        <Link href="/products" className="z-40">
          <AnimatedButton className="z-40">Ver productos</AnimatedButton>
        </Link>
      </div>
    </section>
  );
};

export { LastSection };
