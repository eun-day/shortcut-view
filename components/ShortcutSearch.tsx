"use client";

import { useState, useRef, useEffect } from "react";
import { Shortcut } from "@/data/shortcuts";

interface ShortcutSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: Shortcut[];
  onSelectShortcut: (id: string) => void;
}

export default function ShortcutSearch({
  searchQuery,
  setSearchQuery,
  searchResults,
  onSelectShortcut,
}: ShortcutSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    onSelectShortcut(id);
    setIsFocused(false);
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-[672px] z-50">
      <div className="relative z-20">
        <div className="absolute left-[18px] top-1/2 -translate-y-1/2 text-gray-400">
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input 
          type="text" 
          value={searchQuery}
          onFocus={() => setIsFocused(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search shortcuts..." 
          className="w-full h-[64px] pl-[48px] pr-4 rounded-[14px] border-2 border-[#d1d5dc] bg-white text-[18px] focus:outline-none focus:border-blue-500 shadow-sm"
        />
      </div>

      {/* Search Autocomplete Dropdown */}
      {isFocused && searchQuery.trim() && (
        <div className="absolute top-[70px] left-0 w-full bg-white border border-gray-200 rounded-[14px] shadow-xl max-h-[400px] overflow-y-auto custom-scrollbar p-2 animate-in fade-in slide-in-from-top-2 duration-200">
           {searchResults.map((shortcut) => (
              <button key={shortcut.id} onClick={() => handleSelect(shortcut.id)} className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 flex justify-between items-center group transition-colors">
                <div>
                  <div className="font-semibold text-sm text-gray-900 capitalize mb-0.5 flex items-center gap-2">
                    {shortcut.id}
                    <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full uppercase">{shortcut.category}</span>
                  </div>
                  <div className="text-xs text-gray-500 line-clamp-1">{shortcut.description}</div>
                </div>
                <div className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded border border-gray-100">{shortcut.label}</div>
              </button>
           ))}
           {searchResults.length === 0 && (
              <div className="p-4 text-center text-gray-500 text-sm">
                No shortcuts found for "{searchQuery}"
              </div>
           )}
        </div>
      )}
    </div>
  );
}
