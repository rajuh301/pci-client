"use client";

import { FormProvider, useForm } from "react-hook-form";
import { Divider, Spinner, Button } from "@nextui-org/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import FXSelect from "@/src/components/form/FXSelect";
import { useGetAllCourseies } from "@/src/hooks/getCourse";
import { useUser } from "@/src/contex/user.provider";

export default function EnrollmentPage() {
  const methods = useForm({
    defaultValues: { course: "" },
    mode: "onChange",
  });

  const {
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;
  const { data: coursesData, isLoading } = useGetAllCourseies();
  const { user } = useUser();
  const router = useRouter();

  const selectedCourseId = watch("course");
  const courses = coursesData?.data || [];
  const selectedCourse = courses.find((c: any) => c._id === selectedCourseId);

  const courseOptions = courses.map((course: any) => ({
    key: course._id,
    label: course.title,
    value: course._id,
  }));

  const onSubmit = async () => {
    if (!selectedCourse || !user?._id) {
      toast.error("Please select a course and login first.");

      return;
    }

    const enrollmentData = {
      student: user._id,
      course: selectedCourse._id,
      paymentBank: "No need bank",
      paymentAmount: selectedCourse.price.toString(),
      screenShort: "No need ScreenShort",
    };

    try {
      const response = await fetch(
        "https://pcibackend.vercel.app/api/v1/enrollment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(enrollmentData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit enrollment");
      }
      console.log(response);
      const result = await response.json();

      toast.success("Enrollment successful!");
      router.push(`/enrollment/success?course=${selectedCourse._id}`);
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
        Select your desired course and complete the enrollment process
      </p>
      <Divider className="my-4 bg-pink-200 dark:bg-slate-600" />

      {isLoading ? (
        <div className="flex justify-center items-center py-10">
          <Spinner
            color="primary"
            label="Loading courses..."
            labelColor="foreground"
          />
        </div>
      ) : (
        <FormProvider {...methods}>
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FXSelect
              label="Select Course"
              name="course"
              options={courseOptions}
            />

            {selectedCourse && (
              <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md border border-pink-200 dark:border-slate-600">
                <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4">
                  Course Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Course Title:
                    </span>
                    <span className="text-gray-800 dark:text-gray-200">
                      {selectedCourse.title}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Duration:
                    </span>
                    <span className="text-gray-800 dark:text-gray-200">
                      {selectedCourse.duration || "6 Months"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      Price:
                    </span>
                    <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
                      ৳{selectedCourse.price || "5,000"}
                    </span>
                  </div>
                </div>
              </div>
            )}

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
                disabled={!selectedCourse || isSubmitting}
                isLoading={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Processing..." : "Complete Enrollment"}
              </Button>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
}
