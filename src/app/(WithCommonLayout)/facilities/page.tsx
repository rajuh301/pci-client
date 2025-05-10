"use client";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div>
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
    </div>
  );
}
