"use client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";

interface VideoData {
  id: number;
  title: string;
  description: string;
  tiktokUrl: string;
  videoId: string;
  username: string;
  thumbnailUrl: string;
}

interface StrapiTikTokData {
  id: number;
  Link: string;
}

const VideoSection: React.FC = () => {
  const [videoData, setVideoData] = useState<VideoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<{ [id: number]: boolean }>(
    {}
  );

  const extractVideoId = (url: string): string => {
    const match = url.match(/video\/(\d+)/);
    return match ? match[1] : "";
  };

  const fetchOembedData = async (url: string) => {
    try {
      const res = await fetch(
        `/api/tiktok-oembed?url=${encodeURIComponent(url)}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch oembed data for:", url, error);
      return null;
    }
  };

  const fetchVideoLinks = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://ambitious-desk-9046e01712.strapiapp.com/api/tiktoks"
      );
      const apiLinks: StrapiTikTokData[] = response.data.data;

      const videoPromises = apiLinks.map(async (item: StrapiTikTokData) => {
        const oembedData = await fetchOembedData(item.Link);

        return {
          id: item.id,
          title: oembedData?.title || `Video ${item.id}`,
          description: oembedData?.author_name
            ? `by @${oembedData.author_name}`
            : "Amazing TikTok video!",
          tiktokUrl: item.Link,
          videoId: extractVideoId(item.Link),
          username: oembedData?.author_name || "unknown",
          thumbnailUrl: oembedData?.thumbnail_url || "",
        };
      });

      const resolvedVideos = await Promise.all(videoPromises);
      const validVideos = resolvedVideos.filter((video) => video !== null);
      setVideoData(validVideos);
    } catch (error) {
      console.error("Error fetching video links:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideoLinks();
  }, [fetchVideoLinks]);

  const handleLoadVideo = (id: number) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));
  };

  if (loading) {
    return (
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1E75BD] mx-auto mb-4"></div>
              <p className="text-[#2E2C2C]">Loading videos from TikTok...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
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
        {videoData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#A9A9A9] text-lg">No videos available</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center gap-6 sm:gap-8">
            {videoData.map((video) => {
              const isLoaded = loadedVideos[video.id];

              return (
                <article key={video.id} className="flex flex-col space-y-4">
                  <div className="bg-neutral-200 rounded-2xl w-full max-w-sm aspect-[9/16] sm:aspect-[3/4] lg:aspect-[9/16] relative overflow-hidden">
                    {!isLoaded ? (
                      <div
                        className="absolute inset-0 cursor-pointer group"
                        onClick={() => handleLoadVideo(video.id)}
                      >
                        {video.thumbnailUrl ? (
                          <Image
                            src={video.thumbnailUrl}
                            alt={`Thumbnail for ${video.title}`}
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex items-center justify-center text-xs">
                            No thumbnail
                          </div>
                        )}

                        <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg mx-auto mb-2">
                              <svg
                                className="w-8 h-8 text-[#1E75BD] ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <p className="text-white text-sm font-medium">
                              Click to load TikTok
                            </p>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              TT
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <iframe
                        src={`https://www.tiktok.com/embed/v2/${video.videoId}`}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title={`TikTok video by ${video.username}`}
                        className="rounded-2xl w-full h-full"
                        loading="lazy"
                      />
                    )}
                  </div>

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
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
