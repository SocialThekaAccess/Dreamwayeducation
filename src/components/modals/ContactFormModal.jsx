import { useState } from "react";
import { X } from "lucide-react";

export default function ContactFormModal({ isOpen, onClose }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(e.target);
    formData.append("access_key", "35955d3c-cf39-457c-8cd2-89eab5df6bac");
    formData.append("subject", "New Free Consultation Request - Dreamway Education");
    formData.append("from_name", "Dreamway Education Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setResult("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-center rounded-t-2xl">
          <h2 className="text-xl md:text-2xl font-black text-white">
            Get Free Consultation!
          </h2>
        </div>

        {submitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500 text-sm mb-5">We've received your request. Our team will contact you within 24 hours.</p>
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2.5 px-6 text-sm rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Your full name"
              />
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Phone number"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Country & Visa Type */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Country Interested</label>
                <select
                  name="country"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select Country</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="USA">USA</option>
                  <option value="Europe">Europe</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Visa Type</label>
                <select
                  name="visaType"
                  required
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>Select Visa Type</option>
                  <option value="Study Visa">Study Visa</option>
                  <option value="Schooling Visa">Schooling Visa</option>
                  <option value="Visitor Visa">Visitor Visa</option>
                  <option value="Tourist Visa">Tourist Visa</option>
                  <option value="Dependent Visa">Dependent Visa</option>
                  <option value="Business Visa">Business Visa</option>
                  <option value="PR">PR</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            {result && (
              <p className="text-red-500 text-xs text-center">{result}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2.5 text-sm rounded-lg transition-all shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
