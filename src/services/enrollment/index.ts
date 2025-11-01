"use server";
import axios from "axios";
import { cookies } from "next/headers";

const token = cookies().get("accessToken")?.value;

const API_URL = process.env.NEXT_PUBLIC_BASE_API;

export const getAllEnrollment = async () => {
  const response = await axios.get(`${API_URL}/enrollment`, {
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const approveEnrollmentById = async (studentId: string) => {
  const response = await axios.patch(
    `${API_URL}/enrollment/approve`,
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
export const rejectEnrollmentById = async (studentId: string) => {
  const response = await axios.patch(
    `${API_URL}/enrollment/reject`,
    { student: studentId, status: "REJECTED" },

    {
      headers: {
        Authorization: `${token}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.data;
};
