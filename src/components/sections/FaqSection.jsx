import { useState } from "react";
import { ChevronRight, ChevronDown, Diamond } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "How Can I Book a Free Immigration Consultation?",
    answer: "You can schedule a free consultation by filling out our online inquiry form or contacting our support team. Our experts will review your profile and guide you on the best visa or study options.",
  },
  {
    id: 2,
    question: "Which Country Is Best for Immigration or Study Abroad?",
    answer: "The ideal country depends on your education, work experience, and long-term goals. Canada, Australia, the UK, and European countries are among the most popular choices. Our advisors help you choose the right destination.",
  },
  {
    id: 3,
    question: "What Are the Requirements for a Study Visa?",
    answer: "Requirements vary by country, but typically include a valid passport, university/college acceptance letter, proof of financial funds, academic transcripts, language test scores (IELTS/PTE/TOEFL), and a Statement of Purpose (SOP).",
  },
  {
    id: 4,
    question: "How Long Does the Visa Processing Take?",
    answer: "Processing times vary by visa type and country. Tourist visas typically take 1–3 weeks, student visas 4–8 weeks, and PR applications can take 6–12 months. We provide realistic timelines during your free consultation.",
  },
  {
    id: 5,
    question: "Can You Help With Tourist or Visitor Visas?",
    answer: "Yes! We assist with tourist and visitor visa applications for Canada, Australia, UK, USA, Schengen countries, Dubai, and more. Our team ensures all documentation is correct for maximum approval chances.",
  },
  {
    id: 6,
    question: "What Documents Are Required for Visa Application?",
    answer: "Typically: valid passport, recent photographs, bank statements, employment proof, invitation letter (if applicable), travel history, and filled application forms. Our consultants provide a complete checklist specific to your visa type.",
  },
  {
    id: 7,
    question: "What Is Your Visa Success Rate?",
    answer: "We maintain a 98% visa success rate backed by 12+ years of experience and 15,000+ approvals. Our thorough document review and preparation process significantly minimizes rejection risks.",
  },
  {
    id: 8,
    question: "Do You Offer IELTS / PTE Coaching?",
    answer: "Yes! We offer expert IELTS, PTE, and TOEFL coaching with experienced trainers. Both regular and weekend batches are available, along with online classes to fit your schedule.",
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-orange-500 font-bold mb-3">
            <span className="text-xl">»</span>
            <span className="uppercase tracking-widest text-sm">FAQ</span>
            <span className="text-xl">«</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Frequently Asked Any Questions
          </h2>
          <p className="text-gray-500">Everything You Need to Know About Immigration &amp; Study Abroad</p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqData.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.id} className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${
                    isOpen ? "bg-orange-500 text-white" : "bg-white text-gray-900 hover:bg-orange-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Diamond
                      size={14}
                      className={`shrink-0 fill-current ${isOpen ? "text-white" : "text-orange-500"}`}
                    />
                    <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown size={20} className="text-white shrink-0" />
                  ) : (
                    <ChevronRight size={20} className="text-gray-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="bg-orange-50 px-5 py-4 border-t border-orange-100">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
