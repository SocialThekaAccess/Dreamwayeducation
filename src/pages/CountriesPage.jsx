import { Link } from "react-router-dom";
import CtaBanner from "../components/sections/CtaBanner";

const WP = "https://dreamwayeducation.com/wp-content/uploads/2023/05";

const countries = [
  { name: "Canada",         code: "ca", desc: "PR • Study • Work Permit",       img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800", detail: "Canada is one of the top immigration destinations. We assist with Express Entry, PNP, Student Visa, and Work Permits." },
  { name: "Australia",      code: "au", desc: "PR • Study • Skilled Migration",  img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800", detail: "Australia offers multiple skilled migration pathways. We help with subclass 189, 190, 485, and Student visas." },
  { name: "United Kingdom", code: "gb", desc: "Study • Work • Visit",            img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800", detail: "The UK offers world-class education and work opportunities. We assist with Student, Skilled Worker, and Visitor visas." },
  { name: "USA",            code: "us", desc: "B1/B2 • F1 Student • H1B",       img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800", detail: "We assist with US Tourist (B1/B2), Student (F1), and other non-immigrant visa applications." },
  { name: "Germany",        code: "de", desc: "Job Seeker • Study • Work",       img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800", detail: "Germany's Job Seeker visa and Blue Card are popular options. We guide you through the entire process." },
  { name: "New Zealand",    code: "nz", desc: "PR • Study • Work",              img: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800", detail: "New Zealand offers excellent quality of life. We assist with Skilled Migrant, Student, and Work visas." },
  { name: "Schengen / Europe", code: "eu", desc: "Tourist • Business • Study",  img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800", detail: "Planning a European trip? We assist with Schengen tourist and business visa applications." },
  { name: "Dubai / UAE",    code: "ae", desc: "Visit • Work • Business",         img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800", detail: "UAE offers great work and business opportunities. We handle tourist and employment visa applications." },
  { name: "Singapore",      code: "sg", desc: "Visit • Work • Study",            img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800", detail: "Singapore is a top Asian destination for work and education. We assist with EP, S Pass, and Student passes." },
];

export default function CountriesPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Destinations</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Countries We Cover</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Expert visa and immigration services for all major destinations worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map((c) => (
              <div key={c.name} className="card border border-gray-100 overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                {/* Country image banner */}
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.parentElement.classList.add("bg-gray-200"); e.target.remove(); }}
                  />
                  {/* Flag overlay */}
                  <div className="absolute bottom-3 left-3">
                    <img src={`https://flagcdn.com/w80/${c.code}.png`} alt="" className="h-6 rounded shadow" onError={(e) => e.target.remove()} />
                  </div>
                </div>
                <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <h3 className="font-black text-gray-900 text-lg group-hover:text-orange-500 transition-colors">{c.name}</h3>
                    <p className="text-orange-500 text-xs font-semibold">{c.desc}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{c.detail}</p>
                <Link to="/contact" className="text-orange-500 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Get Visa Help →
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
