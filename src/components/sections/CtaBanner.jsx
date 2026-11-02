import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-16 bg-orange-500 text-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Ready to Start Your Immigration Journey?
        </h2>
        <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
          Book a free consultation with our experts today. We'll assess your profile and guide you through the best visa pathway.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-white text-orange-500 hover:bg-gray-100 font-black px-8 py-4 rounded-xl transition-colors flex items-center gap-2">
            Book Free Consultation <ArrowRight size={18} />
          </Link>
          <a href="tel:+917087772511" className="border-2 border-white text-white hover:bg-white hover:text-orange-500 font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-2">
            <Phone size={18} /> +91 7087772511
          </a>
        </div>
      </div>
    </section>
  );
}
