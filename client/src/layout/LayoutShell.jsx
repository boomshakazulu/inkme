import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import TopBar from "@/components/topBar/TopBar";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Calendar", icon: Calendar, href: "/calendar" },
];

export default function LayoutShell() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* Top Bar (always full width) */}
      <TopBar />

      {/* Content Wrapper */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`transition-all duration-300 bg-secondary shadow-xl flex flex-col ${
            open ? "w-64" : "w-20"
          }`}
        >
          <div
            className={`h-16 px-4 flex ${
              open ? "justify-end items-center" : "justify-center items-center"
            }`}
          >
            <Button
              variant="ghost"
              size="xlIcon"
              className="text-white"
              onClick={() => setOpen(!open)}
            >
              <Menu className="size-8" />
            </Button>
          </div>

          <nav className="flex flex-col gap-2 p-2">
            {navItems.map((item) => {
              const active = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center gap-3 rounded-md px-4 py-2 transition-all ${
                    active
                      ? "bg-muted text-white"
                      : "text-muted hover:bg-muted/70 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {open && <span className="text-sm">{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
