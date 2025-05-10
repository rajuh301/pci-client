"use client";

import {
  Card,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Spinner,
  Chip,
} from "@nextui-org/react";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

import {
  useApproveStudent,
  useGetAllEnrollment,
} from "@/src/hooks/enrollment.hoks";

type EnrollmentStatus = "APPROVED" | "REJECTED" | "PENDING";

interface Enrollment {
  _id: string;
  student: {
    name: string;
    _id: string;
    email: string;
  };
  course: {
    title: string;
    price: number;
  };
  paymentAmount: string;
  paymentBank: string;
  status: EnrollmentStatus;
  enrollmentDate: string;
}

const statusColorMap: Record<
  EnrollmentStatus,
  "success" | "danger" | "warning"
> = {
  APPROVED: "success",
  REJECTED: "danger",
  PENDING: "warning",
};

const statusIconMap: Record<EnrollmentStatus, JSX.Element> = {
  APPROVED: <CheckCircle className="h-4 w-4" />,
  REJECTED: <XCircle className="h-4 w-4" />,
  PENDING: <Clock className="h-4 w-4" />,
};

export default function AllEnrollmentTable() {
  const { data, isLoading, isError } = useGetAllEnrollment();
  const { mutate: approveStudent, isPending } = useApproveStudent();
  const [approvedIds, setApprovedIds] = useState<string[]>([]);

  const allEnrollments: Enrollment[] = data?.data || [];

  // Filter pending enrollments only
  const enrollments = allEnrollments.filter(
    (enrollment) =>
      enrollment.status === "PENDING" && !approvedIds.includes(enrollment._id),
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner color="primary" label="Loading enrollments..." />
      </div>
    );
  }

  if (isError) {
    return (
      <Card className="p-6 text-center bg-red-50 dark:bg-red-900/20">
        <XCircle className="mx-auto h-12 w-12 text-red-500 dark:text-red-400 mb-4" />
        <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
          Error loading data
        </h3>
        <p className="text-red-600 dark:text-red-300 mt-2">
          Failed to fetch enrollments
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <Table aria-label="Pending enrollments">
        <TableHeader>
          <TableColumn>STUDENT</TableColumn>
          <TableColumn>COURSE</TableColumn>
          <TableColumn>PAYMENT</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>ENROLLMENT DATE</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
          {enrollments.map((enrollment) => (
            <TableRow key={enrollment._id}>
              <TableCell>
                <div>
                  <p className="font-medium">{enrollment.student.name}</p>
                  <p className="text-sm text-gray-500">
                    {/* 🆔 ID: {enrollment?.student?.name} */}
                  </p>
                  <p className="text-sm text-gray-500">
                    ✉️ {enrollment.student.email}
                  </p>
                </div>
              </TableCell>
              <TableCell>
                <p className="font-medium">{enrollment.course.title}</p>
              </TableCell>
              <TableCell>
                <p className="font-medium">৳{enrollment.paymentAmount}</p>
                <p className="text-sm text-gray-500">
                  {enrollment.paymentBank}
                </p>
              </TableCell>
              <TableCell>
                <Chip
                  color={statusColorMap[enrollment.status]}
                  startContent={statusIconMap[enrollment.status]}
                  variant="dot"
                >
                  {enrollment.status}
                </Chip>
              </TableCell>
              <TableCell>
                {format(new Date(enrollment.enrollmentDate), "dd MMM, yyyy")}
              </TableCell>
              <TableCell>
                <Button
                  color="success"
                  isLoading={isPending}
                  size="sm"
                  variant="flat"
                  onClick={() => {
                    approveStudent(enrollment._id, {
                      onSuccess: () => {
                        setApprovedIds((prev) => [...prev, enrollment._id]);
                      },
                    });
                  }}
                >
                  Approve
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
