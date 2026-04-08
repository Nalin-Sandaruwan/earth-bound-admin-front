import axiosClient from "./axios-client";

export async function updateUserStatus(userId:string) {
    try {
        const response = await axiosClient.patch(`/auth/toggle-user-active-status/${userId}`);
        return response.data;
    } catch (error:any) {
        return error?.response?.data
    }
}

export async function deleteUsers(userId:string) {
   try {
    const response = await axiosClient.delete(`/auth/delete-user/${userId}`);
    return response.data;
   } catch (error:any) {
    return error?.response?.data
   }
}