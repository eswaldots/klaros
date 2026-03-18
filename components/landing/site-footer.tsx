import { BUY_CTA_LINK } from "@/lib/consts";
import { Link } from "next-view-transitions";

export const SiteFooter = () => {
  return (
    <div
      className="relative md:h-[525px] h-[600px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <footer className="bg-white z-10 p-6 py-12 md:py-16 md:p-16 space-y-28 md:space-y-48 fixed bottom-0 md:h-[525px] h-[600px] w-full">
        <div className="w-full flex md:flex-row flex-col items-start gap-8 md:gap-48">
          <div className="text-8xl font-medium tracking-tight flex flex-col gap-1 w-fit">
            <Link href="/">Inicio</Link>
            <Link href="/products">Productos</Link>
          </div>

          <div>
            <h2 className="text-xl tracking-tight text-muted-foreground my-2">
              Redes sociales
            </h2>
            <div className="flex flex-col gap-1">
              <Link
                href="https://instagram.com/quimicosklaros"
                className="font-medium tracking-tight text-3xl"
              >
                Instagram
              </Link>
              <Link
                href={BUY_CTA_LINK(
                  "Hola, estoy interesado en los productos KLAROS",
                )}
                className="font-medium tracking-tight text-3xl"
              >
                Whatsapp
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between items-start md:items-baseline max-w-screen">
          <span className="text-4xl font-semibold tracking-tight">KLAROS</span>

          <div className="flex items-baseline -gap-2 md:flex-row flex-col md:gap-12">
            <span className="text-xl">2026 klaros inc.</span>

            <Link
              href="https://aaronavila.is-a.dev"
              target="_blank"
              className="text-xl"
            >
              Sitio web hecho por Aaron Avila
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
