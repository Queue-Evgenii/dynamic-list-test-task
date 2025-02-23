import { Product } from "@/interfaces/product";

export interface ProductsResponse {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
}
