"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";

export default function RegisterPage() {
  const router = useRouter();
  const { mutate: handleUserRegistration, isPending } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(userData, {
      onSuccess: () => {
        router.push(`/register/verify?email=${encodeURIComponent(data.email)}`);
      },
      onError: (err) => {
        console.error("Registration failed:", err);
      },
    });
  };

  return (
    <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
      <h3 className="my-2 text-xl font-bold">Register with Us</h3>
      <p className="mb-4">আপনার ক্যারিয়ার গড়ে তুলুন আজই</p>
      <div className="w-[35%]">
        <FXForm onSubmit={onSubmit}>
          <div className="py-3">
            <FXInput label="Name" name="name" size="sm" />
          </div>
          <div className="py-3">
            <FXInput label="Email" name="email" size="sm" />
          </div>
          <div className="py-3">
            <FXInput
              label="Password"
              name="password"
              size="sm"
              type="password"
            />
          </div>
          <Button
            className="my-3 w-full rounded-md bg-default-900 text-default"
            isLoading={isPending}
            size="lg"
            type="submit"
          >
            Registration
          </Button>
        </FXForm>
        <div className="text-center">
          Already have an account? <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
