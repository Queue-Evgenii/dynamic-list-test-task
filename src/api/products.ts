import { ProductsResponse } from "@/interfaces/productsResponse";

export const getProducts = () => {
  return new Promise<ProductsResponse>((resolve, reject) => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
};
