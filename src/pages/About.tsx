export default function About() {
  return (
    <div className="max-w-prose mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-6">About</h1>
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-slate-300 leading-relaxed shadow-lg">
        <p>
          This repository is a local class demonstration project. It is built as a compact, self-contained template for hosting SWF flash files using React, Vite, Tailwind CSS, and the Ruffle web emulator. All assets and metadata are stored purely on the local filesystem to create an instant, Friv-style UI without needing a backend server or fake analytics.
        </p>
      </div>
    </div>
  );
}
