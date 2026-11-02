// WordPress REST API Base URL
// In dev: uses Vite proxy (/wp-json → dreamwayeducation.com) to bypass CORS
// In prod: uses full URL via env variable
const WP_API_BASE =
  import.meta.env.DEV
    ? "/wp-json/wp/v2"
    : (import.meta.env.VITE_WP_API_BASE || "https://dreamwayeducation.com/wp-json/wp/v2");

// Generic fetch helper
const fetchFromWP = async (endpoint, params = {}) => {
  const queryString = new URLSearchParams(params).toString();
  const url = `${WP_API_BASE}${endpoint}${queryString ? `?${queryString}` : ""}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`WordPress API error: ${response.status} on ${url}`);
  }
  return response.json();
};

// ─── Pages ───────────────────────────────────────────────
export const fetchPages = () =>
  fetchFromWP("/pages", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,slug,content,excerpt,featured_media,acf",
  });

export const fetchPageBySlug = (slug) =>
  fetchFromWP("/pages", {
    slug,
    _fields: "id,title,slug,content,excerpt,featured_media,acf",
  });

// ─── Posts / Blog ─────────────────────────────────────────
export const fetchPosts = (page = 1, perPage = 10) =>
  fetchFromWP("/posts", {
    page,
    per_page: perPage,
    status: "publish",
    _fields: "id,title,slug,content,excerpt,date,featured_media,categories,tags",
  });

export const fetchPostBySlug = (slug) =>
  fetchFromWP("/posts", {
    slug,
    _fields: "id,title,slug,content,excerpt,date,featured_media",
  });

// ─── Media / Images ───────────────────────────────────────
export const fetchMedia = (id) =>
  fetchFromWP(`/media/${id}`, {
    _fields: "id,source_url,alt_text,title",
  });

// ─── Custom Post Types ────────────────────────────────────
// Services
export const fetchServices = () =>
  fetchFromWP("/services", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,slug,content,excerpt,featured_media,acf",
  });

// Testimonials
export const fetchTestimonials = () =>
  fetchFromWP("/testimonials", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,content,acf",
  });

// Team Members
export const fetchTeam = () =>
  fetchFromWP("/teams", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,slug,content,featured_media,acf",
  });

// FAQs
export const fetchFaqs = () =>
  fetchFromWP("/faqs", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,content,acf",
  });

// Visa Types
export const fetchVisaTypes = () =>
  fetchFromWP("/visa", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,slug,content,excerpt,featured_media,acf",
  });

// Countries
export const fetchCountries = () =>
  fetchFromWP("/country", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,slug,content,excerpt,featured_media,acf",
  });

// Jobs
export const fetchJobs = () =>
  fetchFromWP("/jobs", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,slug,content,excerpt,acf",
  });

// Projects / GBoost Portfolio
export const fetchProjects = () =>
  fetchFromWP("/gboost-portfolio", {
    per_page: 100,
    status: "publish",
    _fields: "id,title,slug,content,excerpt,featured_media,acf",
  });

// ─── Menus (requires WP REST API Menus plugin) ────────────
export const fetchMenus = () =>
  fetch(`https://dreamwayeducation.com/wp-json/wp/v2/menus`)
    .then((r) => r.json())
    .catch(() => null);

export default fetchFromWP;
