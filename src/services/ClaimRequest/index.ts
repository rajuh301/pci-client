"use server";
import { FieldValues } from "react-hook-form";

import AxiosInstance from "@/src/lib/AxiosInstance";

export const addClaimRequest = async (
  claimRequest: FieldValues,
): Promise<any> => {
  try {
    const res = await AxiosInstance.post("/claim-request", claimRequest);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getReceivedClaimRequest = async () => {
  try {
    const res = await AxiosInstance.get("/claim-request/received-clim-request");
  } catch (error) {
    console.error("Failed to fetch data", error);
    throw new Error("Failed to fetch data");
  }
};
