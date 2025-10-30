"use client";

import { useState } from "react";
import { Modal, ModalContent, Button, Input } from "@nextui-org/react";
import { toast } from "sonner";
import router, { Router } from "next/router";

const baseAPI = process.env.NEXT_PUBLIC_BASE_API;

interface PaymentPageProps {
  courseId: string;
  coursePrice: number;
  userId?: string;
}

 function ManualPaymentPage({ courseId, coursePrice, userId }: PaymentPageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [txnId, setTxnId] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const paymentMethods = [
    { id: "Bkash", name: "Bkash", number: "01732550760" },
    { id: "Nagad", name: "Nagad", number: "01732550760" },
    { id: "Rocket", name: "Rocket", number: "01732550760" },
  ];

  const openPaymentModal = (methodId: string) => {
    setSelectedPayment(methodId);
    setTxnId("");
    setModalOpen(true);
  };

  const submitPayment = async () => {
    if (!txnId || !selectedPayment) {
      toast.error("Please select a payment method and enter transaction ID.");
      return;
    }

    setPaymentLoading(true);

    try {
      const res = await fetch(`${baseAPI}/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId,
          coursePrice,
          userId: userId || "anonymous",
          paymentMethod: selectedPayment,
          transactionId: txnId,
        }),
      });

      if (!res.ok) throw new Error("Payment failed");

      toast.success("Payment successful!");
      setPaymentCompleted(true);
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit payment.");
    } finally {
      setPaymentLoading(false);
    }
  };

  

  return (
    <div className=" mt-2 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-0">
        পেমেন্ট সম্পন্ন করুন


      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-5 mt-4">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => openPaymentModal(method.id)}
            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-pink-200 dark:border-slate-600"
          >
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              {method.name}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {method.number}
            </span>
          </button>

        ))}


      </div>
      <h1> <span className="text-gray-700 dark:text-gray-300">  প্রথমে যেকোনো একটি পেমেন্ট মেথড সিলেক্ট করুন এরপরে এই কোর্স  ফি বাবদ <span>{coursePrice}</span>  টাকা ম্যানুয়াল পেমেন্ট করুন অথবা সেন্ড মানি করুন এবং আপনার ট্রানজেকশন আইডি সঠিকভাবে ইনপুট করুন !</span></h1>

      <Modal
        closeButton
        aria-labelledby="payment-modal-title"
        isOpen={modalOpen}
        onOpenChange={(isOpen) => setModalOpen(isOpen)}
      >
        <ModalContent>
          {(onClose) => (
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold mb-2">
                {selectedPayment} Payment
              </h3>
              <p className="mb-2">
                Please transfer the course fee and enter your transaction ID.
              </p>

              <Input
                fullWidth
                label="Transaction ID"
                placeholder="Enter your transaction ID"
                value={txnId}
                onChange={(e) => setTxnId(e.target.value)}
              />

              <div className="flex justify-end gap-3 mt-4">
                <Button color="danger" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onClick={submitPayment}
                  isLoading={paymentLoading}
                >
                  Submit Payment
                </Button>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>

      {paymentCompleted && (
        <div className="mt-6">
          {/* <Button
            color="success"
            onClick={() => {
              toast.success("Enrollment complete!");
              router.push(`/dashboard`);
            }}
          >
            Complete Enrollment
          </Button> */}
        </div>
      )}
    </div>
  );
}


export default ManualPaymentPage;