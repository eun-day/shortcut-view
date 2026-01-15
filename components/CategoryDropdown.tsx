"use client";

import { useState, useRef, useEffect } from "react";
import { categories } from "@/data/shortcuts";

interface CategoryDropdownProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function CategoryDropdown({ selectedCategory, onSelectCategory }: CategoryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    onSelectCategory(id === selectedCategory ? null : id); // Toggle
    setIsOpen(false);
  };

  const selectedLabel = selectedCategory ? categories.find(c => c.id === selectedCategory)?.label : "Categories";

  return (
    <div ref={dropdownRef} className="relative z-40">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 h-[40px] px-4 rounded-[10px] transition-all
          ${selectedCategory 
            ? "bg-blue-50 text-blue-700 border border-blue-200" 
            : "bg-transparent hover:bg-gray-100 text-[#364153]"
          }
        `}
      >
        <span className="text-[16px] leading-none">📚</span>
        <span className="text-[14px] font-medium">{selectedLabel}</span>
        <svg 
          width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[48px] left-0 w-[320px] bg-white border border-[#e5e7eb] rounded-[14px] shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[70]">
          <div className="p-2 flex flex-col gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleSelect(category.id)}
                className={`
                  w-full flex items-center gap-3 p-3 rounded-[10px] text-left transition-colors group
                  ${selectedCategory === category.id ? "bg-blue-50 border border-blue-100" : "hover:bg-gray-50 border border-transparent"}
                `}
              >
                <span className="text-[24px] leading-none">{category.icon}</span>
                <div className="flex-1">
                  <div className={`text-[14px] font-semibold ${selectedCategory === category.id ? "text-blue-700" : "text-[#101828]"}`}>
                    {category.label}
                  </div>
                  <div className="text-[12px] text-[#6a7282] mt-0.5 font-medium line-clamp-1">
                    {category.description}
                  </div>
                </div>
                {selectedCategory === category.id && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}