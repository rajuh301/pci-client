"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { useGetAllCourseies } from "@/src/hooks/getCourse";

export default function Page() {
  const {
    data: getAllCourseData,
    isLoading: courseLoading,
    isSuccess: courseSuccess,
  } = useGetAllCourseies();

  return (
    <div>
      <section className="w-full py-20 bg-white dark:bg-slate-900" id="courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">
              আমাদের কোর্সসমূহ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              আধুনিক প্রযুক্তি ভিত্তিক কোর্স সমূহ যা আপনাকে প্রফেশনাল হিসেবে
              গড়ে তুলবে
            </p>
          </motion.div>

          {courseLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getAllCourseData?.data.map((course: any, index: number) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-slate-700"
                  initial={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-pink-400 to-pink-600 flex items-center justify-center">
                    <svg
                      className="h-20 w-20 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      কোর্সের মেয়াদ: ৬ মাস
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-pink-600 dark:text-pink-400">
                        ৳{course.price || "৫,০০০"}
                      </span>
                      <Link
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition duration-300"
                        href={`/${course._id}`}
                      >
                        বিস্তারিত
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
