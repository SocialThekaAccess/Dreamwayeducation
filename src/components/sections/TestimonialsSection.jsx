import { Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { useEffect, useState } from "react";

const stripHtml = (html) => html?.replace(/<[^>]*>/g, "").trim() || "";
const unique = testimonials.filter((t, i, arr) => arr.findIndex((x) => x.title === t.title) === i);

const fallback = [
  { id: "t1", title: "Ravi Sharma", content: "Excellent service! The team was very professional and helped me get my Canada PR approved. Highly recommended to anyone looking to settle abroad.", role: "Canada PR" },
  { id: "t2", title: "Priya Singh", content: "Got my UK student visa without any hassle. The team guided me through every step from university selection to visa interview. Amazing experience!", role: "UK Student Visa" },
  { id: "t3", title: "Gurpreet Kaur", content: "Dreamway Education is the best immigration consultancy in Chandigarh. They helped my entire family with our Australia PR. Very transparent process.", role: "Australia PR" },
];

const displayData = unique.length >= 3 ? unique : fallback;

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayData.length);
    }, 3000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Get 3 testimonials to display
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % displayData.length;
      result.push(displayData[index]);
    }
    return result;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-widest">Client Reviews</span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Thousands of happy clients have trusted us with their visa journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, idx) => {
            const content = stripHtml(t.content || "");
            return (
              <div 
                key={`${t.id}-${currentIndex}-${idx}`} 
                className="bg-gray-800 border border-gray-700 rounded-2xl p-6 transition-all duration-500 animate-fadeIn"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5 italic">
                  "{content || "Excellent service! The team was very professional and helped me get my visa approved quickly. Highly recommended!"}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-black text-white text-sm">
                    {t.title?.charAt(0) || "C"}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{t.title}</div>
                    <div className="text-orange-400 text-xs">{t.role || "Verified Client"}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
