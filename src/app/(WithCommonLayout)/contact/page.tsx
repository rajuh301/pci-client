"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <section className="w-full py-20 bg-white dark:bg-slate-900" id="contact">
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
                    href="https://www.facebook.com/abu.jafar.372?mibextid=kFxxJD"
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
    </div>
  );
}
