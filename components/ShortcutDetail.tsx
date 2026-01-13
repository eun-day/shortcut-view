import { Shortcut } from "@/data/shortcuts";

interface ShortcutDetailProps {
  shortcut: Shortcut | null;
  allShortcuts: Shortcut[];
  onSelectRelated: (id: string) => void;
}

export default function ShortcutDetail({ shortcut, allShortcuts, onSelectRelated }: ShortcutDetailProps) {
  if (!shortcut) {
    return (
      <div className="w-full h-[220px] bg-white border-2 border-[#e5e7eb] rounded-[14px] flex flex-col items-center justify-center text-center p-6">
        <p className="text-[16px] text-[#6a7282]">Select a shortcut to see details</p>
      </div>
    );
  }

  // Find related shortcuts objects
  const relatedShortcuts = shortcut.relatedIds
    ?.map(id => allShortcuts.find(s => s.id === id))
    .filter((s): s is Shortcut => !!s) || [];

  // Helper to render Kbd style keys from label (e.g., "⌘ + C")
  const renderKeys = (label: string, size: "small" | "large" = "large") => {
    const parts = label.split(" ");
    return (
      <div className="flex items-center gap-1 md:gap-2">
        {parts.map((part, i) => {
          if (part === "+") {
            return (
              <span key={i} className={`text-[#99a1af] font-normal ${size === 'small' ? 'text-[12px]' : 'text-[16px]'}`}>
                +
              </span>
            );
          }
          return (
            <div 
              key={i}
              className={`
                bg-[#f3f4f6] border border-[#d1d5dc] border-b-2 rounded-md flex items-center justify-center font-medium text-[#0a0a0a]
                ${size === 'small' ? 'h-[26px] min-w-[25px] text-[12px] px-1' : 'h-[40px] min-w-[36px] text-[14px] px-2'}
              `}
            >
              {part}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 h-fit animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Left: Current Shortcut Details */}
      <div className="bg-white border-2 border-[#e5e7eb] rounded-[14px] p-6 flex flex-col relative h-full">
        <div className="mb-4">
          <h2 className="text-[24px] font-semibold text-[#0a0a0a] leading-tight mb-2 capitalize cursor-pointer hover:text-blue-600 transition-colors">
            {shortcut.id}
          </h2>
          <p className="text-[16px] text-[#4a5565] leading-normal">
            {shortcut.description}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#6a7282] w-20 shrink-0">Shortcut:</span>
            {renderKeys(shortcut.label)}
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#6a7282] w-20 shrink-0">Category:</span>
            <span className="text-[14px] font-medium text-[#364153]">{shortcut.category}</span>
          </div>
        </div>
      </div>

      {/* Right: Related Shortcuts */}
      <div className="bg-white border-2 border-[#e5e7eb] rounded-[14px] p-6 flex flex-col gap-4 h-full">
        <h3 className="text-[18px] font-semibold text-[#0a0a0a] tracking-tight">
          Related Shortcuts
        </h3>
        
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[240px] pr-1 custom-scrollbar">
          {relatedShortcuts.length > 0 ? (
            relatedShortcuts.map((related) => (
              <button
                key={related.id}
                onClick={() => onSelectRelated(related.id)}
                className="w-full text-left p-4 rounded-[10px] border border-[#e5e7eb] hover:border-blue-300 hover:bg-blue-50/30 transition-all flex justify-between items-start group"
              >
                <div className="flex-1 mr-4">
                  <div className="font-medium text-[16px] text-[#101828] group-hover:text-blue-700 capitalize mb-1">
                    {related.id}
                  </div>
                  <p className="text-[14px] text-[#6a7282] line-clamp-1">
                    {related.description}
                  </p>
                </div>
                <div className="shrink-0 pt-0.5">
                   {renderKeys(related.label, "small")}
                </div>
              </button>
            ))
          ) : (
            <p className="text-sm text-gray-400 italic">No related shortcuts found.</p>
          )}
        </div>
      </div>

    </div>
  );
}
