import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { visa } from "../data/visa";
import CtaBanner from "../components/sections/CtaBanner";

const visaImages = {
  "study-visa": "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
  "schooling-visa": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
  "visitor-visa": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=280&fit=crop",
  "tourist-visa": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=280&fit=crop",
  "dependent-visa": "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=280&fit=crop",
  "business-visa": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=280&fit=crop",
  "permanent-residency": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
};
const defaultImg = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=280&fit=crop";
const stripHtml = (html) => html?.replace(/<[^>]*>/g, "").slice(0, 90) || "";

export default function VisaPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Immigration Services</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Visa Types</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Explore all visa categories we handle — from student visas to work permits and permanent residency.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visa.map((v) => (
              <Link key={v.id} to={`/visa/${v.slug}`} className="group block bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden h-52">
                  <img src={visaImages[v.slug] || defaultImg} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{stripHtml(v.excerpt || v.content)}</p>
                  <div className="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-3 transition-all">
                    READ MORE <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
