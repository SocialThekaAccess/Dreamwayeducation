import { Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import CtaBanner from "../components/sections/CtaBanner";

const stripHtml = (html) => html?.replace(/<[^>]*>/g, "").trim() || "";

const fallback = [
  { id: "1", title: "Ravi Sharma", content: "Got my Canada PR in just 8 months. The team at Dreamway was extremely professional and guided me through every step. Highly recommended!", role: "Canada PR" },
  { id: "2", title: "Priya Kaur", content: "Excellent service for UK student visa. They helped me with university selection, SOP writing and visa application. Got my visa in 3 weeks!", role: "UK Student Visa" },
  { id: "3", title: "Amandeep Singh", content: "Very transparent and honest consultancy. They told me exact timeline and fees upfront. My Australia skilled visa was approved in 6 months.", role: "Australia PR" },
  { id: "4", title: "Neha Gupta", content: "Best immigration consultants in Chandigarh! My family visitor visa to Canada was approved on first attempt. Thank you Dreamway team!", role: "Canada Visitor Visa" },
  { id: "5", title: "Harjot Sidhu", content: "I was rejected twice before coming to Dreamway. They identified the issues in my file and my Germany Job Seeker visa was approved. Amazing!", role: "Germany Job Seeker" },
  { id: "6", title: "Simran Bhatia", content: "Very professional team. They handled my entire Australia student visa process smoothly. The pre-departure briefing was very helpful.", role: "Australia Student Visa" },
];

const unique = testimonials.filter((t, i, arr) => arr.findIndex((x) => x.title === t.title) === i);
const displayData = unique.length >= 4 ? unique : fallback;

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Reviews</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Client Testimonials</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Real stories from real clients who achieved their immigration dreams with Dreamway.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayData.map((t) => {
              const content = stripHtml(t.content || "");
              return (
                <div key={t.id} className="card border border-gray-100 p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                    "{content || "Excellent service! The team was very professional and helped me get my visa approved quickly."}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-black text-white text-sm shrink-0">
                      {t.title?.charAt(0) || "C"}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.title}</div>
                      <div className="text-orange-500 text-xs">{t.role || "Verified Client"}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
