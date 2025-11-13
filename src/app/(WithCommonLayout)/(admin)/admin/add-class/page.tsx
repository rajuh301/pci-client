"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Play, Plus, Trash2, Loader2, Youtube } from "lucide-react";

const baseApi = process.env.NEXT_PUBLIC_BASE_API;

type TCourse = {
  _id: string;
  title: string;
  description: string;
  price: number;
  videoUrls: string[];
  isClass: number;
};

export default function UploadClassVideos() {
  const [courses, setCourses] = useState<TCourse[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<TCourse | null>(null);
  const [videoUrls, setVideoUrls] = useState<string[]>([]);
  const [newUrl, setNewUrl] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  // ✅ Fetch all courses
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseApi}/course`);
      setCourses(res.data?.data || []);
    } catch (error) {
      toast.error("Failed to load courses");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // ✅ Open modal for a specific course
  const handleOpenModal = (course: TCourse) => {
    setSelectedCourse(course);
    setVideoUrls([]); // start fresh each time
    setNewUrl("");
    onOpen();
  };

  // ✅ Add new video URLc
  const handleAddVideo = () => {
    if (!newUrl.trim()) return toast.error("Please enter a valid video URL");

    // Prevent duplicate URLs
    if (videoUrls.includes(newUrl.trim()))
      return toast.error("This URL already exists in the list");

    setVideoUrls((prev) => [...prev, newUrl.trim()]);
    setNewUrl("");
  };

  // ✅ Remove video
  const handleRemove = (index: number) => {
    setVideoUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Submit to backend
  const handleSubmit = async () => {
    if (!selectedCourse?._id) return toast.error("No course selected");
    if (videoUrls.length === 0)
      return toast.error("Please add at least one video URL");

    try {
      setLoading(true);
      const res = await axios.post(
        `${baseApi}/course/upload-video/${selectedCourse._id}`,
        { videoUrls }
      );
      toast.success("🎥 Videos uploaded successfully!");
      onClose();
      setVideoUrls([]);
      fetchCourses();
    } catch (error: any) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📚 Manage Class Videos
      </motion.h2>

      {/* ✅ Course Grid */}
      {loading ? (
        <div className="text-center py-10 text-gray-500">Loading courses...</div>
      ) : courses.length === 0 ? (
        <div className="text-center text-gray-500">No courses found.</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <motion.div
              key={course._id}
              whileHover={{ scale: 1.03 }}
              className="p-5 bg-white dark:bg-slate-800 rounded-2xl shadow hover:shadow-lg border border-gray-200 dark:border-slate-700 cursor-pointer"
              onClick={() => handleOpenModal(course)}
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                {course.description}
              </p>
              <div className="mt-3 flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                <span>💰 {course.price} BDT</span>
                <span>🎬 {course.videoUrls.length} Videos</span>
              </div>
              <div className="mt-4 text-center">
                <button className="bg-pink-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-pink-700 transition-all flex items-center gap-1 justify-center mx-auto">
                  <Play size={16} />
                  Add Video
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* ✅ Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setNewUrl("");
          onClose();
        }}
        placement="center"
        size="lg"
        className="bg-white dark:bg-slate-800 rounded-2xl"
      >
        <ModalContent>
          <ModalHeader className="text-xl font-semibold text-pink-600">
            🎥 Add Videos to: {selectedCourse?.title}
          </ModalHeader>
          <ModalBody>
            {/* Input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="url"
                value={newUrl}
                onChange={(e) => setNewUrl(e.target.value)}
                placeholder="Enter video URL..."
                className="flex-grow border border-gray-300 dark:border-slate-600 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <Button
                color="primary"
                className="bg-pink-600 hover:bg-pink-700 text-white"
                onClick={handleAddVideo}
              >
                <Plus size={16} />
                Add
              </Button>
            </div>

            {/* ✅ Table for Added URLs */}
            {videoUrls.length > 0 && (
              <div className="max-h-64 overflow-y-auto">
                <Table aria-label="Added video URLs">
                  <TableHeader>
                    <TableColumn className="text-left">Video URL</TableColumn>
                    <TableColumn className="text-right">Action</TableColumn>
                  </TableHeader>
                  <TableBody>
                    {videoUrls.map((url, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Youtube className="text-red-500" size={18} />
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 dark:text-blue-400 text-sm truncate"
                            >
                              {url}
                            </a>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <button
                            onClick={() => handleRemove(index)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              disabled={loading}
              onClick={handleSubmit}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Uploading...
                </>
              ) : (
                "Submit Videos"
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}
