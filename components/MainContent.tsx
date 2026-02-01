"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import MacKeyboard from "@/components/MacKeyboard";
import ShortcutDetail from "@/components/ShortcutDetail";
import AdBanner from "@/components/AdBanner";
import AlphabetIndex from "@/components/AlphabetIndex";
import SlidingPanel from "@/components/SlidingPanel";
import ShortcutSearch from "@/components/ShortcutSearch";
import CategoryDropdown from "@/components/CategoryDropdown";
import CategorySidebar from "@/components/CategorySidebar";
import SEOContent from "@/components/SEOContent";
import { masterShortcuts, getShortcutsByCategory, categories } from "@/data/shortcuts";

export default function MainContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedShortcutId, setSelectedShortcutId] = useState<string | null>("spotlight");
  const [activeAlphabet, setActiveAlphabet] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>("Essential");

  // Alphabet list A-Z
  const alphabets = useMemo(() => 
    Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i))
  , []);

  // Determine base list of shortcuts based on active category
  const currentShortcuts = useMemo(() => {
    return activeCategory ? getShortcutsByCategory(activeCategory) : masterShortcuts;
  }, [activeCategory]);

  // Filter shortcuts based on active alphabet (ID based)
  const shortcutsByAlphabet = useMemo(() => {
    if (!activeAlphabet) return [];
    const char = activeAlphabet.toLowerCase();
    return masterShortcuts.filter(s => s.id.toLowerCase().startsWith(char));
  }, [activeAlphabet]);

  // Search Logic with Weighted Priority (Global Search)
  const searchResults = useMemo(() => {
    const baseList = masterShortcuts; // Always search all shortcuts
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    
    // Filter first (ID, Description, Tip only)
    const filtered = baseList.filter(shortcut => 
      shortcut.id.toLowerCase().includes(query) ||
      shortcut.description.toLowerCase().includes(query) ||
      (shortcut.tip && shortcut.tip.toLowerCase().includes(query))
    );

    // Sort by relevance score
    return filtered.sort((a, b) => {
      const getScore = (s: typeof a) => {
        const id = s.id.toLowerCase();
        const desc = s.description.toLowerCase();
        const tip = s.tip?.toLowerCase() || "";

        if (id === query) return 100; // Exact ID match
        if (id.startsWith(query)) return 80; // ID starts with
        if (id.includes(query)) return 60; // ID contains
        if (desc.includes(query)) return 40; // Description contains
        if (tip.includes(query)) return 20; // Tip contains
        return 0;
      };

      return getScore(b) - getScore(a); // Descending sort
    });
  }, [searchQuery]);

  // Get selected shortcut object
  const selectedShortcut = useMemo(() => 
    masterShortcuts.find(s => s.id === selectedShortcutId) || null
  , [selectedShortcutId]);

  const activeCategoryLabel = useMemo(() => 
    categories.find(c => c.id === activeCategory)?.label || ""
  , [activeCategory]);

  const handleAlphabetSelect = (char: string) => {
    if (activeAlphabet === char) {
      setActiveAlphabet(null);
    } else {
      setActiveAlphabet(char);
      setSearchQuery(""); 
      setActiveCategory(null); 
    }
  };

  const handleCategorySelect = (category: string | null) => {
    setActiveCategory(category);
    setSearchQuery(""); 
    setActiveAlphabet(null); 
  };

  const handleSelectShortcut = (id: string) => {
    setSelectedShortcutId(id);
    if (activeAlphabet) {
        setActiveAlphabet(null); 
    }
    setSearchQuery(""); 

    // Scroll to visualization area
    setTimeout(() => {
      const element = document.getElementById('visualization-area');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleCloseCategory = () => {
    setActiveCategory(null);
  };

  return (
    <div 
      className="min-h-screen w-full bg-[#f9fafb] text-[#101828] font-sans flex flex-col overflow-x-hidden"
      style={{
        backgroundImage: "linear-gradient(140.564deg, rgb(249, 250, 251) 0%, rgb(243, 244, 246) 100%)"
      }}
    >
      {/* Top Utility Header */}
      <header className="w-full h-[56px] flex justify-center z-[70] bg-[#f9fafb] px-4 md:px-8">
        <div className="w-full max-w-[1440px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Category Dropdown */}
            <CategoryDropdown 
              selectedCategory={activeCategory} 
              onSelectCategory={handleCategorySelect} 
            />
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-[#6a7282]">
             <Link href="/about" className="underline hover:text-[#111827] transition-colors">About</Link>
             <Link href="/privacy" className="underline hover:text-[#111827] transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </header>

      <div className="flex-1 w-full flex justify-center p-4 md:p-8 pt-0">
        <div className="w-full max-w-[1440px] flex gap-0 relative">
          
          {/* LEFT SIDEBAR AREA */}
          <div className="relative flex shrink-0">
            {/* Mode 1: Alphabet Index */}
            {!activeCategory && (
              <>
                <AlphabetIndex 
                  alphabets={alphabets} 
                  activeAlphabet={activeAlphabet} 
                  onSelect={handleAlphabetSelect} 
                />
                <SlidingPanel
                  isOpen={!!activeAlphabet}
                  title={`Shortcuts: ${activeAlphabet}`}
                  shortcuts={shortcutsByAlphabet}
                  selectedShortcutId={selectedShortcutId}
                  onClose={() => setActiveAlphabet(null)}
                  onSelectShortcut={handleSelectShortcut}
                />
              </>
            )}

            {/* Mode 2: Category Sidebar */}
            {activeCategory && (
              <CategorySidebar 
                categoryTitle={activeCategoryLabel}
                shortcuts={currentShortcuts}
                selectedShortcutId={selectedShortcutId}
                onSelectShortcut={handleSelectShortcut}
                onClose={handleCloseCategory}
              />
            )}
          </div>

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center gap-8 max-w-[864px] mx-auto min-w-0">
            
            {/* Title Section */}
            <div className="text-center flex flex-col gap-2 mt-4">
              <h1 className="text-2xl md:text-[28px] font-bold text-[#101828] tracking-tight">
                Shortcut Visualizer for Mac
              </h1>
              <p className="text-sm text-[#4a5565]">
                Find and visualize keyboard shortcuts instantly
              </p>
            </div>

            {/* Search Bar */}
            <ShortcutSearch 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchResults={searchResults}
              onSelectShortcut={handleSelectShortcut}
            />

            {/* Keyboard Visualization (Scroll Target) */}
            <div id="visualization-area" className="w-full flex justify-center scroll-mt-[30px]">
              <MacKeyboard activeKeys={selectedShortcut?.keys} />
            </div>

            {/* Shortcut Detail Area */}
            {selectedShortcut && (
              <div className="w-full space-y-8">
                <ShortcutDetail 
                  shortcut={selectedShortcut} 
                  allShortcuts={masterShortcuts}
                  onSelectRelated={handleSelectShortcut}
                />
                <AdBanner 
                  dataAdSlot="1671292702" 
                  dataAdFormat="horizontal"
                  className="w-full h-[100px] md:h-[120px]"
                />
              </div>
            )}
            
            {/* SEO & Guide Content */}
            <SEOContent onSelectShortcut={handleSelectShortcut} />

             {/* Footer */}
            <footer className="mt-8 pt-8 border-t border-[#d1d5dc] text-center pb-8 w-full flex flex-col items-center gap-4">
              <p className="text-[14px] text-[#6a7282] max-w-2xl mx-auto">
                Mac and MacBook are trademarks of Apple Inc. This website is an independent project and is not affiliated with, endorsed by, or sponsored by Apple Inc.
              </p>
              <div className="flex gap-6 text-sm text-[#6a7282]">
                <Link href="/about" className="underline hover:text-[#111827] transition-colors">About</Link>
                <Link href="/privacy" className="underline hover:text-[#111827] transition-colors">Privacy Policy</Link>
              </div>
            </footer>

          </main>

          {/* Right: Sidebar Ad */}
          <aside className="hidden xl:block w-[300px] shrink-0 sticky top-0 h-fit ml-8">
             <AdBanner 
               dataAdSlot="5427044197" 
               dataAdFormat="vertical"
               className="w-[300px] h-[600px]"
             />
          </aside>

        </div>
      </div>
    </div>
  );
}
