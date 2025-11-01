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
            <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              আমাদের কোর্সসমূহ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              স্কুল ও কলেজ পর্যায়ের সকল বিষয়ের উপর মানসম্মত অনলাইন কোর্স
            </p>
          </motion.div>

          {courseLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
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
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                    <svg
                      className="h-20 w-20 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 14l9-5-9-5-9 5 9 5z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <path
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
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
                      ইন্টারঅ্যাকটিভ ভিডিও লেসন ও লাইভ ক্লাস
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        ৳{course.price || "২,৫০০"}
                      </span>
                      <Link
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
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