"use server";
export const getMe = async (studentId: string) => {
  const res = await fetch(
    `https://pcibackend-7px8uhj8i-rajuh301s-projects.vercel.app/api/v1/users/${studentId}`,
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
