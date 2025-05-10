import { useQuery } from "@tanstack/react-query";

import {
  getAllCourse,
  getSingEnrollment,
  getSingleCourse,
} from "../services/getCourse";
import { TCourseData } from "../types";

export const useGetAllCourseies = () => {
  return useQuery({
    queryKey: ["GET_AllCourse"],
    queryFn: async () => await getAllCourse(),
  });
};

export const useGetSingleCourseies = (courseId: string) => {
  
  return useQuery<TCourseData>({
    queryKey: ["GET_SingleCourse", courseId],
    queryFn: () => getSingleCourse(courseId),
    enabled: !!courseId,
  });
};

export const useGetSingleEnrollment = (enrollmentId: any) => {
  return useQuery<any>({
    queryKey: ["GET_SingleEnrooment", enrollmentId],
    queryFn: () => getSingEnrollment(enrollmentId),
    enabled: !!enrollmentId,
  });
};
