import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios.config";

interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

// get product by id
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await api.get<Product>(`/product/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
