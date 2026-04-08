import { useQuery } from "@tanstack/react-query";
import { getEarnByProject } from "../api/erannings";

export function useEarnByCSR() {
  return useQuery({
    queryKey: ['earnByCSR'],
    queryFn: () => getEarnByProject(),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}