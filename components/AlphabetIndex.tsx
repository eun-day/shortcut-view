interface AlphabetIndexProps {
  alphabets: string[];
  activeAlphabet: string | null;
  onSelect: (char: string) => void;
}

export default function AlphabetIndex({ alphabets, activeAlphabet, onSelect }: AlphabetIndexProps) {
  return (
    <aside className="hidden xl:flex flex-col gap-1 w-[48px] shrink-0 sticky top-8 h-fit z-30">
      {alphabets.map((char) => (
        <button 
          key={char}
          onClick={() => onSelect(char)}
          className={`
            w-8 h-8 flex items-center justify-center rounded-lg border text-sm font-medium transition-all
            ${activeAlphabet === char 
              ? "bg-white border-blue-400 text-blue-600 shadow-sm" 
              : "bg-white/50 border-transparent text-gray-400 hover:border-gray-200 hover:text-gray-600"
            }
          `}
        >
          {char}
        </button>
      ))}
    </aside>
  );
}
