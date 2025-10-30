"use client";

import { useSearchParams } from "next/navigation";
import { Button, Divider } from "@nextui-org/react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useGetSingleCourseies } from "@/src/hooks/getCourse";

export default function EnrollmentSuccessPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course");

  // Fetch course details using courseId
  const { data: course, isLoading, isError } = useGetSingleCourseies(courseId || "");

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-50 via-yellow-50 to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 px-4">
        <p className="text-gray-700 dark:text-gray-200 text-lg">কোর্স লোড হচ্ছে...</p>
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-50 via-yellow-50 to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 px-4">
        <p className="text-red-600 dark:text-red-400 font-semibold text-lg">কোর্সের তথ্য লোড করা যায়নি। পরে আবার চেষ্টা করুন।</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-yellow-50 to-pink-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 px-4 py-8">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-500 p-8 text-center">
          <div className="flex justify-center">
            <div className="bg-white dark:bg-pink-600 rounded-full p-4 inline-flex shadow-md">
              <CheckCircle className="h-14 w-14 text-pink-600 dark:text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-wide">
            🎉 অভিনন্দন!
          </h1>
          <p className="text-pink-100 dark:text-pink-200 mt-2 text-base sm:text-lg">
            আপনার কোর্স এনরোলমেন্ট সফলভাবে সম্পন্ন হয়েছে!
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Course Info */}
          <div className="bg-pink-50 dark:bg-slate-700 rounded-xl p-6 shadow-inner border border-pink-100 dark:border-slate-600">
            <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4 text-center sm:text-left">
              আপনার কোর্সের তথ্য
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-200 text-base sm:text-lg">
              <div className="flex justify-between">
                <span className="font-medium">কোর্স শিরোনাম:</span>
                <span className="font-semibold">{course.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">মেয়াদ:</span>
                <span className="font-semibold">{course.duration || "6 Months"}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">মূল্য:</span>
                <span className="font-bold text-pink-600 dark:text-pink-400">৳{course.price || "5,000"}</span>
              </div>
            </div>
          </div>

          <Divider className="bg-gray-200 dark:bg-slate-600" />

          {/* Next Steps */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center sm:text-left">
              📘 পরবর্তী ধাপসমূহ
            </h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300 text-base sm:text-lg">
              <li>আপনার ইমেইলে একটি নিশ্চিতকরণ মেইল পাবেন</li>
              <li>ক্লাস শুরুর ৩ দিন আগে বিস্তারিত জানানো হবে</li>
              <li>কোর্স ম্যাটেরিয়াল ক্লাসের প্রথম দিনে দেওয়া হবে</li>
              <li>আপনার অগ্রগতি ড্যাশবোর্ড থেকে দেখার সুযোগ থাকবে</li>
            </ul>
          </div>

          <Divider className="bg-gray-200 dark:bg-slate-600" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              as={Link}
              fullWidth
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              href="/courses"
            >
              অন্যান্য কোর্স দেখুন
            </Button>

            <Button
              as={Link}
              fullWidth
              className="bg-white dark:bg-slate-700 border border-pink-600 dark:border-pink-500 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-600 font-semibold rounded-xl shadow-sm transition-all duration-300"
              href="/dashboard"
            >
              আমার ড্যাশবোর্ড
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
