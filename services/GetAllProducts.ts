import type { AxiosResponse } from "axios";
import axios from "axios";
import { ProductModel } from "../models/ProductModel";

interface GetAllProductsResponse {
    data: ProductModel[] | null;
}
const config = useRuntimeConfig();

export const getAllProducts = async (): Promise<GetAllProductsResponse | null> => {
    try {
        const response: AxiosResponse<GetAllProductsResponse> = await axios.get<GetAllProductsResponse>(`${config.public.apiBase}/api/products`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }
};

