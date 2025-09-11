import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Dashboard", active: false },
  { name: "Upload Data", active: false },
  { name: "Induction Plan", active: true },
  { name: "History", active: false },
  { name: "Admin", active: false },
  { name: "Help", active: false },
];

export function Sidebar() {
  return (
    <nav className="w-60 bg-card shadow-lg flex flex-col min-h-screen border-r border-border">
      <div className="p-6">
        <div className="font-bold text-xl text-primary">InductFlow</div>
      </div>
      
      <div className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={cn(
                  "w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                  item.active
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-4 text-xs text-muted-foreground border-t border-border">
        Made with <span className="text-primary font-bold">♥️</span>
      </div>
    </nav>
  );
}