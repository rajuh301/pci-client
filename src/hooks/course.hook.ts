import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { createCourse, createEnrollment, createPost } from "../services/course";

export const useCreatePost = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData) => await createPost(postData),
    onSuccess: () => {
      toast.success("Post create successfully");
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useCreateCourse = () => {
  return useMutation<any, Error, any>({
    mutationKey: ["CREATE_COURSE"],
    mutationFn: async (courseData) => await createCourse(courseData),
    onSuccess: () => {
      toast.success("Course created successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useCreateEnrollment = () => {
  return useMutation({
    mutationKey: ["create-enrollment"],
    mutationFn: createEnrollment,
    onSuccess: () => {
      toast.success("Enrollment successful!");
    },
    onError: (err: any) => {
      toast.error(err.message || "Enrollment failed");
    },
  });
};
