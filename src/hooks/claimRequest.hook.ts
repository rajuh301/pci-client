import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";

import {
  addClaimRequest,
  getReceivedClaimRequest,
} from "../services/ClaimRequest";

export const useAddClaimRequest = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADD_CLAIM_REQUEST"],
    mutationFn: async (postData) => await addClaimRequest(postData),
    onSuccess: () => {
      toast.success("Claim Request create successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useGetReceivedClaimRequest = () => {
  return useQuery({
    queryKey: ["RECEIVED_CLAIM_REQUEST"],
    queryFn: async () => await getReceivedClaimRequest(),
  });
};
