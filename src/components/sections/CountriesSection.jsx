import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// flagcdn.com — free, reliable, no API key needed
// Format: https://flagcdn.com/w160/{country-code}.png
const countries = [
  { name: "Canada",         code: "ca", desc: "PR • Study • Work" },
  { name: "Australia",      code: "au", desc: "PR • Study • Skilled" },
  { name: "United Kingdom", code: "gb", desc: "Study • Work • Visit" },
  { name: "USA",            code: "us", desc: "B1/B2 • F1 • H1B" },
  { name: "Germany",        code: "de", desc: "Job Seeker • Study" },
  { name: "New Zealand",    code: "nz", desc: "PR • Study • Work" },
  { name: "Schengen / EU",  code: "eu", desc: "Tourist • Business" },
  { name: "Dubai / UAE",    code: "ae", desc: "Visit • Work" },
]; 

export default function CountriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Explore Destinations
          </span>
          <h2 className="section-title mt-2">Top Countries We Cover</h2>
          <p className="section-subtitle mx-auto">
            We provide expert visa assistance for all major study and immigration destinations worldwide.
          </p>
        </div>

        {/* Country cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-10">
          {countries.map((c) => (
            <Link
              key={c.name}
              to="/countries"
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              {/* Flag image */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-110 group-hover:border-orange-400 transition-all duration-300">
                <img
                  src={`https://flagcdn.com/w160/${c.code}.png`}
                  alt={`${c.name} flag`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.classList.add("bg-gray-200", "flex", "items-center", "justify-center");
                    e.target.parentElement.innerHTML = `<span class="text-2xl">${c.name.charAt(0)}</span>`;
                  }}
                />
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900 text-sm group-hover:text-orange-500 transition-colors leading-tight">
                  {c.name}
                </div>
                <div className="text-gray-400 text-xs mt-0.5">{c.desc}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats bar */}
        <div className="bg-gray-900 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
          {[
            { num: "20+",  label: "Countries Covered" },
            { num: "15K+", label: "Visas Approved" },
            { num: "98%",  label: "Success Rate" },
            { num: "12+",  label: "Years Experience" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-orange-500">{s.num}</div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/countries" className="btn-primary inline-flex items-center gap-2">
            Explore All Countries <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
