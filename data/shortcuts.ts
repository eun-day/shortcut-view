export interface Shortcut {
  id: string;
  keys: string[];
  label: string;
  description: string;
  tip?: string;
  relatedIds?: string[];
}

export interface Category {
  id: string;
  label: string;
  icon: string;
  description: string;
  shortcutIds: string[];
}

// 1. Master Data: Enhanced with comprehensive relatedIds
export const masterShortcuts: Shortcut[] = [
  // --- Essential / System ---
  { 
    id: "spotlight", 
    keys: ["command", "space"], 
    label: "⌘ + Space", 
    description: "Opens Spotlight search. Start typing to find apps, files, or perform calculations.",
    tip: "Spotlight isn't just for files; try typing '100 USD to KRW' or '55 * 12' for instant calculations and conversions.",
    relatedIds: ["find"]
  },
  { 
    id: "quit-app", 
    keys: ["command", "q"], 
    label: "⌘ + Q", 
    description: "Completely quits the current app.", 
    relatedIds: ["close-window", "force-quit", "hide-app"],
    tip: "Unlike the red 'X' button which often just closes the window, this fully stops the app and frees up system memory."
  },
  { 
    id: "app-switcher", 
    keys: ["command", "tab"], 
    label: "⌘ + Tab", 
    description: "Switch between open apps.",
    tip: "While holding Command, press Tab repeatedly to cycle, or press 'Q' to quit the highlighted app without even switching to it.",
    relatedIds: ["window-switcher", "mission-control"]
  },
  { 
    id: "window-switcher", 
    keys: ["command", "`"], 
    label: "⌘ + `", 
    description: "Switch between windows of the frontmost app.",
    tip: "Perfect when you have multiple browser windows or Word documents open and need to jump between them quickly.",
    relatedIds: ["app-switcher", "mission-control"]
  },
  { 
    id: "preferences", 
    keys: ["command", ","], 
    label: "⌘ + ,", 
    description: "Open Preferences/Settings for the front app.",
    tip: "This works in almost every Mac app, so you don't have to look through menus to find the settings."
  },
  { 
    id: "quick-look", 
    keys: ["space"], 
    label: "Space", 
    description: "Activate Quick Look to preview the selected item without opening it.",
    tip: "Highlight a file and hit Space to see its content instantly without waiting for an app to launch. It's the most loved Mac feature!",
    relatedIds: ["open", "slideshow", "get-info"]
  },
  { 
    id: "force-quit", 
    keys: ["command", "option", "esc"], 
    label: "⌥ + ⌘ + Esc", 
    description: "Force quit an unresponsive app.",
    tip: "The Mac equivalent of 'Ctrl+Alt+Delete'. Use this when an app is spinning (not responding) to kill it instantly.",
    relatedIds: ["quit-app"]
  },
  { 
    id: "lock-screen", 
    keys: ["control", "command", "q"], 
    label: "⌃ + ⌘ + Q", 
    description: "Lock the screen immediately.",
    tip: "The fastest way to secure your Mac when walking away. Requires your password or Touch ID to get back in."
  },
  { 
    id: "toggle-dock", 
    keys: ["command", "option", "d"], 
    label: "⌥ + ⌘ + D", 
    description: "Hide or show the Dock.",
    tip: "Auto-hiding the Dock gives you more vertical screen space for your apps and documents.",
    relatedIds: ["fullscreen", "show-desktop"]
  },
  { 
    id: "mission-control", 
    keys: ["control", "up"], 
    label: "⌃ + ▲", 
    description: "Open Mission Control to see all open windows.",
    tip: "Shows all open windows at once. You can also drag a window to the top of the screen here to create a new Desktop space.",
    relatedIds: ["show-desktop", "app-switcher", "window-switcher"]
  },
  { 
    id: "show-desktop", 
    keys: ["command", "f3"], 
    label: "⌘ + F3", 
    description: "Show the desktop by pushing away all app windows.",
    tip: "It temporarily hides all windows so you can grab a file from your desktop. Press it again to bring the windows back.",
    relatedIds: ["mission-control", "toggle-dock"]
  },
  { 
    id: "fullscreen", 
    keys: ["control", "command", "f"], 
    label: "⌃ + ⌘ + F", 
    description: "Toggles Full Screen mode for the current app window.",
    tip: "Ideal for focusing on a single task. To exit, just press the shortcut again or hit the 'Esc' key.",
    relatedIds: ["toggle-dock", "maximize"]
  },
  { 
    id: "emoji-viewer", 
    keys: ["control", "command", "space"], 
    label: "⌃ + ⌘ + Space", 
    description: "Show the Character Viewer (Emojis and Symbols).",
    tip: "Use this in any text field to quickly find emojis, math symbols, or even pictograms by searching for keywords."
  },

  // --- Screen Capture & Recording ---
  { 
    id: "screenshot-full", 
    keys: ["command", "shift", "3"], 
    label: "⇧ + ⌘ + 3", 
    description: "Instantly takes a picture of your entire screen and saves it as a file.",
    tip: "A small thumbnail will appear in the corner; click it to crop or annotate before it saves to your desktop.",
    relatedIds: ["screenshot-area", "screenshot-window", "screenshot-panel", "clipboard-full"]
  },
  { 
    id: "screenshot-area", 
    keys: ["command", "shift", "4"], 
    label: "⇧ + ⌘ + 4", 
    description: "Turns your cursor into a crosshair, allowing you to drag and select a specific area to capture.",
    tip: "Press 'Space' after this shortcut to turn the cursor into a camera icon—then click any window to capture it perfectly with a shadow.",
    relatedIds: ["screenshot-full", "screenshot-window", "clipboard-area"]
  },
  { 
    id: "screenshot-window", 
    keys: ["command", "shift", "4", "space"], 
    label: "⇧ + ⌘ + 4 then Space", 
    description: "Captures a specific window or menu bar cleanly, ignoring the background.",
    tip: "Hold the 'Option' key while clicking the window to capture it without the default drop shadow. This makes the screenshot look cleaner in documents.",
    relatedIds: ["screenshot-area", "screenshot-full"]
  },
  { 
    id: "screenshot-panel", 
    keys: ["command", "shift", "5"], 
    label: "⇧ + ⌘ + 5", 
    description: "Opens the interactive screenshot and screen recording control panel.",
    tip: "This is the only native way to record a video of your screen. You can also set a timer (5 or 10 seconds) here before the capture starts.",
    relatedIds: ["screenshot-full", "screenshot-area"]
  },
  { 
    id: "clipboard-full", 
    keys: ["control", "command", "shift", "3"], 
    label: "⌃ + ⇧ + ⌘ + 3", 
    description: "Captures the entire screen but saves the image to your clipboard instead of a file.",
    tip: "Use this when you want to paste the screenshot directly into a message, email, or document without cluttering your desktop with files.",
    relatedIds: ["screenshot-full", "clipboard-area"]
  },
  { 
    id: "clipboard-area", 
    keys: ["control", "command", "shift", "4"], 
    label: "⌃ + ⇧ + ⌘ + 4", 
    description: "Captures a selected area and copies it directly to the clipboard.",
    tip: "If you change your mind while selecting an area, press 'Esc' to cancel the action completely.",
    relatedIds: ["screenshot-area", "clipboard-full"]
  },
  { 
    id: "touchbar-capture", 
    keys: ["command", "shift", "6"], 
    label: "⇧ + ⌘ + 6", 
    description: "Captures the current contents of the Touch Bar as an image file.",
    tip: "This shortcut only functions on MacBook Pro models that are equipped with a physical Touch Bar."
  },

  // --- Document & Text Productivity ---
  { 
    id: "move-word", 
    keys: ["option", "left"], 
    label: "⌥ + Arrow", 
    description: "Jumps the cursor one word at a time instead of moving character by character.",
    tip: "Hold the 'Shift' key while doing this to highlight and select text word-by-word instantly.",
    relatedIds: ["move-line-end", "move-doc-end", "delete-word"]
  },
  { 
    id: "move-line-end", 
    keys: ["command", "right"], 
    label: "⌘ + Arrow", 
    description: "Instantly moves the cursor to the very beginning or end of the current line.",
    tip: "If you press 'Delete' (Backspace) while holding Command, it will delete everything from the cursor to the start of the line.",
    relatedIds: ["move-word", "move-doc-end", "kill-line"]
  },
  { 
    id: "move-doc-end", 
    keys: ["command", "down"], 
    label: "⌘ + Up/Down", 
    description: "Moves the cursor directly to the top (beginning) or bottom (end) of the entire document.",
    tip: "In some web browsers, this combination functions like the 'Home' and 'End' keys found on Windows keyboards.",
    relatedIds: ["move-line-end", "move-word"]
  },
  { 
    id: "delete-word", 
    keys: ["option", "delete"], 
    label: "⌥ + ⌫", 
    description: "Erases the entire word situated to the left of the cursor.",
    tip: "This is significantly faster than repeatedly pressing the Delete key when fixing a typo.",
    relatedIds: ["move-word", "kill-line"]
  },
  { 
    id: "kill-line", 
    keys: ["control", "k"], 
    label: "⌃ + K", 
    description: "Cuts (deletes) all text from the cursor's current position to the end of the line or paragraph.",
    tip: "This is a hidden 'Emacs-style' shortcut that works in almost all native macOS text fields, including Terminal and TextEdit.",
    relatedIds: ["move-line-end", "delete-word", "paste"]
  },
  { 
    id: "paste-match-style", 
    keys: ["option", "shift", "command", "v"], 
    label: "⌥ + ⇧ + ⌘ + V", 
    description: "Pastes copied text while stripping its original formatting (Paste and Match Style).",
    tip: "Essential when copying text from a website into a document to avoid bringing over unwanted fonts, sizes, or background colors.",
    relatedIds: ["paste", "copy"]
  },
  { 
    id: "add-link", 
    keys: ["command", "k"], 
    label: "⌘ + K", 
    description: "Turns the currently selected text into a clickable hyperlink.",
    tip: "This works in most rich text editors like Mail, Notes, and Pages, but usually not in plain text code editors."
  },
  { 
    id: "find-misspelled", 
    keys: ["command", ";"], 
    label: "⌘ + ;", 
    description: "Finds and highlights the next misspelled word in your document.",
    tip: "Useful for quickly proofreading a document without running a full spell-check process."
  },

  // --- File & Finder Management ---
  { 
    id: "duplicate", 
    keys: ["command", "d"], 
    label: "⌘ + D", 
    description: "Duplicate the selected files.",
    tip: "Instead of copy-pasting a file to make a backup, use this to instantly create a copy in the same folder.",
    relatedIds: ["copy", "paste", "move-file"]
  },
  { 
    id: "eject", 
    keys: ["command", "e"], 
    label: "⌘ + E", 
    description: "Eject the selected disk or volume.",
    tip: "Select a USB drive or disk image on your desktop or Finder sidebar and use this to safely remove it."
  },
  { 
    id: "find", 
    keys: ["command", "f"], 
    label: "⌘ + F", 
    description: "Opens a search bar to locate specific words or phrases.",
    tip: "Use this to search within the current folder. Press 'Cmd+F', then click 'Filename' to search by name instead of content.",
    relatedIds: ["spotlight"]
  },
  { 
    id: "get-info", 
    keys: ["command", "i"], 
    label: "⌘ + I", 
    description: "Show the Get Info window for a selected file.",
    tip: "Check file size, creation date, or change the default app for opening this file type here.",
    relatedIds: ["quick-look"]
  },
  { 
    id: "show-original", 
    keys: ["command", "r"], 
    label: "⌘ + R", 
    description: "Show the original file for the selected alias.",
    tip: "Lost track of where an alias (shortcut) points to? This takes you straight to the source file."
  },
  { 
    id: "new-finder-window", 
    keys: ["command", "n"], 
    label: "⌘ + N", 
    description: "Open a new Finder window.",
    tip: "Use this when you need to move files between two different folder locations side-by-side.",
    relatedIds: ["new-tab", "new-document"]
  },
  { 
    id: "open", 
    keys: ["command", "o"], 
    label: "⌘ + O", 
    description: "Open the selected item, or open a dialog to select a file.",
    tip: "Double-clicking is fine, but keeping your hands on the keyboard is faster.",
    relatedIds: ["quick-look", "finder-open"]
  },
  { 
    id: "view-options", 
    keys: ["command", "j"], 
    label: "⌘ + J", 
    description: "Show View Options for the current folder.",
    tip: "Want bigger icons or to sort by 'Date Added'? Customize the folder layout exactly how you like it here."
  },
  { 
    id: "new-tab", 
    keys: ["command", "t"], 
    label: "⌘ + T", 
    description: "Open a new tab in the current Finder window.",
    tip: "Keep your desktop clean! Manage multiple folders in a single window using tabs, just like a web browser.",
    relatedIds: ["new-finder-window", "toggle-tab-bar"]
  },
  { 
    id: "toggle-tab-bar", 
    keys: ["command", "shift", "t"], 
    label: "⇧ + ⌘ + T", 
    description: "Show or hide the tab bar in Finder windows.",
    tip: "Useful if you prefer a minimal look, or need to see the tab bar to drag files between tabs.",
    relatedIds: ["new-tab"]
  },
  { 
    id: "view-as-icons", 
    keys: ["command", "1"], 
    label: "⌘ + 1", 
    description: "View items in the Finder window as icons.",
    tip: "Best for browsing photos or videos where thumbnails matter.",
    relatedIds: ["view-as-list", "view-as-columns", "view-as-gallery"]
  },
  { 
    id: "view-as-list", 
    keys: ["command", "2"], 
    label: "⌘ + 2", 
    description: "View items in the Finder window as a list.",
    tip: "The most detailed view. Click the column headers (Name, Date, Size) to sort instantly.",
    relatedIds: ["view-as-icons", "view-as-columns", "view-as-gallery"]
  },
  { 
    id: "view-as-columns", 
    keys: ["command", "3"], 
    label: "⌘ + 3", 
    description: "View items in the Finder window in columns.",
    tip: "The pro's choice. Navigate deep into nested folders without losing track of your path.",
    relatedIds: ["view-as-icons", "view-as-list", "view-as-gallery"]
  },
  { 
    id: "view-as-gallery", 
    keys: ["command", "4"], 
    label: "⌘ + 4", 
    description: "View items in the Finder window in a gallery.",
    tip: "Perfect for visual browsing. Shows a large preview of the selected file with a filmstrip below.",
    relatedIds: ["view-as-icons", "view-as-list", "view-as-columns"]
  },
  { 
    id: "nav-back", 
    keys: ["command", "["], 
    label: "⌘ + [", 
    description: "Go back to the previous folder.",
    tip: "Just like the 'Back' button in a web browser. Useful if you accidentally entered the wrong folder.",
    relatedIds: ["nav-forward", "finder-up"]
  },
  { 
    id: "nav-forward", 
    keys: ["command", "]"], 
    label: "⌘ + ]", 
    description: "Move forward to the next folder.",
    tip: "Go forward to the folder you just came from.",
    relatedIds: ["nav-back", "finder-up"]
  },
  { 
    id: "finder-up", 
    keys: ["command", "up"], 
    label: "⌘ + ▲", 
    description: "Open the parent folder (Enclosing folder).",
    tip: "Navigates to the parent folder. Keep pressing it to eventually reach your hard drive's root.",
    relatedIds: ["nav-back", "nav-forward"]
  },
  { 
    id: "finder-open", 
    keys: ["command", "down"], 
    label: "⌘ + ▼", 
    description: "Opens the selected folder or runs the file.",
    relatedIds: ["open", "finder-up"] 
  },
  { 
    id: "trash", 
    keys: ["command", "delete"], 
    label: "⌘ + ⌫", 
    description: "Move the selected item to the Trash.",
    tip: "Files aren't deleted yet! They sit in the Trash until you empty it, so it's safe to use.",
    relatedIds: ["empty-trash", "delete-word"]
  },
  { 
    id: "empty-trash", 
    keys: ["command", "shift", "delete"], 
    label: "⇧ + ⌘ + ⌫", 
    description: "Empty the Trash immediately.",
    tip: "Warning: This action cannot be undone. Make sure you don't need anything in the Trash!",
    relatedIds: ["trash"]
  },
  { 
    id: "go-to-folder", 
    keys: ["command", "shift", "g"], 
    label: "⇧ + ⌘ + G", 
    description: "Open a 'Go to Folder' window.",
    tip: "Know the path? Type '/Library' or '~/Downloads' to jump there instantly."
  },
  { 
    id: "recents", 
    keys: ["command", "shift", "f"], 
    label: "⇧ + ⌘ + F", 
    description: "Show the Recents window.",
    tip: "Can't remember where you saved that file? It's likely in this list."
  },
  { 
    id: "icloud-drive", 
    keys: ["command", "shift", "i"], 
    label: "⇧ + ⌘ + I", 
    description: "Open the iCloud Drive folder.",
    tip: "Quick access to files synced across your Mac, iPhone, and iPad."
  },
  { 
    id: "computer-window", 
    keys: ["command", "shift", "c"], 
    label: "⇧ + ⌘ + C", 
    description: "Open the Computer window.",
    tip: "See all connected hard drives, USB sticks, and network servers in one place."
  },
  { 
    id: "desktop-folder", 
    keys: ["command", "shift", "d"], 
    label: "⇧ + ⌘ + D", 
    description: "Open the Desktop folder.",
    tip: "Quickly jump to the Desktop folder to find your screenshots or temporary files.",
    relatedIds: ["show-desktop"]
  },
  { 
    id: "home-folder", 
    keys: ["command", "shift", "h"], 
    label: "⇧ + ⌘ + H", 
    description: "Open the Home folder of the current user account.",
    tip: "Your personal user folder containing Documents, Downloads, Pictures, and Music."
  },
  { 
    id: "downloads-folder", 
    keys: ["command", "option", "l"], 
    label: "⌥ + ⌘ + L", 
    description: "Open the Downloads folder.",
    tip: "The default landing spot for files from Safari or Chrome. Clean it out often!"
  },
  { 
    id: "toggle-path-bar", 
    keys: ["command", "option", "p"], 
    label: "⌥ + ⌘ + P", 
    description: "Hide or show the path bar.",
    tip: "Shows the full breadcrumb path at the bottom of the window. Double-click any folder in the path to jump there."
  },
  { 
    id: "toggle-sidebar", 
    keys: ["command", "option", "s"], 
    label: "⌥ + ⌘ + S", 
    description: "Hide or show the Sidebar in Finder windows.",
    tip: "Hide the sidebar to focus on file content, or show it for quick navigation."
  },
  { 
    id: "toggle-preview", 
    keys: ["command", "shift", "p"], 
    label: "⇧ + ⌘ + P", 
    description: "Hide or show the Preview pane.",
    tip: "Shows metadata and a large preview on the right. Great for checking photo dimensions without opening.",
    relatedIds: ["quick-look"]
  },
  { 
    id: "toggle-status-bar", 
    keys: ["command", "/"], 
    label: "⌘ + /", 
    description: "Hide or show the status bar.",
    tip: "Check how much free space is left on your drive at a glance."
  },
  { 
    id: "slideshow", 
    keys: ["command", "option", "y"], 
    label: "⌥ + ⌘ + Y", 
    description: "View a Quick Look slideshow of the selected files.",
    tip: "Select multiple photos and use this to view them in a full-screen slideshow presentation.",
    relatedIds: ["quick-look"]
  },
  { 
    id: "hidden-files", 
    keys: ["command", "shift", "."], 
    label: "⇧ + ⌘ + .", 
    description: "Show or hide hidden files and folders.",
    tip: "Reveals system files and dot-files (like .gitignore). Essential for developers."
  },
  { 
    id: "rename", 
    keys: ["enter"], 
    label: "Return", 
    description: "Rename the selected item.",
    tip: "On Windows, Enter opens a file. On Mac, it renames it. To open, use Cmd+O or Cmd+Down.",
    relatedIds: ["open"]
  },
  { 
    id: "move-file", 
    keys: ["command", "option", "v"], 
    label: "⌥ + ⌘ + V", 
    description: "Move files in the clipboard to the current location (Move instead of Copy).",
    tip: "Mac doesn't have 'Ctrl+X' for files. Instead, Copy (Cmd+C) first, then use this shortcut to Move.",
    relatedIds: ["copy", "paste", "cut"]
  },

  // --- Editing & Text ---
  { id: "copy", keys: ["command", "c"], label: "⌘ + C", description: "Copy the selected item to the clipboard.", relatedIds: ["paste", "cut", "move-file"] },
  { id: "paste", keys: ["command", "v"], label: "⌘ + V", description: "Paste the contents of the clipboard.", relatedIds: ["copy", "cut", "paste-match-style"] },
  { id: "cut", keys: ["command", "x"], label: "⌘ + X", description: "Remove the selected item and copy it to the clipboard.", relatedIds: ["copy", "paste"] },
  { id: "select-all", keys: ["command", "a"], label: "⌘ + A", description: "Select all items." },
  { id: "undo", keys: ["command", "z"], label: "⌘ + Z", description: "Undo the previous command.", relatedIds: ["redo"] },
  { id: "redo", keys: ["command", "shift", "z"], label: "⇧ + ⌘ + Z", description: "Reverse the undo command.", relatedIds: ["undo"] },
  { id: "save", keys: ["command", "s"], label: "⌘ + S", description: "Save the current document." },
  { id: "new-document", keys: ["command", "n"], label: "⌘ + N", description: "Open a new document or window.", relatedIds: ["new-finder-window"] },
  { id: "print", keys: ["command", "p"], label: "⌘ + P", description: "Print the current document." },
  { id: "minimize", keys: ["command", "m"], label: "⌘ + M", description: "Minimize the front window to the Dock.", relatedIds: ["hide-app", "close-window"] },
  { id: "hide-app", keys: ["command", "h"], label: "⌘ + H", description: "Hide the windows of the front app.", relatedIds: ["minimize", "quit-app"] },
  { id: "close-window", keys: ["command", "w"], label: "⌘ + W", description: "Close the front window.", relatedIds: ["quit-app", "minimize"] }
];

