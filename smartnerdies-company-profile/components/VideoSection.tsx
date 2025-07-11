"use client";
import Image from "next/image";
import { useState } from "react";

// TypeScript interfaces
interface VideoData {
  id: number;
  title: string;
  description: string;
  tiktokUrl: string;
  videoId: string;
  username: string;
}

interface TikTokEmbedProps {
  videoId: string;
  username: string;
}

// Data video dengan link TikTok asli
const videoData: VideoData[] = [
  {
    id: 1,
    title: "Mendeley Tutorial",
    description: "Jaman sekarng kok masih ada yang gak bisa bikin mendeley 🤪",
    tiktokUrl:
      "https://www.tiktok.com/@smartnerdies.ed/video/7522757233831103751",
    videoId: "7522757233831103751",
    username: "smartnerdies.ed",
  },
  {
    id: 2,
    title: "Bimbingan Skripsi",
    description: "kamu kalau ngerjain skripsi sambil dengerin lagu apa?",
    tiktokUrl:
      "https://www.tiktok.com/@smartnerdies.ed/video/7518573465314626824",
    videoId: "7518573465314626824",
    username: "smartnerdies.ed",
  },
  {
    id: 3,
    title: "Tools Skripsi",
    description: "Tools apa yang jadi andelan kamu skripsian nih smarties?",
    tiktokUrl:
      "https://www.tiktok.com/@smartnerdies.ed/video/7517827948519410951",
    videoId: "7517827948519410951",
    username: "smartnerdies.ed",
  },
];

// Component untuk TikTok Direct Embed
const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ videoId, username }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showEmbed, setShowEmbed] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);

  const embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`;

  const handleShowEmbed = (): void => {
    setShowEmbed(true);
  };

  const handleIframeLoad = (): void => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleIframeError = (): void => {
    setHasError(true);
    setIsLoaded(false);
  };

  if (hasError) {
    return (
      <div className="bg-red-50 rounded-2xl w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16] relative overflow-hidden flex items-center justify-center">
        <div className="text-center p-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <p className="text-red-700 text-sm font-medium">Video gagal dimuat</p>
          <p className="text-red-500 text-xs mt-1">Coba buka di TikTok</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-200 rounded-2xl w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16] relative overflow-hidden">
      {!showEmbed ? (
        // Placeholder dengan tombol load
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-300 group"
          onClick={handleShowEmbed}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleShowEmbed();
            }
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg mx-auto mb-2">
                <svg
                  className="w-8 h-8 text-[#1E75BD] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white text-sm font-medium">
                Click to load TikTok
              </p>
            </div>
          </div>

          {/* TikTok Logo */}
          <div className="absolute bottom-4 right-4">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">TT</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          {/* Loading spinner */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1E75BD]"></div>
            </div>
          )}

          {/* TikTok Embed iframe */}
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={`TikTok video by ${username}`}
            className="rounded-2xl"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

const VideoSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      {/* Header Section */}
      <div className="mt-6 sm:mt-8 lg:mt-10 mb-8 sm:mb-12 px-4 sm:px-6 lg:px-14">
        <p className="font-medium text-[#2E2C2C] text-base sm:text-lg mb-4 sm:mb-6">
          Don&apos;t miss our <span className="text-[#1E75BD]">update</span>
        </p>
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <Image
            src="/tiktokLogo.png"
            alt="TikTok Logo"
            width={300}
            height={100}
            className="w-auto h-auto"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-14">
        {/* Video Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-6 sm:gap-8">
          {videoData.map((video: VideoData, index: number) => (
            <article
              key={video.id}
              className={`flex flex-col space-y-4 ${
                index === 2 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Video Embed */}
              <TikTokEmbed videoId={video.videoId} username={video.username} />

              {/* Video Info */}
              <div className="space-y-2">
                <h3 className="font-semibold text-xl sm:text-2xl lg:text-2xl text-[#2E2C2C] line-clamp-2">
                  {video.title}
                </h3>
                <p className="font-medium text-[#A9A9A9] text-lg sm:text-xl lg:text-xl line-clamp-2">
                  {video.description}
                </p>
                <button
                  onClick={() =>
                    window.open(
                      video.tiktokUrl,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="inline-flex items-center text-[#1E75BD] hover:text-[#1a5f99] font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1E75BD] focus:ring-opacity-50 rounded"
                  aria-label={`Watch ${video.title} on TikTok`}
                >
                  Watch on TikTok
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
