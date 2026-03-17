import { Check, X } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { Fragment } from "react/jsx-runtime";

const Comparison = () => {
  return (
    <section className="p-3 md:h-fit py-24 z-50 w-full md:my-0 my-24">
      <div className="md:text-left text-center h-full w-full rounded-md px-2 md:p-3 md:flex-row flex-col-reverse flex items-center gap-2 md:gap-24 z-50 bg-transparent md:bg-white">
        <div className="md:h-[66rem] bg-pink-50 h-96 max-w-lg w-full md:min-w-md rounded-sm z-20">
          <Image
            alt="gota"
            src="/bubbles.png"
            width={6000}
            height={6000}
            className="h-full w-auto object-cover rounded-sm z-20"
          />
        </div>

        <ComparisonTable />
      </div>
    </section>
  );
};

const comparisons = [
  "Efecto desengrasante instantaneo",
  "pH balanceado",
  "Fórmula concentrada para más lavados",
  "Sin residuos toxicos ni blanqueadores",
  "Ideal para pieles sensibles",
  "Aroma fresco y duradero",
  "Ingredientes biodegradables y seguros",
];

const ComparisonTable = () => {
  return (
    <div className="w-full max-w-xl mx-auto z-50">
      <h2 className="text-primary font-medium tracking-tighter w-full text-7xl leading-[0.9]">
        <span className="text-primary-light">Mas claro imposible</span>
        <br />
        Mira la diferencia
      </h2>

      <div className="grid grid-cols-4 text-left my-12 tracking-tighter">
        <span className="text-xl col-span-2 text-primary-light leading-[0.8]">
          Beneficios
        </span>
        <span className="font-semibold text-xl text-primary text-center leading-[0.8]">
          KLAROS
        </span>
        <span className="text-xl text-primary-light text-center leading-[0.8]">
          Limpiador estandar
        </span>

        <hr className="col-span-4 my-4 border-primary" />

        {comparisons.map((comparsion, i) => (
          <Fragment key={i}>
            <span className="text-primary col-span-2 text-xl md:text-2xl py-2">
              {comparsion}
            </span>

            <span className="text-primary text-2xl bg-secondary rounded-lg grid place-content-center py-0 md:py-2 md:h-auto h-12 my-auto w-12 md:w-28 mx-auto">
              <HugeiconsIcon icon={Check} />
            </span>

            <span className="text-primary text-2xl grid place-content-center md:w-28 w-12 mx-auto py-2">
              <HugeiconsIcon icon={X} />
            </span>

            <hr className="border-accent col-span-4 my-2" />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export { Comparison };
