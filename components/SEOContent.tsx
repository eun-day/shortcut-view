"use client";

import { masterShortcuts } from "@/data/shortcuts";

interface SEOContentProps {
  onSelectShortcut: (id: string) => void;
}

export default function SEOContent({ onSelectShortcut }: SEOContentProps) {
  // Filter shortcuts for SEO content sections
  const essentialShortcuts = masterShortcuts.filter(s => 
    ["copy", "paste", "spotlight", "screenshot-full", "quit-app"].includes(s.id)
  );

  const handleShortcutClick = (id: string) => {
    onSelectShortcut(id);
    setTimeout(() => {
      const element = document.getElementById('visualization-area');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Helper component for inline shortcut links
  const ShortcutLink = ({ id, label }: { id: string, label: string }) => (
    <button 
      onClick={() => handleShortcutClick(id)}
      className="inline-flex items-center justify-center px-1.5 py-0.5 mx-1 text-xs font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors align-baseline"
      title="Click to visualize on keyboard"
    >
      {label}
    </button>
  );

  return (
    <article className="w-full max-w-[864px] mx-auto mt-16 px-4 md:px-0 text-[#4b5563] space-y-12 mb-12">
      
      {/* 1. Introduction */}
      <section>
        <h2 className="text-2xl font-bold text-[#111827] mb-4">
          Master Your Mac with Essential Keyboard Shortcuts
        </h2>
        <p className="leading-relaxed mb-4">
          Switching to macOS or looking to speed up your workflow? Learning keyboard shortcuts is the single most effective way to boost your productivity on a Mac. Unlike using a mouse or trackpad, keyboard shortcuts allow you to perform tasks instantly without lifting your hands from the keys.
        </p>
        <p className="leading-relaxed">
          Shortcut-View provides an interactive visual guide to help you memorize and understand these key combinations. From managing files in Finder to capturing screenshots and editing text, mastering these commands will transform you into a Mac power user.
        </p>
      </section>

      {/* 2. Key Categories Breakdown (Interactive List) */}
      <section>
        <h3 className="text-xl font-semibold text-[#111827] mb-4">
          Top 5 Must-Know Mac Shortcuts
        </h3>
        <ul className="space-y-4">
          {essentialShortcuts.map(shortcut => (
            <li key={shortcut.id} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
              <button 
                onClick={() => handleShortcutClick(shortcut.id)}
                className="w-full text-left flex flex-col sm:flex-row sm:items-center gap-2 mb-1 group"
              >
                <span className="font-bold text-[#111827] group-hover:text-blue-600 transition-colors">{shortcut.label}</span>
                <span className="text-sm text-gray-500">- {shortcut.description}</span>
              </button>
              {shortcut.tip && (
                <p className="text-sm text-blue-600 mt-1 pl-0 sm:pl-1">
                  💡 <strong>Tip:</strong> {shortcut.tip}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Detailed Guides with Interactive Links */}
      <section className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#111827] mb-2">
            How to Take Screenshots on Mac
          </h3>
          <p className="leading-relaxed">
            macOS offers powerful built-in screen capture tools. Press <ShortcutLink id="screenshot-full" label="⇧ + ⌘ + 3" /> to capture the entire screen immediately. If you need more precision, use <ShortcutLink id="screenshot-area" label="⇧ + ⌘ + 4" /> to select a specific area. For advanced options like screen recording or window capture, <ShortcutLink id="screenshot-panel" label="⇧ + ⌘ + 5" /> opens the control panel.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#111827] mb-2">
            Managing Files in Finder
          </h3>
          <p className="leading-relaxed">
            Forget dragging and dropping. Use <ShortcutLink id="copy" label="⌘ + C" /> to copy and <ShortcutLink id="move-file" label="⌥ + ⌘ + V" /> to move files (cut and paste). To rename a file, simply select it and press <ShortcutLink id="rename" label="Return" />. Need to see what's inside a file? Hit <ShortcutLink id="quick-look" label="Space" /> for Quick Look preview without opening any app.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#111827] mb-2">
            Force Quit and System Control
          </h3>
          <p className="leading-relaxed">
            Is an app stuck? The Mac equivalent of Ctrl+Alt+Delete is <ShortcutLink id="force-quit" label="⌥ + ⌘ + Esc" />. This opens the Force Quit menu. To lock your screen instantly before walking away, press <ShortcutLink id="lock-screen" label="⌃ + ⌘ + Q" />.
          </p>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
        <h3 className="text-xl font-semibold text-[#111827] mb-6">Frequently Asked Questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-[#111827] mb-1">Why is there no "Cut" (Ctrl+X) for files on Mac?</h4>
            <p className="text-sm leading-relaxed">
              macOS handles file movement differently to prevent data loss. Instead of "cutting" a file, you "copy" it first (Cmd+C) and then "move" it to the destination using <ShortcutLink id="move-file" label="⌥ + ⌘ + V" />.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[#111827] mb-1">What is the Command (⌘) key?</h4>
            <p className="text-sm leading-relaxed">
              The Command key (formerly Apple key) is the primary modifier key on Mac, similar to the Control key on Windows. It is used for most system shortcuts like Copy, Save, and Quit.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[#111827] mb-1">How do I switch between windows of the same app?</h4>
            <p className="text-sm leading-relaxed">
              Command + Tab switches between different apps. To switch between windows within the <em>same</em> app (e.g., multiple Chrome windows), use <ShortcutLink id="window-switcher" label="⌘ + `" />.
            </p>
          </div>
        </div>
      </section>

    </article>
  );
}