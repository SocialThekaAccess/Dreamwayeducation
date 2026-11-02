import FaqSection from "../components/sections/FaqSection";
import CtaBanner from "../components/sections/CtaBanner";

export default function FaqPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Help Center</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything you need to know about visa applications, immigration process, and our services.
          </p>
        </div>
      </section>
      <FaqSection />
      <CtaBanner />
    </>
  );
}
