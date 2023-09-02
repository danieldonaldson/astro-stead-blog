export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Daniel Donaldson",
    slug: "daniel-donaldson",
    image: "/images/authors/daniel.jpg",
    bio: "Daniel is the founder of stead.",
  },
];
