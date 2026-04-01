import { Link } from 'react-router-dom';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <Frown className="w-16 h-16 text-gray-800 mb-6" />
      <h1 className="text-2xl font-bold text-white mb-2">404 - Reference Not Found</h1>
      <p className="text-sm text-gray-500 mb-8 max-w-sm">
        The archive entry you are looking for does not exist in the current catalog.
      </p>
      <Link to="/" className="px-6 py-2 bg-gray-900 border border-gray-700 rounded hover:bg-gray-800 text-sm font-medium transition-colors">
        Return to Catalog
      </Link>
    </div>
  );
}
