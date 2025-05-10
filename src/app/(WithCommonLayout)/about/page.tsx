"use client";

import { motion } from "framer-motion";

export default function page() {
  return (
    <div>
      <section className="w-full py-20 bg-gray-50 dark:bg-slate-800" id="about">
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
    </div>
  );
}
