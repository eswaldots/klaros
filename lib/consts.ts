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
    ingredients: ["1/2 palo", "1/2 palo"],
    transparency: ["1/2 palo", "1/2 palo"],
    description:
      "A disinfectant is a chemical substance or compound used to inactivate or destroy microorganisms on inert surfaces.[1] Disinfection does not necessarily kill all microorganisms, especially resistant bacterial spores;",
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
  },
];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type IProduct = ArrayElement<typeof PRODUCTS>;

export const BUY_CTA_LINK = (message: string) =>
  `https://wa.me/58242263894?text=${encodeURI(message)}`;
