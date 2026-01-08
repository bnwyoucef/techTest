import { useQuery } from "@tanstack/react-query";
import api from "../../api/axios.config";
import type { ProductResponse } from "../../types/product.types";

// get product by id
export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      // delay to see loading state
      await new Promise((resolve) => setTimeout(resolve, 500));
      const { data } = await api.get<ProductResponse>(`/product/${id}`);

      // handle response error
      if (data.status !== 200 || typeof data.data === "string") {
        throw new Error(
          typeof data.data === "string" ? data.data : "Failed to load product"
        );
      }

      return data.data;
    },
    enabled: !!id,
  });
};