// 2. Categories with shared shortcut IDs
export const categories: Category[] = [
  {
    id: "Essential",
    label: "Beginner Essentials",
    icon: "⭐",
    description: "Must-know basic shortcuts for new Mac users",
    shortcutIds: [
      "spotlight", "quit-app", "app-switcher", "window-switcher", "preferences",
      "rename", "quick-look", "finder-up", "open", "move-file", "copy", "paste",
      "screenshot-full", "screenshot-area", "emoji-viewer", "trash", "fullscreen", 
      "mission-control", "show-desktop", "force-quit", "lock-screen", "toggle-dock"
    ]
  },
  {
    id: "Finder",
    label: "File & Finder",
    icon: "📁",
    description: "Master macOS Finder and file management",
    shortcutIds: [
      "new-finder-window", "new-tab", "duplicate", "open", "get-info", "show-original",
      "trash", "empty-trash", "rename", "move-file", "find", "copy", "paste", 
      "view-as-icons", "view-as-list", "view-as-columns", "view-as-gallery",
      "nav-back", "nav-forward", "finder-up", "go-to-folder", "recents", "icloud-drive",
      "desktop-folder", "home-folder", "downloads-folder", "computer-window",
      "toggle-sidebar", "toggle-tab-bar", "toggle-path-bar", "toggle-preview", 
      "toggle-status-bar", "hidden-files", "slideshow"
    ]
  },
  {
    id: "Text",
    label: "Text & Docs",
    icon: "📝",
    description: "Boost typing and document editing speed",
    shortcutIds: [
      "copy", "paste", "cut", "undo", "redo", "select-all", "find", "find-misspelled",
      "move-word", "move-line-end", "move-doc-end", "delete-word", "kill-line",
      "paste-match-style", "add-link", "emoji-viewer", "save", "print"
    ]
  },
  {
    id: "Capture",
    label: "Capture & Record",
    icon: "📷",
    description: "Precise control for screenshots and recordings",
    shortcutIds: [
      "screenshot-full", "screenshot-area", "screenshot-window", "screenshot-panel",
      "clipboard-full", "clipboard-area", "touchbar-capture"
    ]
  }
];

// Helper to get shortcuts for a category
export const getShortcutsByCategory = (categoryId: string): Shortcut[] => {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return masterShortcuts;
  return category.shortcutIds
    .map(id => masterShortcuts.find(s => s.id === id))
    .filter((s): s is Shortcut => !!s);
};