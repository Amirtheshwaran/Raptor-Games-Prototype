import { Link, Outlet } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900 sticky top-0 z-50 shadow-sm">
        <div className="w-full px-4 md:px-8 h-12 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 font-bold text-white hover:text-accent-400 transition-colors"
          >
            <Gamepad2 className="w-5 h-5 text-accent-500" />
            <span className="tracking-tight text-lg">Raptor</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="text-slate-300 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-slate-300 hover:text-white transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full px-4 md:px-8 py-6">
        <Outlet />
      </main>
    </div>
  );
}
