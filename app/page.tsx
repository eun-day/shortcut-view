"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import MacKeyboard from "@/components/MacKeyboard";
import ShortcutDetail from "@/components/ShortcutDetail";
import AdBanner from "@/components/AdBanner";
import AlphabetIndex from "@/components/AlphabetIndex";
import SlidingPanel from "@/components/SlidingPanel";
import ShortcutSearch from "@/components/ShortcutSearch";
import { systemShortcuts } from "@/data/shortcuts";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedShortcutId, setSelectedShortcutId] = useState<string | null>(null);
  const [activeAlphabet, setActiveAlphabet] = useState<string | null>(null);

  // Alphabet list A-Z
  const alphabets = useMemo(() => 
    Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  , []);

  // Filter shortcuts based on active alphabet (ID based)
  const shortcutsByAlphabet = useMemo(() => {
    if (!activeAlphabet) return [];
    const char = activeAlphabet.toLowerCase();
    return systemShortcuts.filter(s => s.id.toLowerCase().startsWith(char));
  }, [activeAlphabet]);

  // Search Logic with Priority
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    
    const filtered = systemShortcuts.filter(shortcut => 
      shortcut.id.toLowerCase().includes(query) ||
      shortcut.description.toLowerCase().includes(query) ||
      shortcut.keys.some(k => k.toLowerCase().includes(query))
    );

    // Sort priority: ID Starts With > ID Contains > Others
    return filtered.sort((a, b) => {
      const aIdStart = a.id.toLowerCase().startsWith(query);
      const bIdStart = b.id.toLowerCase().startsWith(query);
      if (aIdStart && !bIdStart) return -1;
      if (!aIdStart && bIdStart) return 1;

      const aIdInclude = a.id.toLowerCase().includes(query);
      const bIdInclude = b.id.toLowerCase().includes(query);
      if (aIdInclude && !bIdInclude) return -1;
      if (!aIdInclude && bIdInclude) return 1;

      return 0;
    });
  }, [searchQuery]);

  // Get selected shortcut object
  const selectedShortcut = useMemo(() => 
    systemShortcuts.find(s => s.id === selectedShortcutId) || null
  , [selectedShortcutId]);

  const handleAlphabetSelect = (char: string) => {
    if (activeAlphabet === char) {
      setActiveAlphabet(null);
    } else {
      setActiveAlphabet(char);
      setSearchQuery(""); 
    }
  };

  const handleSelectShortcut = (id: string) => {
    setSelectedShortcutId(id);
    setActiveAlphabet(null);
    setSearchQuery(""); 
  };

  return (
    <div 
      className="min-h-screen w-full bg-[#f9fafb] text-[#101828] font-sans flex justify-center p-4 md:p-8 overflow-x-hidden"
      style={{
        backgroundImage: "linear-gradient(140.564deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)"
      }}
    >
      <div className="w-full max-w-[1440px] flex gap-0 relative">
        
        {/* Left: Alphabet Index */}
        <AlphabetIndex 
          alphabets={alphabets} 
          activeAlphabet={activeAlphabet} 
          onSelect={handleAlphabetSelect} 
        />

        {/* Sliding List Panel */}
        <SlidingPanel
          isOpen={!!activeAlphabet}
          title={`Shortcuts: ${activeAlphabet}`}
          shortcuts={shortcutsByAlphabet}
          selectedShortcutId={selectedShortcutId}
          onClose={() => setActiveAlphabet(null)}
          onSelectShortcut={handleSelectShortcut}
        />

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center gap-8 max-w-[864px] mx-auto min-w-0">
          
          {/* Header */}
          <header className="text-center flex flex-col gap-2 mt-4">
            <h1 className="text-2xl md:text-[28px] font-bold text-[#101828] tracking-tight">
              Shortcut Visualizer for Mac
            </h1>
            <p className="text-sm text-[#4a5565]">
              Find and visualize keyboard shortcuts instantly
            </p>
          </header>

          {/* Search Bar */}
          <ShortcutSearch 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchResults={searchResults}
            onSelectShortcut={handleSelectShortcut}
          />

          {/* Keyboard Visualization */}
          <div className="w-full flex justify-center">
            <MacKeyboard activeKeys={selectedShortcut?.keys} />
          </div>

          {/* Shortcut Detail Area */}
          {selectedShortcut && (
            <div className="w-full">
              <ShortcutDetail 
                shortcut={selectedShortcut} 
                allShortcuts={systemShortcuts}
                onSelectRelated={handleSelectShortcut}
              />
            </div>
          )}
          
          {/* Bottom Ad Banner */}
          {/* <AdBanner 
            dataAdSlot="1234567890" // Placeholder
            className="w-full max-w-[728px] h-[90px]"
          /> */}

           {/* Footer */}
          <footer className="mt-8 pt-8 border-t border-[#d1d5dc] text-center pb-8 w-full flex flex-col items-center gap-4">
            <p className="text-[14px] text-[#6a7282] max-w-2xl mx-auto">
              Mac and MacBook are trademarks of Apple Inc. This website is an independent project and is not affiliated with, endorsed by, or sponsored by Apple Inc.
            </p>
            <div className="flex gap-6 text-sm text-[#6a7282]">
              <Link href="/about" className="hover:text-[#111827] underline transition-colors">
                About
              </Link>
              <Link href="/privacy" className="hover:text-[#111827] underline transition-colors">
                Privacy Policy
              </Link>
            </div>
          </footer>

        </main>

        {/* Right: Sidebar Ad */}
        {/* <aside className="hidden xl:block w-[300px] shrink-0 sticky top-8 h-fit ml-8">
           <AdBanner 
             dataAdSlot="0987654321" // Placeholder
             dataAdFormat="vertical"
             className="w-[300px] h-[600px]"
           />
        </aside> */}

      </div>
    </div>
  );
}