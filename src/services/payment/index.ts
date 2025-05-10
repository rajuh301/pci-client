"use server";
import AxiosInstance from "@/src/lib/AxiosInstance";

export const createPayment = async (data: any) => {
  try {
    const res = await AxiosInstance.post("/payment", data);

    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to create course");
  }
};
