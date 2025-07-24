"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import axios from "axios";
import { useEffect, useState } from "react";

type FaqData = {
  id: number;
  documentId: string;
  Question: string;
  Answer: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export default function Faq() {
  const [faqData, setFaqData] = useState<FaqData[]>([]);

  const fetchFaqData = async () => {
    try {
      const response = await axios.get(
        "https://ambitious-desk-9046e01712.strapiapp.com/api/faqs"
      );
      setFaqData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFaqData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <div className="bg-white rounded-xl px-6 py-3">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FAQ
              </h1>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Pertanyaan paling sering ditanyakan Smarties, temukan jawaban kamu
            disini:
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
            defaultValue="item-1"
          >
            {faqData.map((faq, index) => {
              // Array warna yang berbeda
              const colors = [
                {
                  bg: "from-amber-50 to-orange-50",
                  border: "border-amber-100",
                  hover: "hover:bg-amber-100/50",
                  textHover: "hover:text-amber-700",
                  accent: "border-amber-400",
                },
                {
                  bg: "from-blue-50 to-cyan-50",
                  border: "border-blue-100",
                  hover: "hover:bg-blue-100/50",
                  textHover: "hover:text-blue-700",
                  accent: "border-blue-400",
                },
                {
                  bg: "from-green-50 to-emerald-50",
                  border: "border-green-100",
                  hover: "hover:bg-green-100/50",
                  textHover: "hover:text-green-700",
                  accent: "border-green-400",
                },
                {
                  bg: "from-purple-50 to-violet-50",
                  border: "border-purple-100",
                  hover: "hover:bg-purple-100/50",
                  textHover: "hover:text-purple-700",
                  accent: "border-purple-400",
                },
                {
                  bg: "from-pink-50 to-rose-50",
                  border: "border-pink-100",
                  hover: "hover:bg-pink-100/50",
                  textHover: "hover:text-pink-700",
                  accent: "border-pink-400",
                },
              ];

              // Gunakan modulo untuk cycling warna jika item lebih banyak dari warna
              const colorScheme = colors[index % colors.length];

              return (
                <AccordionItem
                  key={faq.id}
                  value={faq.id.toString()}
                  className={`border ${colorScheme.border} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${colorScheme.bg}`}
                >
                  <AccordionTrigger
                    className={`px-6 py-5 ${colorScheme.hover} transition-colors duration-200 text-left font-semibold text-gray-800 ${colorScheme.textHover}`}
                  >
                    {faq.Question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 pt-2">
                    <div
                      className={`bg-white/70 rounded-xl p-4 border-l-4 ${colorScheme.accent}`}
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.Answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
