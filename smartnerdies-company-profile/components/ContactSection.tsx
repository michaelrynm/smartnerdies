"use client";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaStar, FaSpinner } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactSectionDialog from "./ContactSectionDialog";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

type tLatestReview = {
  id: number;
  documentId: string;
  name: string;
  review: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export default function TestimonialSection() {
  const [latestReview, setLatestReview] = useState<tLatestReview[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 5,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: rating,
    }));
  };

  const handleSubmit = async () => {
    const notify = () => toast.success("Review submitted successfully");

    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://ambitious-desk-9046e01712.strapiapp.com/api/reviews",
        { data: formData }
      );
      console.log(res);
      if (res.status === 201) {
        notify();
      }
    } catch (error) {
      console.log("error submit review Data", error);
    } finally {
      setIsLoading(false);
      setFormData({
        name: "",
        review: "",
        rating: 5,
      });
      fetchLatestReview();
    }
  };

  const fetchLatestReview = async () => {
    try {
      const res = await axios.get(
        "https://ambitious-desk-9046e01712.strapiapp.com/api/reviews?sort[0]=createdAt:desc&pagination[limit]=2"
      );
      setLatestReview(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLatestReview();
  }, []);

  return (
    <div className="bg-blue-200 py-16 px-4 sm:px-6 lg:px-8">
      <ToastContainer />;
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-medium text-gray-900 mb-4">
                Bagikan Pengalaman!
              </h1>
              <p className="text-gray-700 text-lg">
                Ceritakan pengalaman belajar Anda bersama kami.
                <br />
                Testimoni Anda sangat berarti untuk Smartnerdies.
              </p>
            </div>
            <div>
              <ContactSectionDialog />
            </div>

            <div className="space-y-1">
              <p>Email:</p>
              <p className="text-gray-700">smartnerdies@gmail.com</p>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Follow us</h3>
              <div className="flex items-center gap-2">
                <FaInstagram className="w-6 h-6 text-pink-600" />
                <p className="text-base text-gray-600">smartnerdies.ed</p>
              </div>

              <div className="flex items-center gap-2">
                <FaTiktok className="w-6 h-6 text-gray-900" />
                <p className="text-base text-gray-600">smartnerdies.ed</p>
              </div>
              <div className="flex items-center gap-2">
                <FaXTwitter className="w-6 h-6 text-gray-900" />
                <p className="text-base text-gray-600">SmartnerdiesEdu</p>
              </div>
            </div>

            {/* Sample Testimonials Preview */}
            <div className="bg-white/50 rounded-xl p-4 space-y-3">
              <h4 className="font-medium text-gray-900 text-sm">
                Testimoni Terbaru
              </h4>
              <div className="space-y-2">
                {latestReview.map((reviews, i) => (
                  <div key={i} className="text-xs text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              reviews.rating >= i + 1
                                ? "text-yellow-400"
                                : "text-gray-300"
                            } w-3 h-3`}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{reviews.name}</span>
                      <span>-</span>
                      <span>{dayjs(reviews.createdAt).fromNow()}</span>
                    </div>
                    <p className="italic">&quot;{reviews.review}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Testimonial Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Tulis Testimoni Anda
              </h2>
              <p className="text-gray-600 text-sm">
                Bagikan pengalaman Anda dengan layanan kami.
              </p>
            </div>

            <div className="space-y-5">
              {/* Name/Initial Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama atau Inisial
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Contoh: John Doe atau J.D."
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                />
              </div>

              {/* Rating Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating Pengalaman
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="focus:outline-none"
                    >
                      <FaStar
                        className={`w-6 h-6 transition-colors ${
                          star <= formData.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({formData.rating}/5)
                  </span>
                </div>
              </div>

              {/* Testimonial Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Testimoni Anda
                </label>
                <textarea
                  name="review"
                  placeholder="Ceritakan pengalaman Anda dengan layanan kami..."
                  rows={5}
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm resize-none"
                />
                <div className="text-right text-xs text-gray-400 mt-1">
                  {formData.review.length}/500
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading || !formData.name || !formData.review}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <FaSpinner className="w-6 h-6 animate-spin" />
                  </div>
                ) : (
                  "Submit"
                )}
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray-500 text-center">
                Testimoni Anda akan ditampilkan dengan nama/inisial yang Anda
                berikan.
                <br />
                <span className="underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                berlaku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
