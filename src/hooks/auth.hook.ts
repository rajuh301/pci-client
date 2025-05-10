import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  loginAdmin,
  loginUser,
  registerUser,
  VerifyEmail,
} from "../services/AuthService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),

    onSuccess: () => {
      toast.success("User registration successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),

    onSuccess: () => {
      toast.success("User login successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useAdminLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADMIN_LOGIN"],
    mutationFn: async (adminData) => await loginAdmin(adminData),

    onSuccess: () => {
      toast.success("Admin login successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useVerifyEmail = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["STUDENT_EMAIL_VERIFY"],
    mutationFn: async (code) => await VerifyEmail(code),

    onSuccess: () => {
      toast.success("Student email verify successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
