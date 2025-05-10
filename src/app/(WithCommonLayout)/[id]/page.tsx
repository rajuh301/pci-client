"use client";

import { useParams } from "next/navigation";
import { Spinner } from "@nextui-org/react";
import {
  BookOpen,
  Clock,
  User,
  Calendar,
  DollarSign,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";

import Container from "@/src/components/UI/Container";
import { useGetSingleCourseies } from "@/src/hooks/getCourse";

export default function Enrollment() {
  const { id } = useParams();
  const courseId = id as string;
  const { data: course, isLoading, isError } = useGetSingleCourseies(courseId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner color="primary" label="Loading course details..." />
      </div>
    );
  }

  if (isError || !course) {
    return (
      <div className="text-center py-10">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl max-w-md mx-auto">
          <XCircle className="mx-auto h-12 w-12 text-red-500 dark:text-red-400 mb-4" />
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
            Failed to load course data
          </h3>
          <p className="text-red-600 dark:text-red-300 mt-2">
            Please try again later
          </p>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <div className="mx-auto my-10 max-w-3xl p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-slate-800 dark:to-slate-700 rounded-xl shadow-lg">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
            {course.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            {course.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailCard
            icon={<User className="h-5 w-5 text-pink-600 dark:text-pink-400" />}
            title="Instructor"
            value={course.instructor?.name || "N/A"}
          />
          <DetailCard
            icon={
              <Clock className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            }
            title="Duration"
            value={`${course.duration} days`}
          />
          <DetailCard
            icon={
              <Calendar className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            }
            title="Start Date"
            value={new Date(course.startDate).toLocaleDateString()}
          />
          <DetailCard
            icon={
              <Calendar className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            }
            title="End Date"
            value={new Date(course.endDate).toLocaleDateString()}
          />
          <DetailCard
            icon={
              <DollarSign className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            }
            title="Price"
            value={`৳${course.price}`}
            valueClassName="text-green-600 dark:text-green-400 font-semibold"
          />
          <DetailCard
            icon={
              course.isActive ? (
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
              )
            }
            title="Status"
            value={course.isActive ? "Active" : "Inactive"}
            valueClassName={
              course.isActive
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }
          />
        </div>

        <div className="mt-8 pt-6 border-t border-pink-200 dark:border-slate-600">
          <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400 mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Course Content
          </h3>
          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 dark:text-gray-300">
              {typeof course.content === "string"
                ? course.content
                : "Detailed curriculum will be provided upon enrollment."}
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            className="inline-block px-6 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition"
            href="/enrollment"
          >
            এখন ভর্তি হন
          </Link>
        </div>
      </div>
    </Container>
  );
}

const DetailCard = ({
  icon,
  title,
  value,
  valueClassName = "",
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  valueClassName?: string;
}) => (
  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm border border-pink-100 dark:border-slate-700">
    <div className="flex items-center gap-3">
      <div className="bg-pink-50 dark:bg-slate-700 p-2 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <p className={`text-gray-800 dark:text-gray-200 ${valueClassName}`}>
          {value}
        </p>
      </div>
    </div>
  </div>
);
