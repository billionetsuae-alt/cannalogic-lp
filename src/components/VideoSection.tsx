import { motion } from "framer-motion";

interface VideoSectionProps {
  videoUrl: string;
}

export const VideoSection = ({ videoUrl }: VideoSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="video-container aspect-video">
        <video
          src={videoUrl}
          controls
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080' viewBox='0 0 1920 1080'%3E%3Crect fill='%230a0a0a' width='1920' height='1080'/%3E%3Ctext x='960' y='540' text-anchor='middle' dominant-baseline='middle' fill='%23D4AF37' font-family='Georgia' font-size='48'%3EClick to Play%3C/text%3E%3C/svg%3E"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </motion.div>
  );
};
