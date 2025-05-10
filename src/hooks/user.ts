import { useQuery } from "@tanstack/react-query";

import { getMe } from "../services/user";

export const useGetMe = (studentId: any) => {
  return useQuery<any>({
    queryKey: ["GET_ME", studentId],
    queryFn: () => getMe(studentId),
    enabled: !!studentId,
  });
};
