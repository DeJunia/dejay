import React from "react";
import { TestimonialProps } from "@/types/type";
import Image from "next/image";
import { GoStarFill } from "react-icons/go";
import { avatarCardProps } from "@/types/type";
import { Calendar, ChevronRight, Clock, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { LessonData, Category } from "@/types/type";
import { extractTextPreview } from "@/lib/editor/tiptap";
import { useRouter } from "next/navigation";

const Card: React.FC<{ item: TestimonialProps }> = ({ item }) => {
  return (
    <div className="w-full flex-shrink-0 p-5 bg-white rounded-lg border-2 border-gray-100">
      <div className="w-full">
        <div className="flex flex-row gap-5 items-start justify-between">
          <div className="flex flex-row gap-3 sm:gap-5 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={item.avatar}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="font-bold font-inter">{item.name}</p>
              <p className="font-inter text-sm">{item.course}</p>
            </div>
          </div>

          <div className="flex flex-row gap-1 items-center">
            {[...Array(5)].map((_, i) => (
              <GoStarFill
                key={i}
                className={`size-3 sm:size-4 ${
                  i < item.rating ? "text-yellow-500" : "text-gray-100"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <p className="mt-4 text-gray-600 font-inter italic">"" {item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

export const AvatarCard: React.FC<{ item: avatarCardProps }> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <Image
        src={item.avatar}
        alt="Michael Chen - Founder & CEO"
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-6 font-inter">
        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{item.position}</p>
        <p className="text-sm text-gray-500">{item.theme}</p>
      </div>
    </div>
  );
};

export const LessonCard = ({ lesson }: { lesson: LessonData }) => {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const categoryColor = lesson?.categoryId?.color ?? "#9ca3af"; // fallback gray
  const categoryName = lesson?.categoryId?.name ?? "?";

  return (
    <motion.div
      key={lesson?._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer group"
      onClick={() => router.push(`/lessons/read/${lesson?._id}`)}
    >
      <div className="p-5 bg-white shadow-lg rounded-md border border-gray-100 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="relative rounded-full size-8 flex items-center justify-center overflow-hidden">
              <div
                className="size-full"
                style={{
                  background: categoryColor,
                  opacity: 0.1,
                }}
              />
              <div
                className="absolute text-sm font-bold"
                style={{ color: categoryColor }}
              >
                {categoryName.slice(0, 1).toUpperCase()}
              </div>
            </div>
            <div>
              <h1 className="font-bold font-inter">{categoryName}</h1>
              <p className="text-xs text-gray-500">
                Instructor {lesson?.authorName ?? "Unknown"}
              </p>
            </div>
          </div>
          <ChevronRight className="size-6 text-gray-500 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
        </div>

        <h1 className="text-xl font-semibold text-gray-800 transition-all group-hover:text-green-500 line-clamp-1">
          {lesson?.title}
        </h1>

        <div className="bg-slate-50 p-2 rounded-r-md border-l-4 border-green-500">
          <p className="text-sm text-gray-500 line-clamp-3">
            {extractTextPreview(lesson?.content?.content ?? [], {
              maxChars: 220,
              maxBlocks: 4,
            })}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 text-gray-600">
            <Calendar className="h-3.5 w-3.5" />
            <span>
              {formatDate(lesson?.createdAt ?? new Date().toISOString())}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-600">
            <Clock className="h-3.5 w-3.5" />
            <span>{lesson?.readingTime ?? 0} min</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const CategoryCard = ({ category }: { category: Category }) => {
  const router = useRouter();

  const color = category?.color ?? "#9ca3af"; // fallback gray
  const name = category?.name ?? "Unknown";

  return (
    <motion.div
      key={category?._id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer group"
      onClick={() => router.push(`/lessons/category/${category?._id}`)}
    >
      <div className="py-5 bg-white flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <div className="relative rounded-full size-10 flex items-center justify-center overflow-hidden">
              <div
                className="size-full"
                style={{
                  background: color,
                  opacity: 0.1,
                }}
              />
              <div className="absolute text-sm font-bold" style={{ color }}>
                {name.slice(0, 1).toUpperCase()}
              </div>
            </div>

            <div>
              <h2 className="font-bold text-gray-800">{name}</h2>
              <p className="text-xs text-gray-500">
                {category?.lessonCount ?? 0} lessons
              </p>
            </div>
          </div>

          <ChevronRight className="size-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all" />
        </div>

        {/* Description */}
        {category?.description && (
          <p className="text-sm text-gray-600 line-clamp-3">
            {category.description}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
          <BookOpen className="h-4 w-4" />
          <span>Explore lessons</span>
        </div>
      </div>
    </motion.div>
  );
};
