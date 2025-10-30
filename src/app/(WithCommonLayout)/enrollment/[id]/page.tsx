"use client";

import { Spinner, Button, Divider } from "@nextui-org/react";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { useGetSingleCourseies } from "@/src/hooks/getCourse";
import { useUser } from "@/src/contex/user.provider";
import ManualPaymentPage from "@/src/app/payment/page";

const baseAPI = process.env.NEXT_PUBLIC_BASE_API;

export default function EnrollmentPage() {
  const router = useRouter();
  const { id } = useParams(); // Get course ID from URL
  const courseId = id as string;

  const { user } = useUser();

  // Fetch single course details
  const { data: course, isLoading, isError } = useGetSingleCourseies(courseId);

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner color="primary" label="Loading course details..." />
      </div>
    );
  }

  // Handle error or no data
  if (isError || !course) {
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        Failed to load course details.
      </div>
    );
  }

  // Handle enrollment submission
  const handleEnroll = async () => {
    if (!user?._id) {
      toast.error("Please login first to enroll.");
      return;
    }

    const enrollmentData = {
      student: user._id,
      course: course._id,
      paymentBank: "No need bank",
      paymentAmount: course.price.toString(),
      screenShort: "No need Screenshot",
    };

    try {
      const response = await fetch(`${baseAPI}/enrollment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enrollmentData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enrollment");
      }

      toast.success("Enrollment successful!");
      router.push(`/enrollment/success?course=${course._id}`);
    } catch (error) {
      console.error("Error submitting enrollment:", error);
      toast.error("Failed to submit enrollment. Please try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-slate-800 dark:to-slate-700 p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
        Course Enrollment
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Review the course details below and complete your enrollment.
      </p>

      <Divider className="my-4 bg-pink-200 dark:bg-slate-600" />

      {/* Course Details */}
      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-pink-200 dark:border-slate-600">
        <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4">
          Course Details
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Title:
            </span>
            <span className="text-gray-800 dark:text-gray-200">
              {course.title}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Duration:
            </span>
            <span className="text-gray-800 dark:text-gray-200">
              {course.duration || "6 Months"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Price:
            </span>
            <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
              ৳{course.price || "5,000"}
            </span>
          </div>
        </div>
      </div>

      {/* -------------- payment ---------------- */}
      <div>
        <ManualPaymentPage
          courseId={course._id}
          coursePrice={course.price}
          userId={user?._id}
        />
      </div>
      {/* -------------- payment ---------------- */}

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-6">
        <Button
          className="bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600"
          onClick={() => router.back()}
        >
          Cancel
        </Button>

        <Button
          className="bg-pink-600 text-white hover:bg-pink-700"
          color="primary"
          onClick={handleEnroll}
        >
          Complete Enrollment
        </Button>
      </div>
    </div>
  );
}
