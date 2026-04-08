import axiosClient from "./axios-client";

export async function getStat() {
    try {
        const response =await axiosClient.get('/api/admin/dashboard/earnings-chart?startDate=2024-08-20&endDate=2024-09-23');
        return response.data;
    } catch (error:any) {
        return error?.response?.data;
    };
}