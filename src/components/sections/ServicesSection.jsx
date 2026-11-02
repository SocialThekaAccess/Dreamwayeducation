import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Plane, Home, Briefcase, BookOpen, Heart, FileText, CreditCard, Globe, Users, Award } from "lucide-react";
import { services } from "../../data/services";

// Reliable Unsplash images — no dependency on external/WP servers
const serviceImages = {
  "service-study-abroad-chandigarh":            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
  "service-schooling-visa-chandigarh":          "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop",
  "service-permanent-residency-pr-chandigarh":  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  "service-tourist-visa-chandigarh":            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
  "service-business-visa-chandigarh":           "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
  "dependent-visa":                             "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
  "application-formalities":                   "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop",
  "visa-file-preparation":                     "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
  "travel-ticket-services":                    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
  "education-loan":                            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "scholarship-guidance":                      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
  "abroad-career-counselling":                 "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop",
  "post-landing-services":                     "https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=600&h=400&fit=crop",
};

const serviceConfig = {
  "service-study-abroad-chandigarh":           GraduationCap,
  "service-schooling-visa-chandigarh":         BookOpen,
  "service-permanent-residency-pr-chandigarh": Home,
  "service-tourist-visa-chandigarh":           Plane,
  "service-business-visa-chandigarh":          Briefcase,
  "dependent-visa":                            Heart,
  "application-formalities":                  FileText,
  "visa-file-preparation":                    FileText,
  "travel-ticket-services":                   Plane,
  "education-loan":                           CreditCard,
  "scholarship-guidance":                     Award,
  "abroad-career-counselling":                Users,
  "post-landing-services":                    Globe,
};

const stripHtml = (html) => html?.replace(/<[^>]*>/g, "").slice(0, 100) || "";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="section-title mt-2">Our Immigration Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive visa and immigration services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => {
            const Icon = serviceConfig[service.slug] || Globe;
            const imgUrl = serviceImages[service.slug];
            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <img
                    src={imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  {/* Fallback gradient icon */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <Icon size={64} className="text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-black text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {stripHtml(service.excerpt || service.content) || `Expert assistance for ${service.title} applications.`}
                  </p>
                  <div className="flex items-center gap-2 text-orange-500 font-bold text-sm border-t border-gray-100 pt-3 group-hover:gap-3 transition-all">
                    READ MORE <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-outline">View All Services</Link>
        </div>
      </div>
    </section>
  );
}
