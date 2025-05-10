"use server";
import { revalidateTag } from "next/cache";

import AxiosInstance from "@/src/lib/AxiosInstance";
import envConfig from "@/src/config/envConfig";

export const createPost = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await AxiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");
  } catch (error) {
    throw new Error("Faild to create post");
  }
};

export const createCourse = async (data: any) => {
  const res = await fetch(`https://pcibackend.vercel.app/api/v1/course`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json();

    throw new Error(errorData.message || "Failed to create course");
  }

  return res.json();
};

export const createEnrollment = async (data: any) => {
  const res = await fetch("https://pcibackend.vercel.app/api/v1/enrollment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to enroll");
  }

  return res.json();
};

export const getPost = async (postId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    cache: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/items/${postId}`, fetchOptions);

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  return res.json();
};
