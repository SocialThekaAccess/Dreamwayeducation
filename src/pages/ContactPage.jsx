import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 7087772511"],
    link: "tel:+917087772511",
    color: "bg-orange-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@dreamwayeducation.com"],
    link: "mailto:info@dreamwayeducation.com",
    color: "bg-gray-800",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["SCO 167, Top Floor,", "Sector 37C, Chandigarh", "India 160036"],
    link: "https://maps.google.com/?q=SCO+167+Sector+37C+Chandigarh",
    color: "bg-orange-500",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"],
    color: "bg-gray-800",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have questions about visa, PR or immigration? Our experts are here to help you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map(({ icon: Icon, title, lines, link, color }) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                {lines.map((line, i) => (
                  <p key={i} className="text-gray-500 text-sm">{line}</p>
                ))}
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-orange-500 text-sm font-semibold hover:underline">
                    {title === "Visit Us" ? "Get Directions →" : "Contact Now →"}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Form + Map grid */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-6">Fill in the form and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Our team will contact you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 btn-primary">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange} required
                      placeholder="your@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Service Interested In</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Study Visa</option>
                      <option>Tourist Visa</option>
                      <option>Business Visa</option>
                      <option>Permanent Residency (PR)</option>
                      <option>Dependent Visa</option>
                      <option>Work Permit</option>
                      <option>Education Loan</option>
                      <option>IELTS Coaching</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your requirements..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map + Info */}
            <div className="flex flex-col gap-6">
              {/* Google Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex-1 min-h-64">
                <iframe
                  title="Dreamway Education Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.78!3d30.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSCO+167+Sector+37C+Chandigarh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "300px" }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>

              {/* Quick info */}
              <div className="bg-gray-900 text-white rounded-2xl p-6">
                <h3 className="font-black text-lg mb-4">Why Choose Dreamway?</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    "✅ 12+ years of immigration expertise",
                    "✅ 15,000+ successful visa approvals",
                    "✅ 98% visa success rate",
                    "✅ Free initial consultation",
                    "✅ Transparent fees — no hidden charges",
                    "✅ Dedicated case manager for every client",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
