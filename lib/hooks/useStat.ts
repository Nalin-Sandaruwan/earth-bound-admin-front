import { useQuery } from "@tanstack/react-query"
import { getStat } from "../api/getStat"

export function useStat(){
    return useQuery({
        queryKey:['stats'],
        queryFn: () => getStat(),
        staleTime: 5 * 60 * 1000, // 5 minutes
    })
}