"use server";
import AxiosInstance from "@/src/lib/AxiosInstance";

export const getAllPayment = async () => {
  try {
    const { data } = await AxiosInstance.get("/payment");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};