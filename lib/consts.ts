export const PRODUCTS = [
  {
    id: 1,
    name: "Lavaplatos",
    slug: "lavaplatos",
    colors: {
      background: "bg-green-50",
      foreground: "text-green-900",
      secondary: "bg-purple-300",
      bgForeground: "bg-green-900",
    },
    preview: "/lavaplatos.png",
    images: [],
  },
  {
    id: 2,
    name: "Desinfectante",
    slug: "desinfectante",
    colors: {
      background: "bg-purple-100",
      secondary: "bg-purple-200",
      foreground: "text-purple-900",
      bgForeground: "bg-purple-900",
      fgBackground: "text-purple-100",
      border: "border-purple-300",
    },
    preview: "/desinfectante.png",
    description:
      "A disinfectant is a chemical substance or compound used to inactivate or destroy microorganisms on inert surfaces.[1] Disinfection does not necessarily kill all microorganisms, especially resistant bacterial spores;",
    images: [
      {
        type: "video",
        src: "/desinfectante.mp4",
      },
    ],
  },
  {
    id: 3,
    name: "Detergente",
    slug: "detergente",
    colors: {
      background: "bg-neutral-100",
      secondary: "bg-purple-300",
      foreground: "text-neutral-900",
      bgForeground: "bg-neutral-900",
    },
    preview: "/src",
    images: [],
  },
];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type IProduct = ArrayElement<typeof PRODUCTS>;

export const BUY_CTA_LINK = (message: string) =>
  `https://wa.me/584241365355?text=${encodeURI(message)}`;
