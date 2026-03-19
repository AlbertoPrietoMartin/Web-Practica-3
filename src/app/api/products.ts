import { api } from "./api";
import { ProductT } from "../types";

export const getAllProducts = async (): Promise<ProductT[]> => {
  const res = await api.get("products");

  return res.data.products;
};

export const getProductById = async (
  id: string
): Promise<ProductT> => {
  const res = await api.get(`products/${id}`);
  return res.data;
};