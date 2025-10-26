"use server";
import AxiosInstance from "@/src/lib/AxiosInstance";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

export const getAllCourse = async () => {
  try {
    const { data } = await AxiosInstance.get("/course");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getSingleCourse = async (courseId: string) => {
  const res = await fetch(
    `${BASE_URL}/course/${courseId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result.data;
};

export const getSingEnrollment = async (enrollmentId: string) => {
  const res = await fetch(
    `${BASE_URL}/enrollment/${enrollmentId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result.data;
};


export const getMyEnrollment = async (enrollmentId: string) => {
  const res = await fetch(
    `${BASE_URL}/enrollment/myEnroll/${enrollmentId}`,
    {
      cache: "force-cache",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result.data;
};
