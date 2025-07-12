import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
            <div className="bg-white rounded-xl px-6 py-3">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FAQ about Us
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
            <AccordionItem
              value="item-1"
              className="border border-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-blue-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-blue-700">
                Q: Bimbingan ini tuh khusus mahasiswaja aja ya kak?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-blue-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Betul, smartnerdies merupakan bimbingan belajar mahasiswa
                    yang bisa kasih kamu insight baru perihal perkulian sampe
                    tugas akhir
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-purple-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-50 to-pink-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-purple-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-purple-700">
                Q: Bimbingan Smartnerdies dapet apa aja?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-purple-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Fasilitas lengkap dan nyaman, tutor berpengalaman, materi
                    up to date.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-green-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-green-50 to-emerald-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-green-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-green-700">
                Q: Tutor smartnerdies bisa ngembimbing mahasiswa jurusan apa
                aja?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-green-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Tutor smartnerdies berasal dari berbagai jurusan jadi
                    kami siap membimbing kamu dari segala jurusan baik golongan
                    soshum maupun saintek.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-orange-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-orange-50 to-yellow-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-orange-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-orange-700">
                Q: Boleh tau durasi bimbingan bareng Smartnerdies?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-orange-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Dalam satu sesi bimbingan offline maupun online bareng
                    smartnerdies biasanya antara 1-2 jam tanpa ada biaya
                    tambahan.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-teal-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-teal-50 to-cyan-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-teal-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-teal-700">
                Q: Aku mau bimbingan, tapi bisa gak ya ketemu langsung?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-teal-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Bisa banget! Smartnerdies punya program bimbingan online
                    maupun offline yang bisa kamu tanyain lebih lanjut ke para
                    admin saat mau booking!
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-rose-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-rose-50 to-pink-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-rose-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-rose-700">
                Q: Bisa bawa temen ngga ya kak?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-rose-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Bisa banget! Yuk ajak temen kamu bimbingan juga dengan
                    harga berlaku kelipatan yaa ^^
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-7"
              className="border border-violet-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-violet-50 to-purple-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-violet-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-violet-700">
                Q: Harga bimbingan Smartnerdies berapa?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-violet-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Harga bimbingan belajar bareng Smartnerdies beragam nih.
                    Bimbingan online mulai dari 150k/sesi dan bimbingan offline
                    mulai dari 300k/sesi
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-8"
              className="border border-indigo-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-indigo-50 to-blue-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-indigo-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-indigo-700">
                Q: Bisa milih gender tutor ngga?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-indigo-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Bisa selama kuota bersama tutor terkait available
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-9"
              className="border border-emerald-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-emerald-50 to-green-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-emerald-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-emerald-700">
                Q: Bisa milih jadwal bimbingan?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-emerald-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Smartnerdies punya jadwal fleksibel yang bisa disesuaikan
                    sama jadwal kamu!
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-10"
              className="border border-amber-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-amber-50 to-orange-50"
            >
              <AccordionTrigger className="px-6 py-5 hover:bg-amber-100/50 transition-colors duration-200 text-left font-semibold text-gray-800 hover:text-amber-700">
                Q: Aku mau bimbingan, gimana caranya?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-2">
                <div className="bg-white/70 rounded-xl p-4 border-l-4 border-amber-400">
                  <p className="text-gray-700 leading-relaxed">
                    A: Langsung hubungi admin 1-4 ya
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
