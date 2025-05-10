import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { createPayment } from "../services/payment";

export const useCreatePayment = (p0: {
  onSuccess: (res: any) => void;
  onError?: (error: Error) => void;
}) => {
  return useMutation<any, Error, any>({
    mutationKey: ["CREATE_PAYMENT"],
    mutationFn: async (paymentData) => await createPayment(paymentData),
    onSuccess: (res) => {
      toast.success("Payment successful");
      p0.onSuccess(res);
    },
    onError: (error) => {
      toast.error(error.message);
      if (p0.onError) {
        p0.onError(error);
      }
    },
  });
};
