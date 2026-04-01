export default function About() {
  return (
    <div className="max-w-[700px] w-full mx-auto py-12">
      <h1 className="text-2xl font-bold text-white mb-6">About</h1>
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-sm">
        <p className="text-slate-300 leading-relaxed text-base">
          This is a small React + Vite browser game portal prototype that loads local assets using Ruffle. Built as a class demo to explore UI design for Flash-style game portals.
        </p>
      </div>
    </div>
  );
}
