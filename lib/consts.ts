export const PRODUCTS = [
  {
    id: 1,
    name: "Lavaplatos",
    slug: "lavaplatos",
    social: "/green_liquid.mp4",
    colors: {
      background: "bg-green-100",
      secondary: "bg-green-200",
      foreground: "text-green-900",
      bgForeground: "bg-green-900",
      linkButtons: "bg-green-900/20",
      fgBackground: "text-green-100",
      border: "border-green-300",
    },
    preview: {
      src: "/lavaplatos.png",
      height: 2000,
      width: 2000,
      spacing: "42",
      className: "w-42 -bottom-44 -left-2",
    },
    video: "/lavaplatos.mp4",
    description:
      "Arranca la grasa mas rebelde sin sacrificar la suavidad de tus manos. Formulado con tecnologia de pH equilibrado para proteger tu piel en cada lavada, creando una espuma densa, efectiva y respetuosa con el medio ambiente.",
    ingredients: [
      "Agua purificada",
      "Surfactantes biodegradables derivados del coco",
      "Glicerina vegetal",
      "Extracto de limon natural",
      "Regulador de pH",
    ],
    transparency: [
      "0% Sulfatos agresivos",
      "Fórmula 100% biodegradable",
      "Empaque reciclable",
      "Libre de crueldad animal",
    ],
  },
  {
    id: 2,
    name: "Desinfectante",
    social: "/white.mp4",
    slug: "desinfectante",
    colors: {
      background: "bg-purple-100",
      secondary: "bg-purple-200",
      foreground: "text-purple-900",
      bgForeground: "bg-purple-900",
      linkButtons: "bg-purple-900/20",
      fgBackground: "text-purple-100",
      border: "border-purple-300",
    },
    preview: { src: "/desinfectante.png", height: 2000, width: 2000 },
    ingredients: [
      "Agua desionizada",
      "Amonio cuaternario de quinta generación",
      "Fragancia citrica natural",
      "Solventes orgánicos",
      "Estabilizadores de fórmula",
    ],
    transparency: [
      "pH 7 Neutro",
      "Libre de cloro y amoniaco",
      "Seguro para mascotas y niños",
      "Aroma sin alérgenos",
    ],
    description:
      "Mas que desinfectar, KLAROS purifica tus espacios. Nuestra formula avanzada elimina el 99.9% de bacterias sin dejar residuos quimicos agresivos, manteniendo el aroma de un hogar fresco y un entorno totalmente seguro para los que más amas.",
    images: [
      {
        type: "video",
        src: "/desinfectante.mp4",
      },
    ],
    video: "/desinfectante.mp4",
  },
  {
    id: 3,
    name: "Detergente",
    social: "/microfiber.mp4",
    slug: "detergente",
    colors: {
      background: "bg-neutral-100",
      secondary: "bg-neutral-200",
      foreground: "text-neutral-900",
      bgForeground: "bg-neutral-900",
      linkButtons: "bg-neutral-900/20",
      fgBackground: "text-neutral-100",
      border: "border-neutral-300",
    },
    preview: {
      src: "/detergente.png",
      height: 2000,
      width: 2000,
      spacing: "36",
      className: "w-42 -bottom-36 -left-2",
    },
    video: "/detergente.mp4",
    images: [],
    description:
      "Cuidado textil de nivel experto. Nuestro detergente penetra las fibras para remover manchas dificiles mientras mantiene la ropa increiblemente suave. Diseñado meticulosamente para pieles sensibles, porque limpiar tu ropa no deberia irritar tu piel.",
    ingredients: [
      "Agua tratada",
      "Enzimas activas quitamanchas",
      "Surfactantes no iónicos",
      "Agentes suavizantes naturales",
      "Conservantes ecológicos",
    ],
    transparency: [
      "Testado dermatológicamente",
      "Sin colorantes artificiales",
      "Efectivo en agua fria",
      "Libre de fosfatos",
    ],
  },
];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type IProduct = ArrayElement<typeof PRODUCTS>;

export const BUY_CTA_LINK = (message: string) =>
  `https://wa.me/58242263894?text=${encodeURI(message)}`;
