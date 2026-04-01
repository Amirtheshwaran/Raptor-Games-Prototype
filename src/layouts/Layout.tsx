import { Link, Outlet } from 'react-router-dom';
import { Gamepad } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-[1200px] w-full mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-100 hover:text-white transition-colors">
            <Gamepad className="w-5 h-5 text-slate-400" />
            <span className="tracking-tight text-lg">Raptor Portal</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="text-slate-400 hover:text-slate-100 transition-colors">Home</Link>
            <Link to="/about" className="text-slate-400 hover:text-slate-100 transition-colors">About</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 w-full px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
