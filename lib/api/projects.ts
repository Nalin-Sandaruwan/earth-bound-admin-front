import axiosClient from "./axios-client";

export async function getAllprojects() {
    try {
        const response = await axiosClient.get('/api/csr-project');
        return response.data;
    } catch (error) {
        return error;
    }
}

// export async function getProjectById(projectId: string) {
//     try {
//         const response = await axiosClient.get(`/api/csr-project/${projectId}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// }

export async function updateProjectStatus(projectId: string) {
    const response = await axiosClient.patch(`/api/csr-project/toggle-status/${projectId}`);
    return response.data;
}

export async function deleteProject(projectId: string) {
    const response = await axiosClient.delete(`/api/csr-project/${projectId}`);
    return response.data;
}