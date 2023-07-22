import { StaticImageData } from "next/image";

export interface BlogTypes {
  title: string;
  slug: string;
  category: string;
  content: string;
  image: StaticImageData;
  date: string;
}
