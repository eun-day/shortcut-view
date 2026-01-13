export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#101828] font-sans flex flex-col items-center p-8 md:p-16">
      <main className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#111827]">Privacy Policy</h1>
        
        <div className="space-y-6 text-[#4b5563] text-sm leading-relaxed">
          <p className="text-xs text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-2">Introduction</h2>
            <p>
              At Shortcut-View, accessible from https://shortcutview.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Shortcut-View and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-2">Log Files</h2>
            <p>
              Shortcut-View follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-2">Cookies and Web Beacons</h2>
            <p>
              Like any other website, Shortcut-View uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-2">Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-2">Advertising Partners Privacy Policies</h2>
            <p>
              You may consult this list to find the Privacy Policy for each of the advertising partners of Shortcut-View.
            </p>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Shortcut-View, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>
            <p className="mt-2 italic">
              Note that Shortcut-View has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111827] mb-2">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <a href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
            &larr; Back to Visualizer
          </a>
        </div>
      </main>
    </div>
  );
}
