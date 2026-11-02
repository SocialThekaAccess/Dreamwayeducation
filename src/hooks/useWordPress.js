import { useEffect, useState } from "react";
import {
  fetchPages,
  fetchPosts,
  fetchServices,
  fetchTestimonials,
  fetchTeam,
  fetchFaqs,
  fetchVisaTypes,
  fetchCountries,
  fetchJobs,
  fetchProjects,
  fetchPageBySlug,
  fetchPostBySlug,
} from "../utils/api";

// Generic hook factory
const useWPData = (fetcher, deps = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetcher()
      .then((res) => setData(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
};

// ─── Individual hooks ─────────────────────────────────────

export const usePages = () => useWPData(fetchPages);

export const usePosts = (page = 1) =>
  useWPData(() => fetchPosts(page), [page]);

export const useServices = () => useWPData(fetchServices);

export const useTestimonials = () => useWPData(fetchTestimonials);

export const useTeam = () => useWPData(fetchTeam);

export const useFaqs = () => useWPData(fetchFaqs);

export const useVisaTypes = () => useWPData(fetchVisaTypes);

export const useCountries = () => useWPData(fetchCountries);

export const useJobs = () => useWPData(fetchJobs);

export const useProjects = () => useWPData(fetchProjects);

export const usePageBySlug = (slug) =>
  useWPData(() => fetchPageBySlug(slug), [slug]);

export const usePostBySlug = (slug) =>
  useWPData(() => fetchPostBySlug(slug), [slug]);
