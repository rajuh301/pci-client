"use server";
import axios from "axios";
import { cookies } from "next/headers";

const token = cookies().get("accessToken")?.value;

const API_URL = "https://pcibackend.vercel.app/api/v1/enrollment"; // Replace with your real API base

export const getAllEnrollment = async () => {
  const response = await axios.get(`${API_URL}`, {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const approveEnrollmentById = async (studentId: string) => {
  const response = await axios.patch(
    `https://pcibackend.vercel.app/api/v1/enrollment/approve`,
    { student: studentId, status: "APPROVED" },

    {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
};
