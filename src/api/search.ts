import { ProductsResponse } from "@/interfaces/productsResponse";

export const searchProducts = (query: string) => {
  return new Promise<ProductsResponse>((resolve, reject) => {
    fetch(`https://dummyjson.com/products/search?q=${query}&limit=100`)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
