"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import axios from "axios";

type ServiceData = {
  Title: string;
  Description: string;
  Card_1_Title: string;
  Card_1_Description: string;
  Card_1_Image: {
    url: string;
  };
  Card_2_Title: string;
  Card_2_Description: string;
  Card_2_Image: {
    url: string;
  };
};

type ModalDataItem = {
  Link: string;
  Name: string;
  Image: {
    url: string;
  };
};

export default function Services() {
  const [serviceData, setServicesData] = useState<ServiceData | null>(null);
  const [modalData, setModalData] = useState<ModalDataItem[]>([]);

  const fetchServicesData = async () => {
    try {
      const response = await axios.get(
        "https://ambitious-desk-9046e01712.strapiapp.com/api/services?populate=*"
      );
      setServicesData(response.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDialogData = async () => {
    try {
      const response = await axios.get(
        "https://ambitious-desk-9046e01712.strapiapp.com/api/admin-modals?populate=*"
      );
      setModalData(response.data.data);
    } catch (error) {
      console.log("Fetch Dialog Data error", error);
    }
  };

  useEffect(() => {
    fetchServicesData();
    fetchDialogData();
  }, []);

  return (
    <div className="mt-8 sm:mt-12 lg:mt-16">
      {/* Header Section */}
      <motion.div
        className="flex justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-lg text-center">
          <motion.h2
            className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl italic"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {serviceData?.Title}
          </motion.h2>
          <motion.p
            className="text-center text-xs sm:text-sm mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {serviceData?.Description}
          </motion.p>
        </div>
      </motion.div>

      {/* Services Cards Container */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 2xl:px-80 mt-8 sm:mt-12 lg:mt-16">
        {/* Card 1 - Academic Assistant */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Image/Color Block */}
          <motion.div
            className="h-64 sm:h-80 lg:h-96 rounded-2xl bg-[#78A62C] order-2 lg:order-1 shadow-xl"
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            {serviceData?.Card_1_Image?.url ? (
              <Image
                src={serviceData.Card_1_Image.url}
                alt="Academic Assistant"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full object-cover rounded-2xl flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
          </motion.div>

          {/* Content */}
          <motion.div
            className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:space-y-8 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <motion.h3
              className="text-[#2E2C2C] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Academic Assistant
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {serviceData?.Card_1_Description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    className="relative overflow-hidden bg-gradient-to-r from-[#78A62C] to-[#8BC34A] text-white font-semibold rounded-2xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(120, 166, 44, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    ></motion.div>
                    <span className="relative">Mulai Sekarang!</span>
                  </motion.button>
                </DialogTrigger>

                <DialogContent className="max-w-md p-0 gap-0 rounded-3xl overflow-hidden border-0 shadow-2xl">
                  {/* Header with gradient */}
                  <motion.div
                    className="bg-gradient-to-r from-[#78A62C] to-[#8BC34A] p-6 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-white">
                        Smart Tutor, Smart Student
                      </DialogTitle>
                      <DialogDescription className="text-white/90 text-sm leading-relaxed mt-2">
                        Smartnerdies adalah lembaga belajar khusus mahasiswa
                        yang siap membantu kamu mulai dari mengikuti kelas mata
                        kuliah, lomba, menghadapi skripsi ataupun tesis, hingga
                        menyiapkan karir yang sesuai passion
                      </DialogDescription>
                    </DialogHeader>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="font-semibold text-gray-800 mb-4 text-center">
                      Pilih salah satu admin untuk Konsultasi
                    </h3>
                    <motion.div
                      className="space-y-3"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {modalData?.map((data, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <Link href={data.Link} className="block">
                            <motion.div
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              <Button className="w-full justify-between bg-white border border-gray-200 text-gray-800 rounded-2xl p-8 hover:border-[#78A62C]/50 hover:bg-[#78A62C]/5 hover:shadow-md transition-all duration-300 group">
                                <div className="flex items-center gap-3">
                                  <div>
                                    <Avatar
                                      className={`${
                                        data.Name === "Poet"
                                          ? "bg-orange-500"
                                          : "bg-[#78A62C]"
                                      } w-10 h-10`}
                                    >
                                      <AvatarImage src={data.Image.url} />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <div className="text-left">
                                    <div className="font-medium">
                                      {data.Name}
                                    </div>
                                    {data.Name === "Poet" && (
                                      <div className="text-xs text-gray-500">
                                        Customer Support
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="group-hover:text-[#78A62C] transition-colors">
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </Button>
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Card 2 - Mentoring */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Content */}
          <motion.div
            className="flex flex-col justify-between space-y-4 sm:space-y-6 lg:space-y-8 order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.h3
              className="text-[#2E2C2C] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {serviceData?.Card_2_Title}
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {serviceData?.Card_2_Description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    className="relative overflow-hidden bg-gradient-to-r from-[#1E75BD] to-[#1E75BD] text-white font-semibold rounded-2xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(30, 117, 189, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                      animate={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    ></motion.div>
                    <span className="relative">Mulai Sekarang!</span>
                  </motion.button>
                </DialogTrigger>

                <DialogContent className="max-w-md p-0 gap-0 rounded-3xl overflow-hidden border-0 shadow-2xl">
                  {/* Header with gradient */}
                  <motion.div
                    className="bg-gradient-to-r from-[#1E75BD] to-[#8BC34A] p-6 text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-white">
                        Smart Tutor, Smart Student
                      </DialogTitle>
                      <DialogDescription className="text-white/90 text-sm leading-relaxed mt-2">
                        Smartnerdies adalah lembaga belajar khusus mahasiswa
                        yang siap membantu kamu mulai dari mengikuti kelas mata
                        kuliah, lomba, menghadapi skripsi ataupun tesis, hingga
                        menyiapkan karir yang sesuai passion
                      </DialogDescription>
                    </DialogHeader>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h3 className="font-semibold text-gray-800 mb-4 text-center">
                      Pilih salah satu admin untuk Konsultasi
                    </h3>
                    <motion.div
                      className="space-y-3"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {modalData.map((data, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                        >
                          <Link href={data.Link} className="block">
                            <motion.div
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                              }}
                            >
                              <Button
                                className={`w-full justify-between bg-white border border-gray-200 text-gray-800 rounded-2xl p-8 hover:border-[#1E75BD]/50 hover:bg-[#1E75BD]/5 hover:shadow-md transition-all duration-300 group`}
                              >
                                <div className="flex items-center gap-3">
                                  <div>
                                    <Avatar
                                      className={`${
                                        data.Name === "Poet"
                                          ? "bg-orange-500"
                                          : "bg-[#1E75BD]"
                                      } w-10 h-10`}
                                    >
                                      <AvatarImage src={data.Image.url} />
                                      <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                  </div>
                                  <div className="text-left">
                                    <div className="font-medium">
                                      {data.Name}
                                    </div>
                                    {data.Name === "Poet" && (
                                      <div className="text-xs text-gray-500">
                                        Customer Support
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div
                                  className={`w-4 h-4 text-gray-400 "group-hover:text-[#1E75BD]" transition-colors`}
                                >
                                  <svg
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </div>
                              </Button>
                            </motion.div>
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </motion.div>

          {/* Image/Color Block */}
          <motion.div
            className="h-64 sm:h-80 lg:h-96 rounded-2xl bg-[#A1C3DF] order-2 shadow-xl"
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              rotateY: -5,
              transition: { duration: 0.3 },
            }}
          >
            {serviceData?.Card_2_Image?.url ? (
              <Image
                src={serviceData.Card_2_Image.url}
                alt="Academic Assistant"
                width={500}
                height={400}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full object-cover rounded-2xl flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
