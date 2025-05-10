"use client";

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import FXInput from "@/src/components/form/FXInput";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/contex/user.provider";
import { useCreateCourse } from "@/src/hooks/course.hook";

export default function CreateCoursePage() {
  const methods = useForm();
  const { handleSubmit } = methods;
  const router = useRouter();
  const { user } = useUser();

  const { mutate: handleCreateCourse, isPending: createCoursePending } =
    useCreateCourse();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // Validate required fields
    if (!data.startDate || !data.endDate) {
      toast.error("Start Date and End Date are required");

      return;
    }

    if (!user?._id) {
      toast.error("User not authenticated");

      return;
    }

    const courseData = {
      title: data.title,
      description: data.description,
      duration: Number(data.duration),
      price: Number(data.price),
      instructor: user._id,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
    };

    handleCreateCourse(courseData, {
      onSuccess: () => {
        toast.success("Course created successfully!");
        router.push("/");
      },
      onError: () => {
        toast.error("Course creation failed");
      },
    });
  };

  return (
    <>
      {createCoursePending && <Loading />}
      <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
        <h1 className="text-2xl font-semibold">Create a New Course</h1>
        <Divider className="mb-5 mt-3" />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Course Title" name="title" />
              </div>
              <div className="min-w-fit flex-1">
                <FXInput
                  label="Duration (in hours)"
                  name="duration"
                  type="number"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Price ($)" name="price" type="number" />
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Start Date" name="startDate" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXDatePicker label="End Date" name="endDate" />
              </div>
            </div>

            <div className="py-2">
              <FXInput label="Description" name="description" />
            </div>

            <Divider className="my-5" />
            <div className="flex justify-end">
              <Button size="lg" type="submit">
                Create Course
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}
