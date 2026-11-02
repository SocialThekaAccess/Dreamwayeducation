/**
 * Run this once to check which WordPress REST API endpoints are available.
 * Import and call checkAllEndpoints() from a component or browser console.
 */

const BASE = import.meta.env.DEV
  ? "/wp-json/wp/v2"
  : "https://dreamwayeducation.com/wp-json/wp/v2";

const endpoints = [
  { name: "Pages",        path: "/pages?per_page=5&_fields=id,title,slug" },
  { name: "Posts",        path: "/posts?per_page=5&_fields=id,title,slug" },
  { name: "Media",        path: "/media?per_page=5&_fields=id,source_url" },
  { name: "Services",     path: "/services?per_page=5&_fields=id,title,slug" },
  { name: "Testimonials", path: "/testimonials?per_page=5&_fields=id,title" },
  { name: "Teams",        path: "/teams?per_page=5&_fields=id,title,slug" },
  { name: "FAQs",         path: "/faqs?per_page=5&_fields=id,title" },
  { name: "Visa",         path: "/visa?per_page=5&_fields=id,title,slug" },
  { name: "Country",      path: "/country?per_page=5&_fields=id,title,slug" },
  { name: "Jobs",         path: "/jobs?per_page=5&_fields=id,title,slug" },
  { name: "GBoost Portfolio", path: "/gboost-portfolio?per_page=5&_fields=id,title,slug" },
];

export const checkAllEndpoints = async () => {
  console.log("🔍 Checking WordPress REST API endpoints...\n");
  const results = [];

  for (const ep of endpoints) {
    try {
      const res = await fetch(`${BASE}${ep.path}`);
      const data = await res.json();
      const status = res.ok ? "✅ OK" : `❌ ${res.status}`;
      const count = Array.isArray(data) ? `(${data.length} items)` : "";
      console.log(`${status} ${ep.name} ${count}`);
      results.push({ name: ep.name, status: res.status, ok: res.ok, count: Array.isArray(data) ? data.length : 0 });
    } catch (err) {
      console.log(`❌ ${ep.name} → ${err.message}`);
      results.push({ name: ep.name, status: "error", ok: false, error: err.message });
    }
  }

  console.log("\n📊 Summary:", results);
  return results;
};
