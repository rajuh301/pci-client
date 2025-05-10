"use client";

import { SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/button";

import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useVerifyEmail } from "@/src/hooks/auth.hook";

type VerifyFormInputs = {
  code: string;
};

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const { mutate: handleUserEmailVerify, isPending } = useVerifyEmail();

  const onSubmit: SubmitHandler<VerifyFormInputs> = (data) => {
    if (!email) {
      console.error("Email not found in URL");

      return;
    }

    handleUserEmailVerify(
      { email, code: data.code },
      {
        onSuccess: () => {
          router.push("/login");
        },
        onError: (err) => {
          console.error("Verification failed:", err);
        },
      },
    );
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
      <p className="mb-6 text-gray-600">
        Verification code sent to: <strong>{email}</strong>
      </p>

      <div className="w-[90%] sm:w-[60%] md:w-[30%]">
        <FXForm onSubmit={onSubmit}>
          <FXInput
            label="Verification Code"
            name="code"
            size="sm"
            type="number"
          />
          <Button className="w-full mt-4" isLoading={isPending} type="submit">
            Verify
          </Button>
        </FXForm>
      </div>
    </div>
  );
}
