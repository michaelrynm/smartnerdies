"use client";
import { useState } from "react";
import { FaInstagram, FaTiktok, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TestimonialSection() {
  const [formData, setFormData] = useState({
    name: "",
    testimonial: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Testimonial submitted:", formData);
    // Handle testimonial submission here
  };

  return (
    <div className="bg-blue-200 py-16 px-4 sm:px-6 lg:px-8">
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
                <div className="text-xs text-gray-600">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3" />
                      ))}
                    </div>
                    <span className="font-medium">A.R.</span>
                  </div>
                  <p className="italic">
                    "Pembelajaran yang sangat efektif dan mudah dipahami!"
                  </p>
                </div>
                <div className="text-xs text-gray-600">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="w-3 h-3" />
                      ))}
                    </div>
                    <span className="font-medium">M.D.</span>
                  </div>
                  <p className="italic">
                    "Tim yang sangat membantu dan responsif."
                  </p>
                </div>
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
                  name="testimonial"
                  placeholder="Ceritakan pengalaman Anda dengan layanan kami..."
                  rows={5}
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm resize-none"
                />
                <div className="text-right text-xs text-gray-400 mt-1">
                  {formData.testimonial.length}/500
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!formData.name.trim() || !formData.testimonial.trim()}
              >
                Kirim Testimoni
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
