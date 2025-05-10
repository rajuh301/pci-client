"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import { useGetAllCourseies } from "@/src/hooks/getCourse";
import { useUser } from "@/src/contex/user.provider";

export default function Home() {
  const {
    data: getAllCourseData,
    isLoading: courseLoading,
    isSuccess: courseSuccess,
  } = useGetAllCourseies();

  const { user } = useUser();

  return (
    <>
      <Head>
        <title>প্রত্যাশা কম্পিউটার ইন্সটিটিউট</title>
        <meta
          content="বাংলাদেশ কারিগরি শিক্ষা বোর্ড অনুমোদিত প্রশিক্ষণ প্রতিষ্ঠান।"
          name="description"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <main className="flex min-h-screen flex-col items-center bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 scroll-smooth">
        {/* Hero Section */}
        <section
          className="w-full text-center py-20 md:py-32 bg-gradient-to-br from-pink-500 to-pink-300 dark:from-slate-800 dark:to-slate-600"
          id="hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              প্রত্যাশা কম্পিউটার ইন্সটিটিউট
            </motion.h1>
            <motion.p
              animate={{ opacity: 1 }}
              className="text-xl md:text-2xl mb-8 text-pink-100 dark:text-pink-200"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              বাংলাদেশ কারিগরি শিক্ষা বোর্ড অনুমোদিত প্রশিক্ষণ প্রতিষ্ঠান
            </motion.p>
            <motion.div
              animate={{ opacity: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {user ? (
                <Link
                  className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-pink-100 transition duration-300"
                  href="/enrollment"
                >
                  এখন ভর্তি হন
                </Link>
              ) : (
                <>
                  <Link
                    className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-pink-100 transition duration-300"
                    href="/login"
                  >
                    লগইন করুন
                  </Link>
                  <Link
                    className="bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-pink-800 transition duration-300"
                    href="/register"
                  >
                    রেজিস্টার করুন
                  </Link>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full bg-white dark:bg-slate-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                  500+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  শিক্ষার্থী
                </div>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                  20+
                </div>
                <div className="text-gray-600 dark:text-gray-300">কোর্স</div>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  প্রশিক্ষক
                </div>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                  100%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  সন্তুষ্টি
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          className="w-full py-20 bg-gray-50 dark:bg-slate-800"
          id="about"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex items-center gap-12">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <img
                  alt="About Us"
                  className="rounded-lg shadow-xl w-full h-auto"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-600 dark:text-pink-400">
                  আমাদের সম্পর্কে
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  প্রত্যাশা কম্পিউটার ইন্সটিটিউট একটি স্বনামধন্য প্রতিষ্ঠান,
                  যেখানে ছাত্রছাত্রীরা আধুনিক প্রযুক্তির সাথে পরিচিত হয়ে তাদের
                  দক্ষতা বৃদ্ধি করতে পারে। আমাদের কোর্স সমূহ শিক্ষার্থীদের
                  ক্যারিয়ারে অগ্রগতি সাধনে সহায়তা করে।
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">
                      বাংলাদেশ কারিগরি শিক্ষা বোর্ড অনুমোদিত
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">
                      অভিজ্ঞ ও প্রশিক্ষিত শিক্ষকমণ্ডলী
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300">
                      আধুনিক কম্পিউটার ল্যাব
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section
          className="w-full py-20 bg-white dark:bg-slate-900"
          id="courses"
        >
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

        {/* Facilities Section */}
        <section
          className="w-full py-20 bg-gray-50 dark:bg-slate-800"
          id="facilities"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">
                আমাদের সুবিধাসমূহ
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                আমরা যা অফার করি যা আমাদের অনন্য করে তোলে
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600 dark:text-pink-400"
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  আধুনিক ল্যাব
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  সর্বাধুনিক কম্পিউটার ও নেটওয়ার্ক সুবিধা সম্বলিত ল্যাব
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600 dark:text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  প্রশিক্ষণ ম্যানুয়াল
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  হাতে কলমে শেখার জন্য প্রফেশনাল ট্রেনিং ম্যানুয়াল
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600 dark:text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  ইন্টার্নশিপ সুযোগ
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  কোর্স সম্পন্নকারীদের জন্য ইন্টার্নশিপের সুযোগ
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600 dark:text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  সার্টিফিকেশন
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  বাংলাদেশ কারিগরি শিক্ষা বোর্ড অনুমোদিত সার্টিফিকেট
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600 dark:text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  ক্যারিয়ার সাপোর্ট
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  চাকরি খোঁজার ক্ষেত্রে সহায়তা ও গাইডলাইন
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-pink-600 dark:text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  ফ্লেক্সিবল ক্লাস
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  সকাল ও বিকাল শিফটে ক্লাসের সুবিধা
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-pink-600 dark:text-pink-400">
                শিক্ষার্থীদের মতামত
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                আমাদের শিক্ষার্থীরা যা বলেছেন
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://randomuser.me/Linkpi/portraits/men/32.jpg"
                  />
                  <div>
                    <h4 className="font-semibold">আব্দুল্লাহ আল মামুন</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ওয়েব ডেভেলপমেন্ট কোর্স
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  প্রত্যাশা কম্পিউটার ইন্সটিটিউটে ওয়েব ডেভেলপমেন্ট কোর্স করার
                  পর আমি এখন একজন প্রফেশনাল ডেভেলপার হিসেবে কাজ করছি।
                  প্রশিক্ষকদের দিকনির্দেশনা ছিল অসাধারণ।
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://randomuser.me/Linkpi/portraits/women/44.jpg"
                  />
                  <div>
                    <h4 className="font-semibold">ফারহানা ইয়াসমিন</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      গ্রাফিক ডিজাইন কোর্স
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  গ্রাফিক ডিজাইন কোর্সটি আমার ক্যারিয়ার বদলে দিয়েছে। এখন আমি
                  ফ্রিল্যান্সিং করে ভালো আয় করছি। ল্যাব সুবিধা এবং
                  প্র্যাকটিক্যাল ক্লাস খুবই সহায়ক ছিল।
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    alt="Student"
                    className="w-12 h-12 rounded-full mr-4"
                    src="https://randomuser.me/Linkpi/portraits/men/75.jpg"
                  />
                  <div>
                    <h4 className="font-semibold">রফিকুল ইসলাম</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ডিজিটাল মার্কেটিং কোর্স
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  ডিজিটাল মার্কেটিং কোর্সটি সম্পূর্ণ প্র্যাকটিক্যাল ভিত্তিক ছিল
                  যা সরাসরি কাজে লাগানোর মতো। প্রশিক্ষকরা প্রতিটি বিষয় খুব
                  সুন্দরভাবে বুঝিয়েছেন।
                </p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-gray-300 dark:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-pink-500 to-pink-600 dark:from-slate-800 dark:to-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              আপনার ক্যারিয়ার গড়ে তুলুন আজই
            </motion.h2>
            <motion.p
              className="text-xl text-pink-100 dark:text-pink-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1 }}
            >
              আমাদের কোর্সে এনরোল করে প্রফেশনাল দক্ষতা অর্জন করুন এবং চাকরি
              বাজারে নিজেকে অনন্য হিসেবে প্রতিষ্ঠিত করুন।
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileInView={{ opacity: 1 }}
            >
              <Link
                className="inline-block bg-white text-pink-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition duration-300"
                href={user ? "/enrollment" : "/register"}
              >
                {user ? "এখনই ভর্তি হন" : "নিবন্ধন করুন"}
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="w-full py-20 bg-white dark:bg-slate-900"
          id="contact"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-12">
              <motion.div
                className="md:w-1/2 mb-12 md:mb-0"
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-pink-600 dark:text-pink-400">
                  যোগাযোগ করুন
                </h2>
                <p className="text-lg mb-8">
                  আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি কল
                  করুন।
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                        <path
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">ঠিকানা</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        পৌর সড়ক, মারিয়া প্লাজা
                        <br />
                        কেশবপুর, যশোর
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">ফোন</h4>
                      <Link
                        className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                        href="tel:01717006081"
                      >
                        01717006081
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">ইমেইল</h4>
                      <Link
                        className="text-gray-600 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                        href="mailto:abujafar006081@gmail.com"
                      >
                        abujafar006081@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">সামাজিক মাধ্যম</h4>
                  <div className="flex space-x-4">
                    <Link
                      className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                      href="https://www.facebook.com/Linkbu.jafar.372?mibextid=kFxxJD"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                    <Link
                      className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                      href="/"
                    >
                      <span className="sr-only">YouTube</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          clipRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <form className="space-y-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      htmlFor="name"
                    >
                      আপনার নাম
                    </label>
                    <input
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-800 dark:border-slate-600"
                      id="name"
                      name="name"
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      htmlFor="email"
                    >
                      ইমেইল
                    </label>
                    <input
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-800 dark:border-slate-600"
                      id="email"
                      name="email"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      htmlFor="phone"
                    >
                      ফোন নম্বর
                    </label>
                    <input
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-800 dark:border-slate-600"
                      id="phone"
                      name="phone"
                      type="tel"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      htmlFor="message"
                    >
                      বার্তা
                    </label>
                    <textarea
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500 dark:bg-slate-800 dark:border-slate-600"
                      id="message"
                      name="message"
                      rows={4}
                    />
                  </div>
                  <div>
                    <button
                      className="w-full bg-pink-600 text-white py-3 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
                      type="submit"
                    >
                      পাঠান
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="w-full bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-slate-800 dark:to-slate-700 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-4">
                  প্রত্যাশা কম্পিউটার ইন্সটিটিউট
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  বাংলাদেশ কারিগরি শিক্ষা বোর্ড অনুমোদিত প্রশিক্ষণ প্রতিষ্ঠান
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">কোর্সসমূহ</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                      href="#"
                    >
                      গ্রাফিক ডিজাইন
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                      href="#"
                    >
                      ওয়েব ডেভেলপমেন্ট
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                      href="#"
                    >
                      ডিজিটাল মার্কেটিং
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors"
                      href="#"
                    >
                      এআই ও মেশিন লার্নিং
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
