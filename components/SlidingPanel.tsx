import { Shortcut } from "@/data/shortcuts";

interface SlidingPanelProps {
  isOpen: boolean;
  title: string;
  shortcuts: Shortcut[];
  selectedShortcutId: string | null;
  onClose: () => void;
  onSelectShortcut: (id: string) => void;
}

export default function SlidingPanel({
  isOpen,
  title,
  shortcuts,
  selectedShortcutId,
  onClose,
  onSelectShortcut,
}: SlidingPanelProps) {
  return (
    <div 
      className={`
        hidden xl:block absolute left-[48px] top-0 bottom-0 w-[320px] 
        bg-white border border-gray-200 rounded-2xl shadow-2xl z-[60] overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-4 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}
      `}
    >
      <div className="h-full flex flex-col">
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
              {title}
            </h3>
            <p className="text-xs text-gray-400 mt-1">{shortcuts.length} shortcuts found</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
          {shortcuts.map((shortcut) => (
            <button 
              key={shortcut.id}
              onClick={() => onSelectShortcut(shortcut.id)}
              className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 mb-1 ${selectedShortcutId === shortcut.id ? "bg-blue-50 border-blue-200" : "bg-white border-transparent hover:bg-gray-50"}`}
            >
              <div className="font-semibold text-sm capitalize mb-1 text-gray-900">{shortcut.id}</div>
              <p className="text-xs line-clamp-2 text-gray-500">{shortcut.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
