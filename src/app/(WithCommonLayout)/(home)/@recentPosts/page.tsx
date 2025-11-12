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
        <title>বুদ্ধিবৃত্ত - অনলাইন শিক্ষা প্ল্যাটফর্ম</title>
        <meta
          content="স্কুল ও কলেজ পর্যায়ের শিক্ষার্থীদের জন্য সহজভাবে পড়াশোনা করার অনলাইন প্ল্যাটফর্ম"
          name="description"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <main className="flex min-h-screen flex-col items-center bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 scroll-smooth">
        {/* Hero Section */}
        <section
          className="w-full text-center py-20 md:py-32 bg-gradient-to-br from-blue-500 to-blue-300 dark:from-slate-800 dark:to-slate-600"
          id="hero"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              বুদ্ধিবৃত্ত
            </motion.h1>
            <motion.p
              animate={{ opacity: 1 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-blue-200"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              স্কুল ও কলেজ পর্যায়ের অনলাইন শিক্ষা সহায়তা
            </motion.p>
            <motion.div
              animate={{ opacity: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              {user ? (
                <Link
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
                  href="/dashboard"
                >
                  এখনই শেখা শুরু করুন
                </Link>
              ) : (
                <>
                  <Link
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
                    href="/login"
                  >
                    লগইন করুন
                  </Link>
                  <Link
                    className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-800 transition duration-300"
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
                <div className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ১০,০০০+
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
                <div className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ৫০+
                </div>
                <div className="text-gray-600 dark:text-gray-300">কোর্স</div>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ১০০+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  অভিজ্ঞ শিক্ষক
                </div>
              </motion.div>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="text-3xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  ৯৮%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  সাফল্যের হার
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
                  src="https://www.worldbank.org/content/dam/Worldbank/Highlights%20&%20Features/sar/bangladesh/bd-heqep-735x490.jpg"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                  আমাদের সম্পর্কে
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  বুদ্ধিবৃত্ত একটি অনলাইন শিক্ষা প্ল্যাটফর্ম, যেখানে স্কুল ও কলেজ পর্যায়ের শিক্ষার্থীরা সহজভাবে পড়াশোনা করতে পারে। আমাদের লক্ষ্য হলো প্রযুক্তিনির্ভর শিক্ষা ব্যবস্থার মাধ্যমে শিক্ষার্থীদের শেখাকে আরও সহজ, আকর্ষণীয় ও কার্যকর করে তোলা।
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  এখানে প্রতিটি শিক্ষার্থী তাদের নিজস্ব গতিতে শিখতে পারে এবং অভিজ্ঞ শিক্ষকদের ভিডিও লেসন, কুইজ, ও রিয়েল-টাইম ক্লাসের মাধ্যমে জ্ঞান অর্জন করতে পারে। আমরা বিশ্বাস করি — মানসম্মত অনলাইন শিক্ষা প্রতিটি শিক্ষার্থীর ভবিষ্যৎ গঠনে গুরুত্বপূর্ণ ভূমিকা রাখে।
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-blue-500"
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
                      অভিজ্ঞ শিক্ষকদের ভিডিও লেসন ও ইন্টারঅ্যাকটিভ ক্লাস
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-blue-500"
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
                      কুইজ, নোটস ও প্র্যাকটিস সেশনের মাধ্যমে শিখন মূল্যায়ন
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-blue-500"
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
                      যেকোনো সময়, যেকোনো জায়গা থেকে শেখার সুযোগ
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
                {getAllCourseData?.data?.map((course: any, index: number) => (
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
              <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
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
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  ভিডিও লেসন
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  অভিজ্ঞ শিক্ষকদের তৈরি করা উচ্চমানের ভিডিও লেকচার
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  লাইভ ক্লাস
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  রিয়েল-টাইম ইন্টারঅ্যাকটিভ ক্লাসের মাধ্যমে সরাসরি শেখা
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  ডিজিটাল নোটস
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  সহজে বুঝার জন্য ডিজিটাল নোটস ও স্টাডি মেটেরিয়াল
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  অনলাইন সাপোর্ট
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  ২৪/৭ অনলাইন সাপোর্ট ও ডাউট ক্লিয়ারিং সেশন
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  প্রোগ্রেস ট্র্যাকিং
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  নিয়মিত অ্যাসেসমেন্ট ও প্রোগ্রেস রিপোর্টের মাধ্যমে উন্নতি মনিটরিং
                </p>
              </motion.div>

              <motion.div
                className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                  ফ্লেক্সিবল শিডিউল
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  আপনার সুবিধামতো সময়ে শেখার সম্পূর্ণ স্বাধীনতা
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
              <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
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
                    src="https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg"
                  />
                  <div>
                    <h4 className="font-semibold">রাহুল আহমেদ</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      এসএসসি পরীক্ষার্থী
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  বুদ্ধিবৃত্তের ভিডিও লেসনগুলো খুবই সহজবোধ্য। গণিত ও বিজ্ঞান বিষয়গুলো এখন অনেক বেশি বুঝতে পারছি। লাইভ ক্লাসে সরাসরি শিক্ষকদের প্রশ্ন করতে পারা খুবই সহায়ক।
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
                    src="https://www.shutterstock.com/shutterstock/videos/1097293349/thumb/1.jpg?ip=x480"
                  />
                  <div>
                    <h4 className="font-semibold">সুমাইয়া ইসলাম</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      এইচএসসি পরীক্ষার্থী
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  অনলাইন হওয়া সত্ত্বেও বুদ্ধিবৃত্তে পড়াশোনার অভিজ্ঞতা ক্লাসরুমের মতোই। শিক্ষকরা খুবই আন্তরিক এবং প্রতিটি বিষয় গভীরভাবে বুঝিয়ে দেন। প্র্যাকটিস টেস্টগুলো পরীক্ষার জন্য খুবই সহায়ক।
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
                    src="https://s7d1.scene7.com/is/image/wbcollab/online-edu1?qlt=90&fmt=webp&resMode=sharp2"
                  />
                  <div>
                    <h4 className="font-semibold">আরিফ হাসান</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      নবম শ্রেণী
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  বুদ্ধিবৃত্তের মাধ্যমে আমি আমার নিজের গতিতে শিখতে পারছি। কোনো বিষয় না বুঝলে ভিডিওটি আবার দেখতে পারি। শিক্ষকরা প্রতিটি বিষয় খুব সুন্দরভাবে বুঝিয়েছেন। আমার ফলাফল অনেক উন্নত হয়েছে।
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-slate-800 dark:to-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              আপনার শিক্ষার যাত্রা শুরু করুন আজই
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 dark:text-blue-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileInView={{ opacity: 1 }}
            >
              প্রযুক্তিনির্ভর আধুনিক শিক্ষা ব্যবস্থার মাধ্যমে পড়াশোনাকে করুন আরও সহজ, আকর্ষণীয় ও কার্যকর
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              whileInView={{ opacity: 1 }}
            >
              <Link
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-gray-100 transition duration-300"
                href={user ? "/enrollment" : "/register"}
              >
                {user ? "এখনই শেখা শুরু করুন" : "নিবন্ধন করুন"}
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
                <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
                  যোগাযোগ করুন
                </h2>
                <p className="text-lg mb-8">
                  আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি কল করুন।
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-blue-600"
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
                      <h4 className="text-lg font-semibold">ইমেইল</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        rajuh301@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-blue-600"
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
                      <h4 className="text-lg font-semibold">হেল্পলাইন</h4>
                      <Link
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        href="tel:+8801732550760"
                      >
                        01732550760
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold">সাপোর্ট সময়</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        রবি-বৃহস্পতিবার: সকাল ৯টা - রাত ১০টা<br />
                        শুক্রবার: বিকাল ৩টা - রাত ১০টা
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">সামাজিক মাধ্যম</h4>
                  <div className="flex space-x-4">
                    <Link
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      href="#"
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
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      href="#"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-800 dark:border-slate-600"
                      id="message"
                      name="message"
                      rows={4}
                    />
                  </div>
                  <div>
                    <button
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
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
        <footer className="w-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  বুদ্ধিবৃত্ত
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  স্কুল ও কলেজ পর্যায়ের অনলাইন শিক্ষা সহায়তা প্ল্যাটফর্ম
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">কোর্সসমূহ</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      href="#"
                    >
                      গণিত
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      href="#"
                    >
                      বিজ্ঞান
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      href="#"
                    >
                      ইংরেজি
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                      href="#"
                    >
                      বাংলা
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