import { AnimatedButton } from "@/components/animated/animated-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IProduct, PRODUCTS } from "@/lib/consts";
import { cn } from "@/lib/utils";
import {
  BacteriaIcon,
  BubbleTea01Icon,
  DollarIcon,
  FactoryIcon,
  FlagIcon,
  HandSanitizerIcon,
  Infinity,
  MinusSignIcon,
  NoseIcon,
  PlantIcon,
  PlusSignIcon,
  Recycle,
  Stars,
  StarsIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { notFound } from "next/navigation";

const ServerPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = PRODUCTS.find((p: IProduct) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main
      className={cn(
        "w-screen md:w-screen rounded-b-[4rem] z-50",
        product.colors.background,
      )}
    >
      <div className="pb-24 flex flex-col-reverse md:flex-row items-start w-full pt-18 md:pt-36 px-4 md:px-12 justify-between">
        <div className="grid gap-12 md:gap-18 w-full md:max-w-[40vw] md:mt-0 mt-12">
          <h2
            className={cn(
              "text-7xl md:text-8xl font-medium tracking-tight",
              product.colors.foreground,
            )}
          >
            {product.name}
          </h2>

          <div className="items-center justify-between max-w-[40vw] md:flex hidden">
            <Icon
              icon={PlantIcon}
              text="Formula biodegradable"
              product={product}
            />
            <Icon icon={Infinity} text="pH 7 neutro" product={product} />

            <Icon
              icon={BubbleTea01Icon}
              text="Alta concentracion"
              product={product}
            />
          </div>

          <div className="flex md:flex-row flex-col-reverse items-start md:items-center gap-4 max-w-full">
            <Button
              className={cn(
                product.colors.bgForeground,
                product.colors.fgBackground,
                "text-3xl tracking-tight h-fit py-2 px-8 cursor-pointer w-fit",
              )}
            >
              Comprar
            </Button>

            <span
              className={cn(
                "text-xl font-medium leading-none",
                product.colors.foreground,
              )}
            >
              <span className="text-2xl">
                <span className="font-semibold">$5.00</span> / litro individual
              </span>
              <br />
              <span className="md:text-xl">
                Lleva el combo de 3 por $12.00 y ahorra un 20%
              </span>
            </span>
          </div>

          <p
            className={cn(
              "max-w-[90vw] md:max-w-[35vw] text-2xl leading-[1]",
              product.colors.foreground,
            )}
          >
            {product.description}
          </p>

          <Accordion className="max-w-[90vw] md:max-w-[40vw]">
            <AccordionItem
              value="ingredients"
              className={cn("cursor-pointer", product.colors.border)}
            >
              <AccordionTrigger
                className={cn(
                  "hover:no-underline text-3xl cursor-pointer",
                  product.colors.foreground,
                )}
              >
                Ingredientes
                <HugeiconsIcon
                  icon={PlusSignIcon}
                  strokeWidth={2}
                  data-slot="accordion-trigger-icon"
                  className={cn(
                    "pointer-events-none  shrink-0 group-aria-expanded/accordion-trigger:hidden",
                    product.colors.foreground,
                  )}
                />
                <HugeiconsIcon
                  icon={MinusSignIcon}
                  strokeWidth={2}
                  data-slot="accordion-trigger-icon"
                  className={cn(
                    "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline",
                    product.colors.foreground,
                  )}
                />
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "text-xl tracking-tight",
                  product.colors.foreground,
                )}
              >
                {product.ingredients?.map((ing) => (
                  <li>{ing}</li>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="transparency"
              className={cn("cursor-pointer", product.colors.border)}
            >
              <AccordionTrigger
                className={cn(
                  "hover:no-underline text-3xl cursor-pointer",
                  product.colors.foreground,
                )}
              >
                Transparencia
                <HugeiconsIcon
                  icon={PlusSignIcon}
                  strokeWidth={2}
                  data-slot="accordion-trigger-icon"
                  className={cn(
                    "pointer-events-none  shrink-0 group-aria-expanded/accordion-trigger:hidden",
                    product.colors.foreground,
                  )}
                />
                <HugeiconsIcon
                  icon={MinusSignIcon}
                  strokeWidth={2}
                  data-slot="accordion-trigger-icon"
                  className={cn(
                    "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline",
                    product.colors.foreground,
                  )}
                />
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "text-xl tracking-tight",
                  product.colors.foreground,
                )}
              >
                {product.transparency}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* 
<h1
            className={cn(
              "font-semibold uppercase text-7xl text-nowrap",
              product.colors.foreground,
            )}
          >
            7 pH biodegradable 7 pH biodegradable
          </h1>
		  */}

          <div className="grid gap-y-8 md:gap-y-8 items-center justify-between max-w-[90vw] md:max-w-[40vw] grid-cols-2 md:grid-cols-3">
            <Icon
              icon={PlantIcon}
              text="Formula biodegradable"
              product={product}
            />
            <Icon icon={Infinity} text="pH 7 neutro" product={product} />

            <Icon
              icon={BubbleTea01Icon}
              text="Alta concentracion"
              product={product}
            />

            <Icon icon={Recycle} text="Reciclable" product={product} />
            <Icon
              icon={BacteriaIcon}
              text="Aprueba de germenes"
              product={product}
            />

            <Icon
              icon={FactoryIcon}
              text="Hecho a la medida"
              product={product}
            />

            <Icon
              icon={NoseIcon}
              text="Eliminacion de olores"
              product={product}
            />
            <Icon
              icon={HandSanitizerIcon}
              text="Limpieza profunda"
              product={product}
            />

            <Icon icon={FlagIcon} text="Hecho en Venezuela" product={product} />
          </div>
        </div>

        <div
          className={cn(
            "h-[80vw] md:h-[calc(100vh-3rem)] rounded-4xl w-full md:w-[45vw] relative md:sticky top-6",
            product.colors.bgForeground,
          )}
        >
          <video
            muted
            playsInline
            autoPlay
            width={4000}
            height={2000}
            className="rounded-4xl size-full object-cover"
          >
            <source src={product.video} />
          </video>
        </div>
      </div>
    </main>
  );
};

const Icon = ({
  icon,
  text,
  product,
}: {
  icon: IconSvgElement;
  text: string;
  product: IProduct;
}) => {
  return (
    <div className="flex flex-col items-start text-left gap-2">
      <HugeiconsIcon
        icon={icon}
        className={cn("size-10", product.colors.foreground)}
      />
      <span
        className={cn(
          "text-xl max-w-32 leading-[0.9] md:font-normal font-medium",
          product.colors.foreground,
        )}
      >
        {text}
      </span>
    </div>
  );
};

export default ServerPage;
