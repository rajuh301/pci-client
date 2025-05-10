// app/payment/success/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const courseId = params.get("course_id");
    const studentId = params.get("student_id");
    const tranId = params.get("tran_id");
    const status = params.get("status");

    if (status === "VALID" && courseId && studentId) {
      axios
        .post("/api/enrollment", {
          course: courseId,
          student: studentId,
          transactionId: tranId,
          paymentBank: "sslcommerz",
        })
        .then(() => {
          toast.success("Enrollment successful!");
          router.push("/profile");
        })
        .catch((err) => {
          console.error("Enrollment error", err);
          toast.error("Enrollment failed after payment.");
          router.push("/course");
        });
    } else {
      toast.error("Payment not successful.");
      router.push("/course");
    }
  }, [params, router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg">Processing your enrollment...</p>
    </div>
  );
}
