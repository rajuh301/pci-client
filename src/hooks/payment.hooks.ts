import { useQuery } from "@tanstack/react-query";
import { getAllPayment } from "../services/payment";

export const useGetAllPayment = () => {
  return useQuery({
    queryKey: ["GET_AllPayment"],
    queryFn: async () => await getAllPayment(),
  });
};