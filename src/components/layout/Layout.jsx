import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WHATSAPP_NUMBER = "917087772511"; // country code + number, no +

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20visa%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: "#25D366" }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="30"
          height="30"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16.003 2C8.281 2 2 8.281 2 16.003c0 2.478.65 4.897 1.885 7.02L2 30l7.197-1.857A13.946 13.946 0 0 0 16.003 30C23.719 30 30 23.719 30 16.003 30 8.281 23.719 2 16.003 2zm0 25.457a11.4 11.4 0 0 1-5.812-1.593l-.416-.247-4.272 1.101 1.13-4.148-.272-.427A11.418 11.418 0 0 1 4.544 16c0-6.318 5.141-11.457 11.459-11.457S27.46 9.685 27.46 16.003c0 6.317-5.138 11.454-11.457 11.454zm6.284-8.576c-.344-.172-2.036-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.229.344-.889 1.118-1.09 1.348-.2.23-.401.258-.745.086-.344-.172-1.453-.536-2.767-1.707-1.023-.912-1.713-2.038-1.914-2.382-.2-.344-.021-.53.151-.701.155-.155.344-.401.516-.602.172-.2.229-.344.344-.573.115-.229.057-.43-.029-.602-.086-.172-.776-1.872-1.063-2.562-.28-.672-.564-.581-.776-.592l-.66-.011c-.23 0-.602.086-.917.43-.315.344-1.205 1.176-1.205 2.868s1.233 3.327 1.405 3.556c.172.229 2.428 3.707 5.882 5.198.823.355 1.465.567 1.966.727.826.263 1.578.226 2.172.137.663-.099 2.036-.832 2.323-1.636.287-.803.287-1.491.2-1.636-.085-.143-.315-.229-.659-.401z" />
        </svg>
      </a>
    </div>
  );
}
