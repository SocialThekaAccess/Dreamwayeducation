import { ShieldCheck, Clock, Users, Award, Headset, Globe } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "98% Success Rate", desc: "Meticulous document preparation and expert guidance ensures highest visa approval rates." },
  { icon: Clock, title: "Fast Processing", desc: "Application submitted correctly the first time — reducing delays and processing time." },
  { icon: Users, title: "Expert Consultants", desc: "Certified immigration lawyers and consultants with 12+ years of experience." },
  { icon: Award, title: "15,000+ Approvals", desc: "Proven track record with thousands of successful visa approvals across all categories." },
  { icon: Headset, title: "24/7 Support", desc: "Always available to answer your questions and provide updates on your application." },
  { icon: Globe, title: "20+ Countries", desc: "Comprehensive visa services covering all major immigration destinations worldwide." },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="section-title mt-2">The Dreamway Advantage</h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              We combine expertise, transparency, and dedication to make your immigration
              journey smooth and successful. Trusted by thousands of families in Chandigarh.
            </p>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">98%</div>
                <div className="text-sm text-gray-500 mt-1">Success Rate</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">15K+</div>
                <div className="text-sm text-gray-500 mt-1">Visas Approved</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-4xl font-black text-orange-500">12+</div>
                <div className="text-sm text-gray-500 mt-1">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 rounded-xl hover:bg-orange-50 transition-colors group">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors">
                  <Icon size={18} className="text-orange-500 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
