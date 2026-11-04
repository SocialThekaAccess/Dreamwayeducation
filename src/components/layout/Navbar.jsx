import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Mail, MapPin } from "lucide-react";
import logo from "../../assets/images/DreamWaylogo.webp";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Student Visa", path: "/services/service-study-abroad-chandigarh" },
      { label: "Scholing Visa", path: "/services/service-schooling-visa-chandigarh" },
      { label: "Visitor Visa", path: "/services/visitor-visa" },
      { label: "Tourist Visa", path: "/services/service-tourist-visa-chandigarh" },
      { label: "Business Visa", path: "/services/service-business-visa-chandigarh" },
      { label: "Dependent Visa", path: "/services/dependent-visa" },
      { label: "PR", path: "/services/service-permanent-residency-pr-chandigarh" },
    ],
  },
  { label: "Visa", path: "/visa" },
  { label: "Countries", path: "/countries" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-orange-500 text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail size={12} /> info@dreamwayeducation.com
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={12} /> SCO 167, Top Floor, Sector 37C, Chandigarh
            </span>
          </div>
          <span className="font-semibold">📞 +91 7087772511</span>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="bg-white text-gray-900 shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logo} alt="Dreamway Education" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? "text-orange-500"
                        : "text-gray-700 hover:text-orange-500"
                    }`
                  }
                >
                  {link.label}
                  {link.children && <ChevronDown size={13} />}
                </NavLink>

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <ul className="absolute top-full left-0 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-56 z-50">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Book Free Consultant »
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white px-4 pb-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <div key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 border-b border-gray-100 font-medium text-sm ${
                      isActive ? "text-orange-500" : "text-gray-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
                {link.children && (
                  <div className="pl-4 bg-gray-50">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2 text-sm text-gray-500 hover:text-orange-500 border-b border-gray-100"
                      >
                        › {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary block text-center mt-4 text-sm justify-center"
            >
              Book Free Consultant
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
