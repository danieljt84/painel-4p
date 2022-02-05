import { Product } from "./Product";

export interface DetailProducts{
  product: Product;
  price: number;
  estoque: number;
  validity: Date;
  status: string;
}
