import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#101828] font-sans flex flex-col items-center justify-center p-8 text-center"
         style={{
           backgroundImage: "linear-gradient(140.564deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)"
         }}>
      <div className="max-w-md w-full bg-white border border-gray-200 rounded-3xl p-12 shadow-xl animate-in fade-in zoom-in duration-300">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-4xl font-bold mb-4 tracking-tight text-[#111827]">404</h1>
        <h2 className="text-xl font-semibold mb-2 text-[#374151]">Page Not Found</h2>
        <p className="text-[#6b7280] mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Maybe try searching for a shortcut instead?
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Return Home
        </Link>
      </div>
      
      <p className="mt-8 text-sm text-[#9ca3af]">
        Shortcut-View | Visualize Your Productivity
      </p>
    </div>
  );
}
