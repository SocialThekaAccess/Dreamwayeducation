import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import heroImg from "../../assets/hero.png";

const stats = [
  { number: "15,000+", label: "Visas Approved" },
  { number: "98%",     label: "Success Rate" },
  { number: "20+",     label: "Countries" },
  { number: "12+",     label: "Years Exp." },
];

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={heroImg}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          onError={(e) => e.target.remove()}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 rounded-full opacity-10 blur-3xl translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-700 rounded-full opacity-10 blur-3xl -translate-x-1/4 translate-y-1/4" />
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Left ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold px-4 py-2 rounded-full mb-7 uppercase tracking-widest">
              <Star size={12} className="fill-orange-400" />
              Best Visa Consultants in Chandigarh
            </div>

            <h1 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6">
              Your Trusted <br />
              <span className="text-orange-500">Immigration</span><br />
              Partner
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
              Settle abroad with hassle-free solutions. Get expert guidance on visas, PR, and study abroad programs from Chandigarh's most trusted consultants.
            </p>

            <ul className="flex flex-col gap-2.5 mb-9">
              {["Free Initial Consultation", "Expert Immigration Lawyers", "Transparent & Fast Process"].map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-gray-300 text-sm">
                  <CheckCircle size={17} className="text-orange-500 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/25 flex items-center gap-2 text-base"
              >
                CONTACT US <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+917087772511"
                className="border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-semibold px-8 py-4 rounded-xl transition-all flex items-center gap-2 text-sm"
              >
                <Phone size={17} /> +91 7087772511
              </a>
            </div>
          </div>

          {/* ── Right — Stat cards ── */}
          <div className="hidden md:flex flex-col gap-4">
            {/* Main card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-7">
              <h3 className="text-white font-black text-xl mb-5 flex items-center gap-2">
                🏆 Our Track Record
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={`rounded-xl p-4 text-center ${i === 0 ? "bg-orange-500" : "bg-white/10"}`}
                  >
                    <div className={`text-3xl font-black mb-1 ${i === 0 ? "text-white" : "text-orange-400"}`}>
                      {s.number}
                    </div>
                    <div className={`text-xs font-medium ${i === 0 ? "text-orange-100" : "text-gray-400"}`}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA card */}
            <div className="bg-orange-500 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <div className="font-black text-white text-base">Book Free Consultation</div>
                <div className="text-orange-100 text-xs mt-0.5">No charges — 100% free assessment</div>
              </div>
              <Link
                to="/contact"
                className="bg-white text-orange-500 font-black text-sm px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors shrink-0 ml-4"
              >
                Book Now →
              </Link>
            </div>

            {/* Countries strip */}
            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3 flex-wrap">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider shrink-0">We cover:</span>
              {[
                { flag: "CA", name: "Canada" },
                { flag: "AU", name: "Australia" },
                { flag: "GB", name: "UK" },
                { flag: "US", name: "USA" },
                { flag: "DE", name: "Germany" },
                { flag: "NZ", name: "NZ" }
              ].map((country) => (
                <span 
                  key={country.flag} 
                  className="text-gray-300 text-sm bg-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 hover:bg-white/20 transition-colors"
                >
                  <img 
                    src={`https://flagcdn.com/16x12/${country.flag.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/32x24/${country.flag.toLowerCase()}.png 2x, https://flagcdn.com/48x36/${country.flag.toLowerCase()}.png 3x`}
                    width="16"
                    height="12"
                    alt={country.name}
                    className="inline-block"
                  />
                  <span className="font-medium">{country.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
