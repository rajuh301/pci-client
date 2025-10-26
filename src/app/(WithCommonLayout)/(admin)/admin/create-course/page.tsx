"use client";

import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  useFieldArray,
} from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import FXInput from "@/src/components/form/FXInput";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import Loading from "@/src/components/UI/Loading";
import { useUser } from "@/src/contex/user.provider";
import { useCreateCourse } from "@/src/hooks/course.hook";

interface CourseFormData {
  title: string;
  description: string;
  isClass: string;
  duration: string;
  price: string;
  startDate: string;
  endDate: string;
  subject: string;
  chapters: string[];
  videoUrls: string[];
}

export default function CreateCoursePage() {
  const methods = useForm<CourseFormData>({
    defaultValues: {
      chapters: [""],
      videoUrls: [""],
      title: "",
      description: "",
      isClass: "",
      duration: "",
      price: "",
      startDate: "",
      endDate: "",
      subject: "",
    },
  });

  const { handleSubmit, control } = methods;
  const router = useRouter();
  const { user } = useUser();

  // Field arrays for dynamic lists - explicitly typed
  const {
    fields: chapterFields,
    append: addChapter,
    remove: removeChapter
  } = useFieldArray({
    control,
    name: "chapters" as never, // Use 'as never' to bypass the type issue
  });

  const {
    fields: videoFields,
    append: addVideo,
    remove: removeVideo
  } = useFieldArray({
    control,
    name: "videoUrls" as never, // Use 'as never' to bypass the type issue
  });

  const { mutate: handleCreateCourse, isPending: createCoursePending } =
    useCreateCourse();

  const onSubmit: SubmitHandler<CourseFormData> = (data) => {
    if (!data.startDate || !data.endDate) {
      toast.error("Start Date and End Date are required");
      return;
    }

    if (!user?._id) {
      toast.error("User not authenticated");
      return;
    }

    // Clean up arrays
    const validChapters = (data.chapters || [])
      .filter((ch: string) => ch.trim() !== "")
      .map((ch: string) => ch.trim());

    const validVideos = (data.videoUrls || [])
      .filter((url: string) => url.trim() !== "")
      .map((url: string) => url.trim());

    const courseData = {
      title: data.title,
      description: data.description,
      instructor: user._id,
      isClass: Number(data.isClass),
      duration: Number(data.duration),
      price: Number(data.price),
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
      subject: data.subject,
      chapters: validChapters,
      videoUrls: validVideos,
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
            {/* Row 1 */}
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Course Title" name="title" />
              </div>
              <div className="min-w-fit flex-1">
                <FXInput
                  label="Class (isClass)"
                  name="isClass"
                  type="number"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Subject" name="subject" />
              </div>
              <div className="min-w-fit flex-1">
                <FXInput
                  label="Duration (in hours)"
                  name="duration"
                  type="number"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput
                  label="Price ($)"
                  name="price"
                  type="number"
                />
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Start Date" name="startDate" />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXDatePicker label="End Date" name="endDate" />
              </div>
            </div>

            {/* Description */}
            <div className="py-2">
              <FXInput label="Description" name="description" />
            </div>

            {/* Video URLs */}
            <Divider className="my-4" />
            <h2 className="text-lg font-semibold mb-2">Video URLs</h2>

            <div className="flex flex-col gap-3">
              {videoFields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-center gap-3 border rounded-lg p-3"
                >
                  <FXInput
                    label={`Video URL ${index + 1}`}
                    name={`videoUrls.${index}`}
                  />
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={() => removeVideo(index)}
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>
              ))}

              <Button
                onPress={() => addVideo("")}
                color="primary"
                variant="flat"
                size="sm"
                className="w-fit"
              >
                + Add Video
              </Button>
            </div>

            {/* Chapters */}
            <Divider className="my-4" />
            <h2 className="text-lg font-semibold mb-2">Chapters</h2>

            <div className="flex flex-col gap-3">
              {chapterFields.map((field, index) => (
                <div
                  key={field.id}
                  className="flex items-center gap-3 border rounded-lg p-3"
                >
                  <FXInput
                    label={`Chapter ${index + 1}`}
                    name={`chapters.${index}`}
                  />
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={() => removeChapter(index)}
                    size="sm"
                  >
                    Remove
                  </Button>
                </div>
              ))}

              <Button
                onPress={() => addChapter("")}
                color="primary"
                variant="flat"
                size="sm"
                className="w-fit"
              >
                + Add Chapter
              </Button>
            </div>

            <Divider className="my-5" />
            <div className="flex justify-end">
              <Button size="lg" type="submit" color="primary">
                Create Course
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}