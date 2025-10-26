"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Card, Spinner, Button, Badge, Progress, Drawer } from "@nextui-org/react";
import { Play, Lock, CheckCircle, ArrowLeft, Menu, X } from "lucide-react";
import { useGetSingleCourseies } from "@/src/hooks/getCourse";
import { useRouter } from "next/navigation";

export default function CourseVideoPage() {
  const { id } = useParams(); // courseId from URL
  const router = useRouter();
  const { data: course, isLoading } = useGetSingleCourseies(id as string);

  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);
  const [completedVideos, setCompletedVideos] = useState<number[]>([]);
  const [videoProgress, setVideoProgress] = useState<{ [key: string]: any }>({});
  const [isInitialized, setIsInitialized] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load progress from localStorage on component mount
  useEffect(() => {
    if (id) {
      const savedProgress = localStorage.getItem(`course-progress-${id}`);

      if (savedProgress) {
        try {
          const progress = JSON.parse(savedProgress);
          setCompletedVideos(progress.completedVideos || []);
          setVideoProgress(progress.videoProgress || {});

          // Set current video index based on progress
          if (progress.completedVideos && progress.completedVideos.length > 0) {
            const lastCompleted = Math.max(...progress.completedVideos);
            const nextVideoIndex = lastCompleted + 1;
            setCurrentVideoIndex(nextVideoIndex);

            // Auto-select the next video if course data is available
            if (course?.videoUrls && nextVideoIndex < course.videoUrls.length) {
              setCurrentVideo(course.videoUrls[nextVideoIndex]);
            }
          } else {
            // No videos completed, start from first video
            setCurrentVideoIndex(0);
            if (course?.videoUrls && course.videoUrls.length > 0) {
              setCurrentVideo(course.videoUrls[0]);
            }
          }
        } catch (error) {
          console.error("Error parsing localStorage data:", error);
          // Reset to default if there's an error
          setCompletedVideos([]);
          setCurrentVideoIndex(0);
          if (course?.videoUrls && course.videoUrls.length > 0) {
            setCurrentVideo(course.videoUrls[0]);
          }
        }
      } else {
        // No saved progress, start from first video
        setCurrentVideoIndex(0);
        if (course?.videoUrls && course.videoUrls.length > 0) {
          setCurrentVideo(course.videoUrls[0]);
        }
      }
      setIsInitialized(true);
    }
  }, [id, course]);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (id && isInitialized) {
      const progress = {
        completedVideos,
        videoProgress,
        currentVideoIndex,
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem(`course-progress-${id}`, JSON.stringify(progress));
    }
  }, [completedVideos, videoProgress, currentVideoIndex, id, isInitialized]);

  if (isLoading || !isInitialized) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner color="primary" label="কোর্স লোড হচ্ছে..." />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center text-gray-500 mt-20 px-4">
        কোর্সটি পাওয়া যায়নি বা আপনার অ্যাক্সেস নেই।
      </div>
    );
  }

  const getEmbedUrl = (url: string) => {
    // YouTube Shorts
    if (url.includes("youtube.com/shorts/")) {
      const videoId = url.split("/shorts/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // YouTube watch links
    else if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    // YouTube shortened links
    else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;
    }
    // Google Drive links
    const driveMatch = url.match(/\/d\/(.*?)\//);
    if (driveMatch) {
      return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    }
    // fallback for direct mp4 links
    return url;
  };

  const isVideoAccessible = (index: number) => {
    // First video is always accessible
    if (index === 0) return true;
    // Other videos are accessible only if previous video is completed
    return completedVideos.includes(index - 1);
  };

  const isVideoCompleted = (index: number) => {
    return completedVideos.includes(index);
  };

  const handleVideoSelect = (index: number, url: string) => {
    if (isVideoAccessible(index)) {
      setCurrentVideo(url);
      setCurrentVideoIndex(index);
      // Close drawer on mobile after selection
      if (window.innerWidth < 1024) {
        setIsDrawerOpen(false);
      }
    }
  };

  const handleVideoComplete = () => {
    if (!isVideoCompleted(currentVideoIndex)) {
      const newCompletedVideos = [...completedVideos, currentVideoIndex];
      setCompletedVideos(newCompletedVideos);

      // Auto-play next video if available
      const nextIndex = currentVideoIndex + 1;
      if (nextIndex < course.videoUrls.length && isVideoAccessible(nextIndex)) {
        setTimeout(() => {
          setCurrentVideo(course.videoUrls[nextIndex]);
          setCurrentVideoIndex(nextIndex);
        }, 2000);
      }
    }
  };

  const markVideoAsCompleted = () => {
    if (!isVideoCompleted(currentVideoIndex)) {
      const newCompletedVideos = [...completedVideos, currentVideoIndex];
      setCompletedVideos(newCompletedVideos);
    }
  };

  const goToNextVideo = () => {
    const nextIndex = currentVideoIndex + 1;
    if (nextIndex < course.videoUrls.length && isVideoAccessible(nextIndex)) {
      setCurrentVideo(course.videoUrls[nextIndex]);
      setCurrentVideoIndex(nextIndex);
    }
  };

  const goToPreviousVideo = () => {
    const prevIndex = currentVideoIndex - 1;
    if (prevIndex >= 0) {
      setCurrentVideo(course.videoUrls[prevIndex]);
      setCurrentVideoIndex(prevIndex);
    }
  };

  // Calculate progress percentage
  const progressPercentage = course.videoUrls.length > 0
    ? Math.round((completedVideos.length / course.videoUrls.length) * 100)
    : 0;

  // Mobile Lesson List Drawer
  const LessonListDrawer = () => (
    <div className="lg:hidden">
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement="bottom"
        size="full"
      >
        <div className="p-4 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Play size={18} />
              লেসন সমূহ
            </h2>
            <Button
              isIconOnly
              variant="light"
              onClick={() => setIsDrawerOpen(false)}
            >
              <X size={20} />
            </Button>
          </div>

          {/* Lesson List */}
          <div className="flex-1 overflow-y-auto space-y-2">
            {course.videoUrls?.map((url: string, index: number) => {
              const accessible = isVideoAccessible(index);
              const completed = isVideoCompleted(index);
              const isCurrent = currentVideoIndex === index;

              return (
                <button
                  // 🚨 IMPORTANT CHANGE: Use <button> instead of <div>
                  type="button" // Always specify type for a button
                  key={index}
                  className={`p-3 rounded-md border transition-all ${isCurrent
                    ? "bg-blue-100 border-blue-500 shadow-md"
                    : accessible
                      ? "bg-white hover:bg-blue-50 border-blue-100"
                      : "bg-gray-100 border-gray-200 cursor-not-allowed"
                    } ${completed ? "ring-1 ring-green-500" : ""}`}
                  // The onClick is now on a native interactive element
                  onClick={() => accessible && handleVideoSelect(index, url)}
                  // Disable the button when it's not accessible
                  disabled={!accessible}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* ... icons and text content remain the same ... */}
                      {completed ? (
                        <CheckCircle size={16} className="text-green-500" />
                      ) : accessible ? (
                        <Play size={16} className="text-blue-500" />
                      ) : (
                        <Lock size={16} className="text-gray-400" />
                      )}
                      <span className={`font-medium ${!accessible ? "text-gray-400" :
                        completed ? "text-green-700" : "text-gray-700"
                        }`}>
                        লেসন {index + 1}
                      </span>
                    </div>
                    {completed && (
                      <Badge color="success" variant="flat" size="sm">
                        ✓
                      </Badge>
                    )}
                    {isCurrent && !completed && (
                      <Badge color="primary" variant="flat" size="sm">
                        →
                      </Badge>
                    )}
                  </div>
                  {!accessible && index > 0 && (
                    <p className="text-xs text-gray-500 mt-1">
                      লেসন {index} সম্পন্ন করুন
                    </p>
                  )}
                </button>
              );


            })}
          </div>

          {/* Progress Summary */}
          <div className="mt-4 p-3 bg-gray-50 rounded-lg border">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">মোট অগ্রগতি</span>
              <span className="font-semibold">{progressPercentage}%</span>
            </div>
            <Progress
              size="sm"
              value={progressPercentage}
              color="primary"
            />
            <p className="text-xs text-gray-500 text-center mt-1">
              {completedVideos.length} / {course.videoUrls.length} লেসন সম্পন্ন
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section - Mobile Optimized */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="container mx-auto px-3 py-3">
          <div className="flex items-center justify-between gap-2">
            {/* Back Button */}
            <Button
              isIconOnly
              variant="light"
              size="sm"
              onClick={() => router.push("/dashboard")}
              className="flex-shrink-0"
            >
              <ArrowLeft size={18} />
            </Button>

            {/* Course Title - Truncated for mobile */}
            <div className="flex-1 min-w-0 text-center px-2">
              <h1 className="text-lg font-bold text-gray-800 truncate">
                {course.title}
              </h1>
              <p className="text-xs text-gray-600 truncate hidden sm:block">
                {course.description}
              </p>
            </div>

            {/* Progress and Menu */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Progress - Hidden on very small screens */}
              <div className="hidden xs:block w-20">
                <Progress
                  size="sm"
                  value={progressPercentage}
                  color="primary"
                />
                <p className="text-[10px] text-gray-500 text-center mt-1">
                  {progressPercentage}%
                </p>
              </div>

              {/* Lesson List Toggle - Mobile Only */}
              <Button
                isIconOnly
                variant="light"
                size="sm"
                onClick={() => setIsDrawerOpen(true)}
                className="lg:hidden"
              >
                <Menu size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Video Player Section - Full width on mobile, 3/4 on desktop */}
          <div className="lg:col-span-3">
            <Card className="p-3 sm:p-4 md:p-6 shadow-lg">
              {currentVideo ? (
                <div className="space-y-4">
                  {/* Video Player - Responsive aspect ratio */}
                  <div className="aspect-video bg-black rounded-lg shadow-xl">
                    {currentVideo.includes("youtube.com") ||
                      currentVideo.includes("youtu.be") ||
                      currentVideo.includes("drive.google.com") ? (
                      <iframe
                        src={getEmbedUrl(currentVideo)}
                        className="w-full h-full rounded-lg"
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        title={`লেসন ${currentVideoIndex + 1}`}
                      />
                    ) : (
                      <video
                        key={currentVideo}
                        controls
                        onEnded={handleVideoComplete}
                        className="w-full h-full rounded-lg"
                      >
                        <source src={currentVideo} type="video/mp4" />
                        {/* ✅ Added track element to satisfy jsx-a11y/media-has-caption rule */}
                        <track
                          kind="captions"
                          src=""
                          srcLang="bn"
                          label="Bengali captions"
                          default
                        />
                        আপনার ব্রাউজার ভিডিওটি সাপোর্ট করে না।
                      </video>
                    )}
                  </div>


                  {/* Video Controls - Stack on mobile */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 text-center sm:text-left">
                      লেসন {currentVideoIndex + 1}
                      {isVideoCompleted(currentVideoIndex) && (
                        <Badge color="success" variant="flat" className="ml-2 hidden sm:inline">
                          সম্পন্ন
                        </Badge>
                      )}
                    </h2>
                    <div className="flex gap-2 w-full sm:w-auto justify-center">
                      <Button
                        variant="flat"
                        onClick={goToPreviousVideo}
                        isDisabled={currentVideoIndex === 0}
                        size="sm"
                        className="flex-1 sm:flex-none"
                      >
                        পূর্ববর্তী
                      </Button>
                      {!isVideoCompleted(currentVideoIndex) && (
                        <Button
                          color="success"
                          onClick={markVideoAsCompleted}
                          size="sm"
                          className="flex-1 sm:flex-none"
                        >
                          সম্পন্ন
                        </Button>
                      )}
                      <Button
                        color="primary"
                        onClick={goToNextVideo}
                        isDisabled={currentVideoIndex === course.videoUrls.length - 1 || !isVideoAccessible(currentVideoIndex + 1)}
                        size="sm"
                        className="flex-1 sm:flex-none"
                      >
                        পরবর্তী
                      </Button>
                    </div>
                  </div>

                  {/* Progress Summary - Grid responsive */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
                    <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600">মোট লেসন</p>
                      <p className="font-bold text-blue-600 text-sm sm:text-base">{course.videoUrls.length}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-green-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600">সম্পন্ন</p>
                      <p className="font-bold text-green-600 text-sm sm:text-base">{completedVideos.length}</p>
                    </div>
                    <div className="p-2 sm:p-3 bg-yellow-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600">বাকি</p>
                      <p className="font-bold text-yellow-600 text-sm sm:text-base">
                        {course.videoUrls.length - completedVideos.length}
                      </p>
                    </div>
                    <div className="p-2 sm:p-3 bg-purple-50 rounded-lg">
                      <p className="text-xs sm:text-sm text-gray-600">অগ্রগতি</p>
                      <p className="font-bold text-purple-600 text-sm sm:text-base">{progressPercentage}%</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <Play size={40} className="text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 text-base sm:text-lg">ভিডিও সিলেক্ট করুন</p>
                  <p className="text-gray-400 text-sm hidden sm:block">শেখা শুরু করতে প্রথম লেসনটি সিলেক্ট করুন</p>
                  {/* Mobile instruction */}
                  <Button
                    color="primary"
                    onClick={() => setIsDrawerOpen(true)}
                    className="mt-3 sm:hidden"
                  >
                    লেসন তালিকা দেখুন
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Video List Section - Hidden on mobile, shown in drawer */}
          <div className="hidden lg:block lg:col-span-1">
            <Card className="p-4 shadow-lg sticky top-24">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Play size={18} />
                লেসন সমূহ
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {course.videoUrls?.map((url: string, index: number) => {
                  const accessible = isVideoAccessible(index);
                  const completed = isVideoCompleted(index);
                  const isCurrent = currentVideoIndex === index;

                  return (
                    <button
                      key={index}
                      type="button"
                      disabled={!accessible}
                      onClick={() => handleVideoSelect(index, url)}
                      className={`w-full text-left p-3 rounded-md border transition-all ${isCurrent
                        ? "bg-blue-100 border-blue-500 shadow-md"
                        : accessible
                          ? "bg-white hover:bg-blue-50 border-blue-100"
                          : "bg-gray-100 border-gray-200 cursor-not-allowed"
                        } ${completed ? "ring-1 ring-green-500" : ""}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {completed ? (
                            <CheckCircle size={16} className="text-green-500" />
                          ) : accessible ? (
                            <Play size={16} className="text-blue-500" />
                          ) : (
                            <Lock size={16} className="text-gray-400" />
                          )}
                          <span
                            className={`font-medium ${!accessible ? "text-gray-400" : completed ? "text-green-700" : "text-gray-700"
                              }`}
                          >
                            লেসন {index + 1}
                          </span>
                        </div>
                        {completed && (
                          <Badge color="success" variant="flat" size="sm">
                            ✓
                          </Badge>
                        )}
                        {isCurrent && !completed && (
                          <Badge color="primary" variant="flat" size="sm">
                            →
                          </Badge>
                        )}
                      </div>
                      {!accessible && index > 0 && (
                        <p className="text-xs text-gray-500 mt-1">লেসন {index} সম্পন্ন করুন</p>
                      )}
                    </button>
                  );


                })}
              </div>

              {/* Overall Progress */}
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">মোট অগ্রগতি</span>
                  <span className="font-semibold">{progressPercentage}%</span>
                </div>
                <Progress
                  size="sm"
                  value={progressPercentage}
                  color="primary"
                />
                <p className="text-xs text-gray-500 text-center mt-1">
                  {completedVideos.length} / {course.videoUrls.length} লেসন সম্পন্ন
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Lesson List Drawer */}
      <LessonListDrawer />

      {/* Floating Action Button for Mobile Lesson List */}
      <div className="lg:hidden fixed bottom-6 right-6 z-30">
        <Button
          isIconOnly
          color="primary"
          size="lg"
          onClick={() => setIsDrawerOpen(true)}
          className="shadow-lg"
        >
          <Menu size={20} />
        </Button>
      </div>
    </div>
  );
}