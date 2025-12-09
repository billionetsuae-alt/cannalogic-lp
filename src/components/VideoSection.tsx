import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface VideoSectionProps {
  videoUrl: string;
}

export const VideoSection = ({ videoUrl }: VideoSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <motion.div
      ref={containerRef}
      style={{ scale, opacity }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="video-container aspect-video bg-secondary">
        <video
          src={videoUrl}
          controls
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect fill='%23f8f8f8' width='1920' height='1080'/%3E%3Ctext x='960' y='540' text-anchor='middle' dominant-baseline='middle' fill='%23005528' font-family='Georgia' font-size='48'%3EClick to Play%3C/text%3E%3C/svg%3E"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};
