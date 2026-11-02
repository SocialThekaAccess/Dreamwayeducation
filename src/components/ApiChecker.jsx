import { useEffect, useState } from "react";
import { checkAllEndpoints } from "../utils/checkApi";

/**
 * Temporary component — shows live API status for all WordPress endpoints.
 * Remove this from App.jsx once you've confirmed which endpoints work.
 */
const ApiChecker = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAllEndpoints()
      .then(setResults)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ fontFamily: "monospace", padding: "2rem", maxWidth: 600, margin: "0 auto" }}>
      <h2>🔍 WordPress API Status Check</h2>
      <p style={{ color: "#555" }}>Checking: <strong>dreamwayeducation.com/wp-json/wp/v2</strong></p>

      {loading ? (
        <p>⏳ Checking endpoints...</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ padding: "8px", textAlign: "left" }}>Endpoint</th>
              <th style={{ padding: "8px", textAlign: "center" }}>Status</th>
              <th style={{ padding: "8px", textAlign: "center" }}>Items</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r.name} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "8px" }}>{r.name}</td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  <span style={{ color: r.ok ? "green" : "red", fontWeight: "bold" }}>
                    {r.ok ? "✅ OK" : `❌ ${r.status}`}
                  </span>
                </td>
                <td style={{ padding: "8px", textAlign: "center" }}>
                  {r.ok ? r.count : r.error || "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!loading && results.length > 0 && (
        <div style={{ marginTop: "1rem", padding: "1rem", background: "#fffbe6", borderRadius: 8 }}>
          <strong>Next Step:</strong>
          {results.every((r) => !r.ok) ? (
            <p>❌ API not accessible. Go to WordPress Admin → Settings → Permalinks → Save Changes to fix REST API.</p>
          ) : (
            <p>✅ Some endpoints working! Check browser console for full data preview.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ApiChecker;
