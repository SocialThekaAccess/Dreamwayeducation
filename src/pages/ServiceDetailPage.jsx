import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { services } from "../data/services";
import { serviceContent } from "../data/serviceContent";
import CtaBanner from "../components/sections/CtaBanner";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const content = serviceContent[slug];
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-black mb-4">Service not found</h2>
          <Link to="/services" className="btn-primary">Back to Services</Link>
        </div>
      </div>
    );
  }

  const imgUrl = content?.image || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&h=550&fit=crop";

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-400 mb-4 flex items-center gap-1 flex-wrap">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <Link to="/services" className="hover:text-orange-400 transition-colors">Services</Link>
            <span>›</span>
            <span className="text-orange-400">{service.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3">{service.title}</h1>
          {content?.tagline && (
            <p className="text-orange-400 text-lg font-medium">{content.tagline}</p>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* ── Left / Main Column ── */}
            <div className="lg:col-span-2 space-y-12">

              {/* Hero Image */}
              <img
                src={imgUrl}
                alt={service.title}
                className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
              />

              {/* Description */}
              {content?.description && (
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed">{content.description}</p>
                </div>
              )}

              {/* Benefits */}
              {content?.benefits?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    Why Choose DreamWay for {service.title}?
                  </h2>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {content.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4">
                        <CheckCircle size={20} className="text-orange-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process Steps */}
              {content?.steps?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Our Step-by-Step Process</h2>
                  <div className="space-y-4">
                    {content.steps.map((step, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-sm shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {content?.faqs?.length > 0 && (
                <div>
                  <h2 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {content.faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >
                        <button
                          className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                          <span>{faq.q}</span>
                          {openFaq === i
                            ? <ChevronUp size={18} className="text-orange-500 shrink-0" />
                            : <ChevronDown size={18} className="text-gray-400 shrink-0" />
                          }
                        </button>
                        {openFaq === i && (
                          <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6">

              {/* Quick Contact Card */}
              <div className="bg-gray-900 text-white rounded-2xl p-6 sticky top-24">
                <h3 className="font-black text-lg mb-2">Get Free Consultation</h3>
                <p className="text-gray-400 text-sm mb-5">
                  Talk to our experts about your {service.title} requirements.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors mb-3"
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+917087772511"
                  className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-400 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Phone size={16} /> +91 7087772511
                </a>
              </div>

              {/* All Services List */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 mb-4">All Services</h3>
                <ul className="space-y-1">
                  {services.map((s) => (
                    <li key={s.id}>
                      <Link
                        to={`/services/${s.slug}`}
                        className={`flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm transition-colors ${
                          s.slug === slug
                            ? "bg-orange-500 text-white font-bold"
                            : "text-gray-600 hover:bg-orange-50 hover:text-orange-500"
                        }`}
                      >
                        <ArrowRight size={14} className="shrink-0" />
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info Box */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-orange-500 mb-1">98%</div>
                <div className="text-sm text-gray-600 font-medium">Visa Approval Rate</div>
                <div className="border-t border-orange-100 mt-4 pt-4">
                  <div className="text-4xl font-black text-orange-500 mb-1">12+</div>
                  <div className="text-sm text-gray-600 font-medium">Years of Experience</div>
                </div>
                <div className="border-t border-orange-100 mt-4 pt-4">
                  <div className="text-4xl font-black text-orange-500 mb-1">5000+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
