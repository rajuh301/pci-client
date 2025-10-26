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
            <h2 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              আমাদের সুবিধাসমূহ
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              প্রযুক্তিনির্ভর শিক্ষা ব্যবস্থার মাধ্যমে শেখাকে আরও সহজ, আকর্ষণীয় ও কার্যকর করে তোলা
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
                অভিজ্ঞ শিক্ষকদের তৈরি করা উচ্চমানের ভিডিও লেকচার ও ইন্টারঅ্যাকটিভ কন্টেন্ট
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
                রিয়েল-টাইম ইন্টারঅ্যাকটিভ ক্লাসের মাধ্যমে সরাসরি শিক্ষকদের সাথে যোগাযোগ
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
                সহজে বুঝার জন্য ডিজিটাল নোটস, স্টাডি মেটেরিয়াল ও প্র্যাকটিস সেশন
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
                ২৪/৭ সাপোর্ট
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                অনলাইন সাপোর্ট ও ডাউট ক্লিয়ারিং সেশন, যেকোনো সমস্যায় আমরা আছি আপনার পাশে
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
                নিয়মিত অ্যাসেসমেন্ট, কুইজ ও প্রোগ্রেস রিপোর্টের মাধ্যমে উন্নতি মনিটরিং
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
                আপনার সুবিধামতো সময়ে শেখার সম্পূর্ণ স্বাধীনতা, যেকোনো সময়, যেকোনো জায়গা থেকে
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}