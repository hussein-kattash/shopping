import axios from "axios"
interface Logout{
    message:string;
}
const config = useRuntimeConfig();

export const LogoutService = async (): Promise<Logout | undefined> => {
    try {
        const logoutResponse = await axios.post<Logout>(`${config.public.apiBase}/logout`);
        return logoutResponse.data;
    } catch (error:any) {
         return error.response.data
    }
};