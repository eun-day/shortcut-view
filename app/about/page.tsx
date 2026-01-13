import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#101828] font-sans flex flex-col items-center p-8 md:p-16">
      <main className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#111827]">About Shortcut-View</h1>
        
        <div className="space-y-6 text-[#4b5563] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-[#111827] mb-3">Visualizing Productivity</h2>
            <p>
              Shortcut-View was born from a simple idea: <strong>Why memorize lists when you can see them?</strong>
            </p>
            <p className="mt-2">
              For many Mac users, mastering keyboard shortcuts is the key to doubling productivity. However, traditional text-based lists are often hard to recall when you actually need them. We believe that visualizing shortcuts directly on a virtual keyboard helps users build muscle memory faster and more intuitively.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111827] mb-3">Our Mission</h2>
            <p>
              Our goal is to provide the most accessible and visual guide for macOS shortcuts. Whether you are a new Mac user or a seasoned pro looking to optimize your workflow, Shortcut-View is here to help you find the right keys instantly.
            </p>
          </section>

          {/* Usage Image Section */}
          <section className="py-4 flex flex-col items-center gap-4 border-y border-gray-50">
            <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <Image 
                src="/shortcut-usage.jpeg" 
                alt="Shortcut-View usage guide" 
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm font-medium text-[#6b7280]">
              Click on a shortcut to see its exact location on the keyboard and detailed instructions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#111827] mb-3">Features</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Interactive Mac keyboard visualization</li>
              <li>Real-time search with instant highlighting</li>
              <li>Categorized shortcut lists for easy browsing</li>
              <li>Clean, distraction-free interface</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center flex flex-col items-center gap-4">
          <a href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            &larr; Back to Visualizer
          </a>
          
          <div className="flex gap-6 text-sm text-[#6a7282] mt-4">
            <a href="/about" className="hover:text-[#111827] underline transition-colors font-semibold">
              About
            </a>
            <a href="/privacy" className="hover:text-[#111827] underline transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}