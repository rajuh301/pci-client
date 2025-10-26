"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "রজু হাসান মোরাল",
    role: "Founder & CEO",
    image: "https://i.ibb.co/ZGr7cY2/raju-hassan.jpg",
    description:
      "বুদ্ধিবৃত্ত-এর মূল উদ্ভাবক ও প্রযুক্তি স্থপতি। শিক্ষা ও প্রযুক্তির মিশেলে নতুন প্রজন্মের শিক্ষাকে সহজ করতে কাজ করছেন।",
  },
  {
    name: "নুরুজ্জামান",
    role: "Co-Founder & CTO",
    image: "https://i.ibb.co/fxrPzqT/co-founder.jpg",
    description:
      "টেকনিক্যাল দিক পরিচালনা এবং সিস্টেম আর্কিটেকচারে নেতৃত্ব দিচ্ছেন, যাতে শিক্ষার্থীদের জন্য নির্ভরযোগ্য সেবা নিশ্চিত হয়।",
  },
  {
    name: "মাহমুদুল ইসলাম",
    role: "Lead Instructor",
    image: "https://i.ibb.co/Zm1W5MJ/teacher.jpg",
    description:
      "অভিজ্ঞ শিক্ষক, যিনি প্রতিদিন নতুন প্রজন্মকে অনলাইন ক্লাসের মাধ্যমে অনুপ্রাণিত করেন।",
  },
  {
    name: "সায়ন্তনী দাস",
    role: "Marketing Manager",
    image: "https://i.ibb.co/D9Sr0zP/marketer.jpg",
    description:
      "বুদ্ধিবৃত্ত-এর প্রচারণা ও মার্কেটিং কৌশল পরিচালনা করেন, যাতে শিক্ষা আরও বেশি মানুষের কাছে পৌঁছে যায়।",
  },
];

export default function Page() {
  return (
    <div className="bg-gray-50 dark:bg-slate-900">
      {/* ========== ABOUT SECTION ========== */}
      <section className="w-full py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image Section */}
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <img
                alt="About BuddhiBritt"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                src="https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/iStock_000039291924_Medium.jpg"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-pink-600 dark:text-pink-400 text-center md:text-left">
                আমাদের সম্পর্কে
              </h2>

              <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 text-justify">
                <strong>বুদ্ধিবৃত্ত</strong> একটি অনলাইন শিক্ষা প্ল্যাটফর্ম, যেখানে
                স্কুল ও কলেজ পর্যায়ের শিক্ষার্থীরা সহজভাবে পড়াশোনা করতে পারে।
                আমাদের লক্ষ্য হলো প্রযুক্তিনির্ভর শিক্ষা ব্যবস্থার মাধ্যমে
                শিক্ষার্থীদের শেখাকে আরও সহজ, আকর্ষণীয় ও কার্যকর করে তোলা।
              </p>

              <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 text-justify">
                এখানে প্রতিটি শিক্ষার্থী তাদের নিজস্ব গতিতে শিখতে পারে এবং
                অভিজ্ঞ শিক্ষকদের ভিডিও লেসন, কুইজ, ও রিয়েল-টাইম ক্লাসের মাধ্যমে
                জ্ঞান অর্জন করতে পারে। আমরা বিশ্বাস করি — মানসম্মত অনলাইন শিক্ষা
                প্রতিটি শিক্ষার্থীর ভবিষ্যৎ গঠনে গুরুত্বপূর্ণ ভূমিকা রাখে।
              </p>

              {/* List */}
              <div className="space-y-4">
                {[
                  "স্কুল ও কলেজ পর্যায়ের অনলাইন শিক্ষা সহায়তা",
                  "অভিজ্ঞ শিক্ষকদের ভিডিও লেসন ও ইন্টারঅ্যাকটিভ ক্লাস",
                  "কুইজ, নোটস ও প্র্যাকটিস সেশনের মাধ্যমে শিখন মূল্যায়ন",
                  "যেকোনো সময়, যেকোনো জায়গা থেকে শেখার সুযোগ",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="h-5 w-5 text-pink-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== OUR TEAM SECTION ========== */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-12 text-pink-600 dark:text-pink-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            আমাদের টিম
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-xl object-cover border-4 border-pink-400 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-pink-500 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
