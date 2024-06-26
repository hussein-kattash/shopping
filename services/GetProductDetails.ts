import type { AxiosResponse } from "axios";
import axios from "axios";
import { ProductModel } from "../models/ProductModel";

const config = useRuntimeConfig();

export const GetProductDetails = async (id:any): Promise<ProductModel | null> => {
    try {
        const response: AxiosResponse<ProductModel> = await axios.get<ProductModel>(`${config.public.apiBase}/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }
};