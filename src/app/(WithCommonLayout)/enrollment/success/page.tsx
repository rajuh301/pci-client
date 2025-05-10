"use client";

import { useSearchParams } from "next/navigation";
import { Button, Divider } from "@nextui-org/react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function EnrollmentSuccessPage() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("course");

  // In a real app, you might fetch course details using the courseId
  const courseDetails = {
    title: "গ্রাফিক ডিজাইন মাস্টারক্লাস",
    duration: "৬ মাস",
    startDate: "১৫ আগস্ট, ২০২৪",
    price: "৳৮,০০০",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-pink-600 dark:bg-pink-700 p-6 text-center">
          <div className="flex justify-center">
            <div className="bg-white dark:bg-pink-600 rounded-full p-3 inline-flex">
              <CheckCircle className="h-12 w-12 text-pink-600 dark:text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mt-4">অভিনন্দন!</h1>
          <p className="text-pink-100 dark:text-pink-200 mt-2">
            আপনার কোর্স এনরোলমেন্ট সফলভাবে সম্পন্ন হয়েছে
          </p>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {courseDetails.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  মেয়াদ
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {courseDetails.duration}
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">শুরু</p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {courseDetails.startDate}
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-slate-700 p-4 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  মূল্য
                </p>
                <p className="font-medium text-gray-800 dark:text-white">
                  {courseDetails.price}
                </p>
              </div>
            </div>
          </div>

          <Divider className="my-6 bg-gray-200 dark:bg-slate-700" />

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
              পরবর্তী ধাপসমূহ
            </h3>
            <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>আপনার ইমেইলে একটি নিশ্চিতকরণ মেইল পাবেন</li>
              <li>ক্লাস শুরুর ৩ দিন পূর্বে আপনাকে জানানো হবে</li>
              <li>কোর্স ম্যাটেরিয়াল ক্লাস শুরুর দিন দেওয়া হবে</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              fullWidth
              as={Link}
              className="bg-pink-600 hover:bg-pink-700 text-white"
              href="/courses"
            >
              অন্যান্য কোর্স দেখুন
            </Button>
            <Button
              fullWidth
              as={Link}
              className="bg-white dark:bg-slate-700 border border-pink-600 dark:border-pink-500 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-slate-600"
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
