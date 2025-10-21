import { createExample } from "@/services/api/example/create-example";
import { listExamples } from "@/services/api/example/list-examples";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useExampleQuery = () => {
  return useQuery({
    queryKey: ["example"],
    queryFn: listExamples,
  });
};

export const useCreateExampleMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createExample,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["example"] });
    },
  });
};
