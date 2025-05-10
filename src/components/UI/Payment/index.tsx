"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import { toast } from "sonner";

export default function PaymentPage({ params }: { params: { id: string } }) {
  const [paymentInfo, setPaymentInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch payment details from your backend
    const fetchPaymentInfo = async () => {
      try {
        const response = await fetch(`/api/enrollments/${params.id}/payment`);
        const data = await response.json();

        if (response.ok) {
          setPaymentInfo(data);
        } else {
          throw new Error(data.message || "Failed to fetch payment info");
        }
      } catch (error) {
        toast.error("Failed to load payment information");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentInfo();
  }, [params.id]);

  const handlePayment = () => {
    if (!paymentInfo) return;

    // Create a form dynamically to submit to SSLCommerz
    const form = document.createElement("form");

    form.method = "POST";
    form.action = paymentInfo.gatewayUrl; // SSLCommerz gateway URL from your backend

    // Add all required parameters
    Object.entries(paymentInfo.params).forEach(([key, value]) => {
      const hiddenField = document.createElement("input");

      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = value as string;
      form.appendChild(hiddenField);
    });

    document.body.appendChild(form);
    form.submit();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner label="Loading payment information..." />
      </div>
    );
  }

  if (!paymentInfo) {
    return (
      <div className="max-w-3xl mx-auto mt-10 rounded-xl bg-default-100 p-8 shadow text-center">
        <h2 className="text-xl font-bold text-danger">
          Payment Information Not Found
        </h2>
        <Button className="mt-4" onClick={() => router.push("/enroll")}>
          Back to Enrollment
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 rounded-xl bg-default-100 p-8 shadow">
      <h1 className="text-2xl font-bold">Payment Details</h1>
      <div className="my-6 space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Course:</span>
          <span>{paymentInfo.courseTitle}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount:</span>
          <span>${paymentInfo.amount}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Student:</span>
          <span>{paymentInfo.studentName}</span>
        </div>
      </div>

      <div className="mt-8 p-4 bg-default-200 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Payment Method</h2>
        <p>You will be redirected to SSLCommerz secure payment gateway</p>
      </div>

      <div className="flex justify-between mt-8">
        <Button onClick={() => router.push("/enroll")}>Cancel</Button>
        <Button color="primary" onClick={handlePayment}>
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
}
