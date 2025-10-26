"use server";
export const getMe = async (studentId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/users/${studentId}`,
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
