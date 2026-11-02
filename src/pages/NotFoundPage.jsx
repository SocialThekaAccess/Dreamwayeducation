import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl font-black text-orange-500 mb-4">404</div>
        <h1 className="text-3xl font-black text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It may have been moved or deleted.
        </p>
        <Link to="/" className="btn-primary">Go Back Home</Link>
      </div>
    </div>
  );
}
