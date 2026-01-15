import { Shortcut } from "@/data/shortcuts";

interface CategorySidebarProps {
  categoryTitle: string;
  shortcuts: Shortcut[];
  selectedShortcutId: string | null;
  onSelectShortcut: (id: string) => void;
  onClose: () => void;
}

export default function CategorySidebar({
  categoryTitle,
  shortcuts,
  selectedShortcutId,
  onSelectShortcut,
  onClose,
}: CategorySidebarProps) {
  return (
    <aside className="hidden xl:flex flex-col w-[260px] shrink-0 sticky top-8 h-[calc(100vh-6rem)] z-30 mr-6">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm h-full flex flex-col overflow-hidden animate-in fade-in slide-in-from-left-4 duration-300">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide truncate pr-2">
              {categoryTitle}
            </h3>
            <p className="text-xs text-gray-400 mt-1">{shortcuts.length} shortcuts</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-md transition-colors"
            title="Clear Category"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
          {shortcuts.map((shortcut) => (
            <button 
              key={shortcut.id}
              onClick={() => onSelectShortcut(shortcut.id)}
              className={`
                w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 mb-1 group
                ${selectedShortcutId === shortcut.id 
                  ? "bg-blue-50 border-blue-200 shadow-sm" 
                  : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-200"
                }
              `}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`font-semibold text-sm capitalize ${selectedShortcutId === shortcut.id ? "text-blue-700" : "text-gray-900"}`}>
                  {shortcut.id}
                </span>
              </div>
              <p className={`text-xs line-clamp-2 ${selectedShortcutId === shortcut.id ? "text-blue-600/80" : "text-gray-500"}`}>
                {shortcut.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
