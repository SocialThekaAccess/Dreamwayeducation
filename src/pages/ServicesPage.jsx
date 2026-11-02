import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Plane, Home, Briefcase, BookOpen, Heart, FileText, CreditCard, Globe, Users, Award } from "lucide-react";
import { services } from "../data/services";
import { serviceContent } from "../data/serviceContent";
import CtaBanner from "../components/sections/CtaBanner";

const iconMap = {
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

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">What We Offer</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Our Immigration Services</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive visa and immigration services tailored to your needs — from student visas to permanent residency.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.slug] || Globe;
              const content = serviceContent[service.slug];
              const tagline = content?.tagline || "";
              const imgUrl = content?.image || null;

              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image / Icon */}
                  <div className="h-48 overflow-hidden relative bg-gray-100">
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                    ) : null}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 items-center justify-center"
                      style={{ display: imgUrl ? "none" : "flex" }}
                    >
                      <Icon size={64} className="text-white/80" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-black text-gray-900 text-lg mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    {tagline && (
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{tagline}</p>
                    )}
                    <div className="flex items-center gap-2 text-orange-500 font-bold text-sm border-t border-gray-100 pt-3 group-hover:gap-3 transition-all">
                      READ MORE <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
