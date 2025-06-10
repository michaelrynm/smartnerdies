"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="bg-blue-200 py-16 px-4 sm:px-6 lg:px-8 mt-5 lg:mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h1>
              <p className="text-gray-700 text-lg">
                email, call, or complete the form to learn how
                <br />
                Smartnerdies can solve your problem.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-gray-700">info@smartnerdies.mail.com</p>
              <p className="text-gray-700">02112345</p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Customer Support
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Feedback and suggestions
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Media inquiries
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Get in touch
              </h2>
              <p className="text-gray-600 text-sm">You can reach us anytime.</p>
            </div>

            <div className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <div className="flex">
                  <select className="px-3 py-3 border border-gray-300 rounded-l-lg bg-gray-50 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                    <option>+62</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder=""
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-sm resize-none"
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  0/100
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Submit
              </button>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center">
                <span className="underline cursor-pointer">
                  Terms of service
                </span>{" "}
                and{" "}
                <span className="underline cursor-pointer">Privacy Policy</span>{" "}
                applied
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
