export interface Shortcut {
  id: string; // This will be used for sorting/indexing (e.g., "copy", "paste")
  keys: string[]; // Key IDs for keyboard mapping (e.g., ["command", "c"])
  label: string;  // Display label (e.g., "⌘ + C")
  description: string; // English description
  category: "System" | "Finder" | "Edit";
  relatedIds?: string[];
}

export const systemShortcuts: Shortcut[] = [
  {
    id: "copy",
    keys: ["command", "c"],
    label: "⌘ + C",
    description: "Copy the selected item to the clipboard.",
    category: "Edit",
    relatedIds: ["paste", "cut", "select-all"]
  },
  {
    id: "paste",
    keys: ["command", "v"],
    label: "⌘ + V",
    description: "Paste the contents of the clipboard into the current document or app.",
    category: "Edit",
    relatedIds: ["copy", "cut"]
  },
  {
    id: "cut",
    keys: ["command", "x"],
    label: "⌘ + X",
    description: "Remove the selected item and copy it to the clipboard.",
    category: "Edit",
    relatedIds: ["copy", "paste"]
  },
  {
    id: "undo",
    keys: ["command", "z"],
    label: "⌘ + Z",
    description: "Undo the previous command.",
    category: "Edit",
    relatedIds: ["redo"]
  },
  {
    id: "redo",
    keys: ["command", "shift", "z"],
    label: "⌘ + ⇧ + Z",
    description: "Reverse the undo command.",
    category: "Edit",
    relatedIds: ["undo"]
  },
  {
    id: "select-all",
    keys: ["command", "a"],
    label: "⌘ + A",
    description: "Select all items in the frontmost finder window.",
    category: "Edit",
    relatedIds: ["copy"]
  },
  {
    id: "spotlight",
    keys: ["command", "space"],
    label: "⌘ + Space",
    description: "Show or hide the Spotlight search field.",
    category: "System",
  },
  {
    id: "app-switcher",
    keys: ["command", "tab"],
    label: "⌘ + Tab",
    description: "Switch to the next most recently used app among your open apps.",
    category: "System",
  },
  {
    id: "force-quit",
    keys: ["command", "option", "esc"],
    label: "⌘ + ⌥ + Esc",
    description: "Force quit an app.",
    category: "System",
  },
  {
    id: "screenshot-full",
    keys: ["command", "shift", "3"],
    label: "⌘ + ⇧ + 3",
    description: "Take a screenshot of your entire screen.",
    category: "System",
    relatedIds: ["screenshot-area"]
  },
  {
    id: "screenshot-area",
    keys: ["command", "shift", "4"],
    label: "⌘ + ⇧ + 4",
    description: "Take a screenshot of a selected portion of your screen.",
    category: "System",
    relatedIds: ["screenshot-full"]
  },
  {
    id: "find",
    keys: ["command", "f"],
    label: "⌘ + F",
    description: "Find items in a document or open a Find window.",
    category: "Edit",
  },
  {
    id: "close-window",
    keys: ["command", "w"],
    label: "⌘ + W",
    description: "Close the front window. To close all windows of the app, press Option-Command-W.",
    category: "System",
    relatedIds: ["quit-app"]
  },
  {
    id: "quit-app",
    keys: ["command", "q"],
    label: "⌘ + Q",
    description: "Quit the app.",
    category: "System",
    relatedIds: ["close-window"]
  },
  {
    id: "minimize",
    keys: ["command", "m"],
    label: "⌘ + M",
    description: "Minimize the front window to the Dock.",
    category: "System",
  },
  {
    id: "new-document",
    keys: ["command", "n"],
    label: "⌘ + N",
    description: "Open a new document or window.",
    category: "System",
  },
  {
    id: "open",
    keys: ["command", "o"],
    label: "⌘ + O",
    description: "Open a selected item, or open a dialog to select a file to open.",
    category: "System",
  },
  {
    id: "print",
    keys: ["command", "p"],
    label: "⌘ + P",
    description: "Print the current document.",
    category: "System",
  },
  {
    id: "save",
    keys: ["command", "s"],
    label: "⌘ + S",
    description: "Save the current document.",
    category: "System",
  },
  {
    id: "hide-app",
    keys: ["command", "h"],
    label: "⌘ + H",
    description: "Hide the windows of the front app.",
    category: "System",
  }
];