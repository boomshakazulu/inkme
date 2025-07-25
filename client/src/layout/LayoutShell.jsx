import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Calendar", icon: Calendar, href: "/calendar" },
];

export default function LayoutShell() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      {/* Sidebar */}
      <aside
        className={`transition-all duration-300 bg-secondary shadow-xl ${
          open ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <h1
            className={`text-xl font-bold text-white transition-opacity ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            InkMe
          </h1>
          <Button
            variant="ghost"
            size="icon"
            className="text-white"
            onClick={() => setOpen(!open)}
          >
            <Menu className="w-5 h-5" />
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

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
