import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Plane, Home, Briefcase, BookOpen, Heart, FileText, CreditCard, Globe, Users, Award } from "lucide-react";
import { services } from "../../data/services";

const WP = "https://dreamwayeducation.com/wp-content/uploads/2023/05";

// Original site's actual service images
const serviceImages = {
  "service-study-abroad-chandigarh":            `https://www.meridean.org/assets/frontend/images/pages/student-visa/student-visas-for-study-abroad.webp`,
  "service-schooling-visa-chandigarh":          `${WP}/sb2.jpg`,
  "service-permanent-residency-pr-chandigarh":  `${WP}/sb3.jpg`,
  "service-tourist-visa-chandigarh":            `${WP}/sb4.jpg`,
  "service-business-visa-chandigarh":           `${WP}/sb5.jpg`,
  "dependent-visa":                             `${WP}/sb6.jpg`,
  "application-formalities":                   `${WP}/ser1.jpg`,
  "visa-file-preparation":                     `${WP}/ser2.jpg`,
  "travel-ticket-services":                    `${WP}/ser3.jpg`,
  "education-loan":                            `${WP}/serd1.jpg`,
  "scholarship-guidance":                      `${WP}/serl.jpg`,
  "abroad-career-counselling":                 `${WP}/serl-1.jpg`,
  "post-landing-services":                     `${WP}/sb1.jpg`,
};

const serviceConfig = {
  "service-study-abroad-chandigarh":   GraduationCap,
  "service-schooling-visa-chandigarh": BookOpen,
  "service-permanent-residency-pr-chandigarh": Home,
  "service-tourist-visa-chandigarh":   Plane,
  "service-business-visa-chandigarh":  Briefcase,
  "dependent-visa":                    Heart,
  "application-formalities":           FileText,
  "visa-file-preparation":             FileText,
  "travel-ticket-services":            Plane,
  "education-loan":                    CreditCard,
  "scholarship-guidance":              Award,
  "abroad-career-counselling":         Users,
  "post-landing-services":             Globe,
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
                {/* Image with icon overlay fallback */}
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  {imgUrl && (
                    <img
                      src={imgUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  )}
                  {/* Fallback gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 items-center justify-center"
                    style={{ display: imgUrl ? "none" : "flex" }}
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
