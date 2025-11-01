import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  getAllEnrollment,
  approveEnrollmentById,
  rejectEnrollmentById,
} from "../services/enrollment";

export const useGetAllEnrollment = () => {
  return useQuery({
    queryKey: ["GET_AllEnrollment"],
    queryFn: async () => await getAllEnrollment(),
  });
};

export const useApproveStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["APPROVE_STUDENT"],
    mutationFn: async (studentId: string) =>
      await approveEnrollmentById(studentId),
    onSuccess: () => {
      toast.success("Student approved successfully!");

      // ✅ Invalidate enrollment data so it refetches
      queryClient.invalidateQueries({ queryKey: ["GET_AllCourse"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to approve student");
    },
  });
};



export const useRejectStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["REJECT_STUDENT"],
    mutationFn: async (studentId: string) =>
      await rejectEnrollmentById(studentId),
    onSuccess: () => {
      toast.success("Student rejected successfully!");

      // ✅ Invalidate enrollment data so it refetches
      queryClient.invalidateQueries({ queryKey: ["GET_AllCourse"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to reject student");
    },
  });
};
