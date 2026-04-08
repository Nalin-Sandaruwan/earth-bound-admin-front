import axiosClient from "./axios-client";

export async function getEarnByProject() {
   try {
    const response = await axiosClient.get('api/donation/total');
    return response.data;
   } catch (error:any) {
    return error?.response?.data;
   }
}