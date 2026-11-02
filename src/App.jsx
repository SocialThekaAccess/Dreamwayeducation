import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages
import HomePage          from "./pages/HomePage";
import AboutPage         from "./pages/AboutPage";
import ServicesPage      from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import VisaPage          from "./pages/VisaPage";
import CountriesPage     from "./pages/CountriesPage";
import TestimonialsPage  from "./pages/TestimonialsPage";
import FaqPage           from "./pages/FaqPage";
import JobsPage          from "./pages/JobsPage";
import ContactPage       from "./pages/ContactPage";
import NotFoundPage      from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/services"       element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/visa"           element={<VisaPage />} />
          <Route path="/visa/:slug"     element={<VisaPage />} />
          <Route path="/countries"      element={<CountriesPage />} />
          <Route path="/testimonials"   element={<TestimonialsPage />} />
          <Route path="/faq"            element={<FaqPage />} />
          <Route path="/jobs"           element={<JobsPage />} />
          <Route path="/contact"        element={<ContactPage />} />
          <Route path="*"              element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
