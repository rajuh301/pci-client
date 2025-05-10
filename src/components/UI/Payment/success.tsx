"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const PaymentSuccess = () => {
  const params = useSearchParams();

  useEffect(() => {
    const enrollAfterPayment = async () => {
      const payload = {
        student: params.get("student"),
        course: params.get("course"),
        paymentAmount: params.get("amount"),
        paymentBank: params.get("bank"),
        transactionId: params.get("txn"),
      };

      try {
        await axios.post("/api/v1/enrollments", payload, {
          headers: {
            Authorization: `Bearer YOUR_JWT_TOKEN`,
          },
        });
        alert("Enrollment Successful!");
      } catch (err) {
        alert("Failed to save enrollment!");
      }
    };

    enrollAfterPayment();
  }, []);

  return <div className="text-center p-8">Processing your enrollment...</div>;
};

export default PaymentSuccess;
