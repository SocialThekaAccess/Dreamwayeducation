import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { jobs } from "../data/jobs";
import CtaBanner from "../components/sections/CtaBanner";

const stripHtml = (html) => html?.replace(/<[^>]*>/g, "").slice(0, 150) || "";

export default function JobsPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-widest">Careers</span>
          <h1 className="text-4xl md:text-5xl font-black mt-3 mb-4">Job Openings</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Join Chandigarh's leading immigration consultancy. We're looking for passionate people.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          {jobs.length > 0 ? (
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="card border border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                      <Briefcase size={22} className="text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-lg mb-1">{job.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">{stripHtml(job.excerpt || job.content)}</p>
                      <div className="flex flex-wrap gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><MapPin size={12} /> Chandigarh, India</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> Full Time</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/contact" className="btn-primary shrink-0 text-sm py-2.5 px-5">Apply Now</Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Briefcase size={56} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-black text-gray-900 mb-2">No Openings Right Now</h3>
              <p className="text-gray-500 mb-6">We don't have any open positions at the moment. Send us your CV anyway!</p>
              <Link to="/contact" className="btn-primary">Send Your CV</Link>
            </div>
          )}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
