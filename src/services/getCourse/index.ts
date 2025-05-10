"use server";
import AxiosInstance from "@/src/lib/AxiosInstance";

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
    `https://pcibackend.vercel.app/api/v1/course/${courseId}`,
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
    `https://pcibackend.vercel.app/api/v1/enrollment/${enrollmentId}`,
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
