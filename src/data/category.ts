export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Software development",
    slug: "software-dev",
    color: "blue",
    description:
      "Software development",
  },
];
