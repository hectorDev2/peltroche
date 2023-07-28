export interface ProductFormatted {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  description: string;
  price: number;
  name: string;
  provider: string;
  features: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  images: string[];
}
