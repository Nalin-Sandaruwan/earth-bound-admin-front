import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteProject, getAllprojects, updateProjectStatus } from '../api/projects';
import axiosClient from '../api/axios-client';


export  function useGetAllProjects() {
  return useMutation({
    mutationFn: () => getAllprojects(),
  });
}

export function useUpdateProjectsStatus() {
  return useMutation({
    mutationFn: (projectId: string) => updateProjectStatus(projectId),
  })

  
}

export function useDeleteProject() {
  return useMutation({
    mutationFn: (projectId: string) => deleteProject(projectId),
  });
}