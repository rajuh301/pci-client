"use client";

import { Card, Avatar, Button, Divider, Spinner } from "@nextui-org/react";
import { BookOpen, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
} from "react";

import { useUser } from "@/src/contex/user.provider";
import { useGetMe } from "@/src/hooks/user";
import { useGetSingleEnrollment } from "@/src/hooks/getCourse";
import { logout } from "@/src/services/AuthService";

export default function DashboardPage() {
  const { user, setUser } = useUser();
  const router = useRouter();
  const { data: userData, isLoading: userLoading } = useGetMe(user?._id);
  const { data: enrollments, isLoading: enrollmentsLoading } =
    useGetSingleEnrollment(user?._id);

  const handleLogout = async () => {
    try {
      await logout();
      // setUser(null); // Clear user context
      router.push("/");
      router.refresh(); // Force refresh to clear any cached auth state
    } catch (error) {
      console.error("Logout failed:", error);
      // Optionally show error toast to user
    }
  };

  // Optional: Redirect if not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* User Profile Section */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Avatar
            className="w-12 h-12"
            name={user.name}
            src={userData?.image || "/default-avatar.png"}
          />
          <div>
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-gray-600">{userData?.studentId || "Student"}</p>
          </div>
        </div>
        <Button
          color="danger"
          startContent={<LogOut size={18} />}
          variant="flat"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      <Divider className="my-6" />

      {/* Enrolled Courses Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen size={20} />
            My Enrolled Courses
          </h2>
          <Button as={Link} color="primary" href="/courses" size="sm">
            Browse Courses
          </Button>
        </div>

        {enrollmentsLoading ? (
          <div className="flex justify-center py-8">
            <Spinner color="primary" label="Loading courses..." />
          </div>
        ) : enrollments?.length === 0 ? (
          <Card className="p-6 text-center">
            <p className="text-gray-500 mb-4">
              You haven not enrolled in any courses yet
            </p>
            <Button as={Link} color="primary" href="/courses">
              Explore Courses
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {enrollments?.map(
              (enrollment: {
                _id: Key | null | undefined;
                course: {
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | Iterable<ReactNode>
                    | ReactPortal
                    | Promise<AwaitedReactNode>
                    | null
                    | undefined;
                  _id: any;
                };
                status:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
                enrollmentDate: string | number | Date;
                progress: any;
              }) => (
                <Card
                  key={enrollment._id}
                  className="p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{enrollment.course.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        enrollment.status === "ongoing"
                          ? "bg-yellow-100 text-yellow-800"
                          : enrollment.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {enrollment.status}
                    </span>
                  </div>
                  <Divider className="my-2" />
                  <div className="flex justify-between text-sm text-gray-500 mt-2">
                    <span>
                      Enrolled on:{" "}
                      {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                    </span>
                    <span>{enrollment.progress || 0}% complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${enrollment.progress || 0}%` }}
                    />
                  </div>
                  <Button
                    fullWidth
                    as={Link}
                    className="mt-3"
                    href={`/courses`}
                    size="sm"
                  >
                    View Course
                  </Button>
                </Card>
              ),
            )}
          </div>
        )}
      </section>
    </div>
  );
}
