import { useMutation, useQuery } from '@tanstack/react-query';
import { use } from "react";
import { deleteUsers, updateUserStatus } from '../api/users';


export function useUpdateUserStatus(){
    return useMutation({
        mutationFn: (userId:string)=> updateUserStatus(userId),
    })
}

export function useDeleteUser(){
    return useMutation({
        mutationFn: (userId:string)=> deleteUsers(userId),
    })
}