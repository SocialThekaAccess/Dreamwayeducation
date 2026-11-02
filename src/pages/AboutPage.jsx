import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import CtaBanner from "../components/sections/CtaBanner";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Who We Are</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">About Dreamway Education</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your trusted immigration partner in Chandigarh — helping thousands settle abroad since 2012.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
            <div>
              <img
                src="https://dreamwayeducation.com/wp-content/uploads/2023/06/about.jpg"
                alt="About Dreamway"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
                onError={(e) => { e.target.src="https://dreamwayeducation.com/wp-content/uploads/2023/05/ab1.jpg"; }}
              />
            </div>
            <div>
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl font-black text-gray-900 mt-2 mb-5">We Are a Team of Dedicated Immigration Consultants</h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Dreamway Education Provider is one of the leading immigration consultancies in Chandigarh, India. We have been helping individuals and families achieve their dream of settling abroad since 2012.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                With a strong network, expert legal advice, and transparent processes, we ensure a smooth visa experience for every client. Our team of certified consultants handles student visas, PR, work permits, and more.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Certified Immigration Consultants",
                  "15,000+ Successful Visa Approvals",
                  "98% Visa Success Rate",
                  "12+ Years of Experience",
                  "Offices in Chandigarh",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle size={18} className="text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">Get Free Consultation</Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { num: "15,000+", label: "Visas Approved" },
              { num: "98%", label: "Success Rate" },
              { num: "20+", label: "Countries Covered" },
              { num: "12+", label: "Years Experience" },
            ].map((s) => (
              <div key={s.label} className="text-center bg-gray-50 rounded-2xl p-6">
                <div className="text-4xl font-black text-orange-500 mb-1">{s.num}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>


        </div>
      </section>

      <CtaBanner />
    </>
  );
}
