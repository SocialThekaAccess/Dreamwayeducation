import { useState } from "react";
import { X } from "lucide-react";

export default function ContactFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    visaType: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header - Smaller */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-center rounded-t-2xl">
          <h2 className="text-xl md:text-2xl font-black text-white">
            Get Free Consultation!
          </h2>
        </div>

        {/* Form - Compact */}
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          {/* Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
                value={formData.phone}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
              >
                <option value="">Select Country</option>
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
              <label className="block text-xs font-semibold text-gray-700 mb-1">Visa Types</label>
              <select
                name="visaType"
                value={formData.visaType}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
              >
                <option value="">Select Visa Type</option>
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

          {/* Message - 2 rows only */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
              placeholder="Tell us about your requirements..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2.5 text-sm rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
