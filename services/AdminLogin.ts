import type { AxiosResponse } from "axios";
import axios from "axios";
import { Login } from "~/models/LoginModel";

const config = useRuntimeConfig();

interface LoginResponse {
    token: string;
}

interface DashboardResponse {
     message:string
}

const getAdminDashboard = async (token:string): Promise<DashboardResponse> => {
    try {
        const response: AxiosResponse<DashboardResponse> = await axios.get<DashboardResponse>(
            `${config.public.apiBase}/admin/dashboard`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error in getAdminDashboard:", error);
        throw new Error("Failed to fetch admin dashboard data");
    }
};

export const AdminLogin = async (params: Login): Promise<DashboardResponse | undefined> => {
    try {
        const loginResponse: AxiosResponse<LoginResponse> = await axios.post<LoginResponse>(
            `${config.public.apiBase}/login`,
            params
        );

        const { token } = loginResponse.data;

        if (token) {
            const dashboardData = await getAdminDashboard(token);
            localStorage.setItem("AccessToken",token);
            return dashboardData;
        } else {
            console.error("No token found in login response");
            throw new Error("Authentication failed");
        }
    } catch (error:any) {
         return error.response.data
    }
};
