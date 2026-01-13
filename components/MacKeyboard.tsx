import Image from "next/image";

interface MacKeyboardProps {
  activeKeys?: string[]; // e.g., ['command', 'c']
}

export default function MacKeyboard({ activeKeys = [] }: MacKeyboardProps) {
  // Helper to check if a key is active
  const isActive = (id: string) => activeKeys.includes(id.toLowerCase());

  return (
    <div className="bg-[#f3f4f6] p-2 rounded-2xl w-full border border-gray-200 shadow-sm overflow-hidden select-none">
      <div className="flex flex-col w-full gap-1">
        {/* Row 1: Function Keys */}
        <div className="flex w-full">
          <Key unit={1.5} label="esc" id="esc" active={isActive("esc")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F1" id="f1" active={isActive("f1")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F2" id="f2" active={isActive("f2")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F3" id="f3" active={isActive("f3")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F4" id="f4" active={isActive("f4")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F5" id="f5" active={isActive("f5")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F6" id="f6" active={isActive("f6")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F7" id="f7" active={isActive("f7")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F8" id="f8" active={isActive("f8")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F9" id="f9" active={isActive("f9")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F10" id="f10" active={isActive("f10")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F11" id="f11" active={isActive("f11")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="F12" id="f12" active={isActive("f12")} fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="⏻" id="power" active={isActive("power")} font="symbol" />
        </div>

        {/* Row 2: Numbers */}
        <div className="flex w-full">
          <Key unit={1.0} topLabel="~" bottomLabel="`" id="`" active={isActive("`") || isActive("~")} />
          <Key unit={1.0} topLabel="!" bottomLabel="1" id="1" active={isActive("1") || isActive("!")} />
          <Key unit={1.0} topLabel="@" bottomLabel="2" id="2" active={isActive("2") || isActive("@")} />
          <Key unit={1.0} topLabel="#" bottomLabel="3" id="3" active={isActive("3") || isActive("#")} />
          <Key unit={1.0} topLabel="$" bottomLabel="4" id="4" active={isActive("4") || isActive("$")} />
          <Key unit={1.0} topLabel="%" bottomLabel="5" id="5" active={isActive("5") || isActive("%")} />
          <Key unit={1.0} topLabel="^" bottomLabel="6" id="6" active={isActive("6") || isActive("^")} />
          <Key unit={1.0} topLabel="&" bottomLabel="7" id="7" active={isActive("7") || isActive("&")} />
          <Key unit={1.0} topLabel="*" bottomLabel="8" id="8" active={isActive("8") || isActive("*")} />
          <Key unit={1.0} topLabel="(" bottomLabel="9" id="9" active={isActive("9") || isActive("(")} />
          <Key unit={1.0} topLabel=")" bottomLabel="0" id="0" active={isActive("0") || isActive(")")} />
          <Key unit={1.0} topLabel="_" bottomLabel="-" id="-" active={isActive("-") || isActive("_")} />
          <Key unit={1.0} topLabel="+" bottomLabel="=" id="=" active={isActive("=") || isActive("+")} />
          <Key unit={1.5} label="delete" id="delete" active={isActive("delete")} align="right" fontSize="text-[11px] md:text-[13px]" />
        </div>

        {/* Row 3: QWERTY Top */}
        <div className="flex w-full">
          <Key unit={1.5} label="tab" id="tab" active={isActive("tab")} align="left" fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="Q" id="q" active={isActive("q")} />
          <Key unit={1.0} label="W" id="w" active={isActive("w")} />
          <Key unit={1.0} label="E" id="e" active={isActive("e")} />
          <Key unit={1.0} label="R" id="r" active={isActive("r")} />
          <Key unit={1.0} label="T" id="t" active={isActive("t")} />
          <Key unit={1.0} label="Y" id="y" active={isActive("y")} />
          <Key unit={1.0} label="U" id="u" active={isActive("u")} />
          <Key unit={1.0} label="I" id="i" active={isActive("i")} />
          <Key unit={1.0} label="O" id="o" active={isActive("o")} />
          <Key unit={1.0} label="P" id="p" active={isActive("p")} />
          <Key unit={1.0} topLabel="{" bottomLabel="[" id="[" active={isActive("[") || isActive("{")} />
          <Key unit={1.0} topLabel="}" bottomLabel="]" id="]" active={isActive("]") || isActive("}")} />
          <Key unit={1.0} topLabel="|" bottomLabel="\" id="\" active={isActive("\\") || isActive("|")} />
        </div>

        {/* Row 4: ASDF */}
        <div className="flex w-full">
          <Key unit={1.75} label="caps lock" id="capslock" active={isActive("capslock")} align="left" fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="A" id="a" active={isActive("a")} />
          <Key unit={1.0} label="S" id="s" active={isActive("s")} />
          <Key unit={1.0} label="D" id="d" active={isActive("d")} />
          <Key unit={1.0} label="F" id="f" active={isActive("f")} />
          <Key unit={1.0} label="G" id="g" active={isActive("g")} />
          <Key unit={1.0} label="H" id="h" active={isActive("h")} />
          <Key unit={1.0} label="J" id="j" active={isActive("j")} />
          <Key unit={1.0} label="K" id="k" active={isActive("k")} />
          <Key unit={1.0} label="L" id="l" active={isActive("l")} />
          <Key unit={1.0} topLabel=":" bottomLabel=";" id=";" active={isActive(";") || isActive(":")} />
          <Key unit={1.0} topLabel='"' bottomLabel="'" id="'" active={isActive("'" ) || isActive("\"")} />
          <Key unit={1.75} label="return" id="return" active={isActive("return") || isActive("enter")} align="right" fontSize="text-[11px] md:text-[13px]" />
        </div>

        {/* Row 5: ZXCV */}
        <div className="flex w-full">
          <Key unit={2.25} label="shift" id="shift" active={isActive("shift")} align="left" fontSize="text-[11px] md:text-[13px]" />
          <Key unit={1.0} label="Z" id="z" active={isActive("z")} />
          <Key unit={1.0} label="X" id="x" active={isActive("x")} />
          <Key unit={1.0} label="C" id="c" active={isActive("c")} />
          <Key unit={1.0} label="V" id="v" active={isActive("v")} />
          <Key unit={1.0} label="B" id="b" active={isActive("b")} />
          <Key unit={1.0} label="N" id="n" active={isActive("n")} />
          <Key unit={1.0} label="M" id="m" active={isActive("m")} />
          <Key unit={1.0} topLabel="<" bottomLabel="," id="," active={isActive(",") || isActive("<")} />
          <Key unit={1.0} topLabel=">" bottomLabel="." id="." active={isActive(".") || isActive(">")} />
          <Key unit={1.0} topLabel="?" bottomLabel="/" id="/" active={isActive("/") || isActive("?")} />
          <Key unit={2.25} label="shift" id="shift" active={isActive("shift")} align="right" fontSize="text-[11px] md:text-[13px]" />
        </div>

        {/* Row 6: Modifiers & Space */}
        <div className="flex w-full">
          {/* fn / globe */}
          <div style={{ width: `${(1.0 / 14.5) * 100}%` }} className="p-[2px] md:p-[3px] shrink-0">
            <div className={`h-10 md:h-12 w-full border border-b-2 rounded-md md:rounded-lg flex flex-col items-start justify-end p-1 transition-colors shadow-sm ${isActive('fn') ? 'bg-blue-500 border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}> 
                <Image src="/globe.svg" alt="fn" width={12} height={12} className={`mb-0.5 ml-0.5 ${isActive('fn') ? 'brightness-0 invert opacity-100' : 'opacity-60'}`} />
            </div>
          </div>
          
          <Key unit={1.0} topLabel="⌃" bottomLabel="control" subLabel id="control" active={isActive("control")} />
          <Key unit={1.0} topLabel="⌥" bottomLabel="option" subLabel id="option" active={isActive("option")} />
          
          <Key unit={1.25} topLabel="⌘" bottomLabel="command" subLabel id="command" active={isActive("command")} />
          
          {/* Space */}
          <div style={{ width: `${(5.0 / 14.5) * 100}%` }} className="p-[2px] md:p-[3px] shrink-0">
             <div className={`h-10 md:h-12 w-full border border-b-2 rounded-md md:rounded-lg transition-colors shadow-sm ${isActive('space') ? 'bg-blue-500 border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`} />
          </div>

          <Key unit={1.25} topLabel="⌘" bottomLabel="command" subLabel id="command" active={isActive("command")} />
          <Key unit={1.0} topLabel="⌥" bottomLabel="option" subLabel id="option" active={isActive("option")} />

          <Key unit={1.0} label="◀" id="left" active={isActive("left")} />
          
          {/* Up/Down Arrows */}
          <div style={{ width: `${(1.0 / 14.5) * 100}%` }} className="p-[2px] md:p-[3px] shrink-0 flex flex-col gap-[3px]">
            <div className={`flex-1 w-full border border-b-2 rounded-[4px] md:rounded-[5px] flex items-center justify-center transition-colors shadow-sm ${isActive('up') ? 'bg-blue-500 border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}> 
                <span className={`text-[8px] md:text-[10px] ${isActive('up') ? 'text-white' : 'text-gray-800'}`}>▲</span>
            </div>
             <div className={`flex-1 w-full border border-b-2 rounded-[4px] md:rounded-[5px] flex items-center justify-center transition-colors shadow-sm ${isActive('down') ? 'bg-blue-500 border-blue-600' : 'bg-white border-gray-300 hover:bg-gray-50'}`}> 
                <span className={`text-[8px] md:text-[10px] ${isActive('down') ? 'text-white' : 'text-gray-800'}`}>▼</span>
            </div>
          </div>
          
          <Key unit={1.0} label="▶" id="right" active={isActive("right")} />
        </div>
      </div>
    </div>
  );
}

interface KeyProps {
  unit: number;
  label?: string;
  topLabel?: string;
  bottomLabel?: string;
  subLabel?: boolean;
  align?: "center" | "left" | "right";
  font?: "default" | "symbol";
  fontSize?: string;
  id?: string;
  active?: boolean;
}

function Key({
  unit,
  label,
  topLabel,
  bottomLabel,
  subLabel,
  align = "center",
  fontSize,
  active = false
}: KeyProps) {
  const widthPercent = (unit / 14.5) * 100;

  // Active state styling
  const activeClass = active 
    ? "bg-blue-500 border-blue-600 text-white" 
    : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50";

  const textClass = active ? "text-white" : "text-gray-900";
  const subTextClass = active ? "text-blue-100" : "text-gray-500";

  return (
    <div style={{ width: `${widthPercent}%` }} className="p-[2px] md:p-[3px] shrink-0">
      <div 
        className={`
          h-10 md:h-12 w-full border border-b-2 rounded-md md:rounded-lg 
          flex flex-col p-1 transition-all duration-200 shadow-sm
          ${activeClass}
          ${align === 'center' ? 'items-center justify-center' : ''}
          ${align === 'left' ? 'items-start justify-end pl-1.5 md:pl-2 pb-1 md:pb-1.5' : ''}
          ${align === 'right' ? 'items-end justify-end pr-1.5 md:pr-2 pb-1 md:pb-1.5' : ''}
        `}
      >
        {label && (
          <span className={`font-medium leading-none ${fontSize || "text-[12px] md:text-[14px]"} ${textClass}`}>
            {label}
          </span>
        )}
        
        {topLabel && !bottomLabel && (
           <span className={`font-medium text-[12px] md:text-[14px] leading-none ${textClass}`}>{topLabel}</span>
        )}

        {(topLabel && bottomLabel) && (
          <div className="flex flex-col items-center gap-0.5 md:gap-1">
             <span className={`font-normal leading-none ${subLabel ? "text-[10px] md:text-[12px]" : "text-[10px] md:text-[12px]"} ${subTextClass}`}>
                {topLabel}
             </span>
             <span className={`font-medium leading-none ${subLabel ? "text-[9px] md:text-[11px]" : "text-[12px] md:text-[14px]"} ${textClass}`}>
                {bottomLabel}
             </span>
          </div>
        )}
      </div>
    </div>
  );
}
