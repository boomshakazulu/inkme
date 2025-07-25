import { Bell, Calendar, Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-lg bg-[--color-card] border border-[rgba(255,255,255,0.05)] p-6">
          <p className="text-sm text-zinc-400">Bookings</p>
          <p className="text-2xl font-bold text-white">20</p>
        </div>
        <div className="rounded-lg bg-[--color-card] border border-[rgba(255,255,255,0.05)] p-6">
          <p className="text-sm text-zinc-400">Income</p>
          <p className="text-2xl font-bold text-white">$3,400</p>
        </div>
        <div className="rounded-lg bg-[--color-card] border border-[rgba(255,255,255,0.05)] p-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-zinc-400">Requests</p>
            <p className="text-2xl font-bold text-white">8</p>
          </div>
          <Calendar className="w-6 h-6 text-zinc-400" />
        </div>
        <div className="rounded-lg bg-[--color-card] border border-[rgba(255,255,255,0.05)] p-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-zinc-400">No-Shows</p>
            <p className="text-2xl font-bold text-white">2</p>
          </div>
          <Plus className="w-6 h-6 text-zinc-400" />
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="rounded-lg bg-[--color-card] border border-[rgba(255,255,255,0.05)] p-6 shadow-xl space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">
            Upcoming Appointments
          </h2>
          <a href="#" className="text-sm text-zinc-400 hover:underline">
            View all
          </a>
        </div>
        <div className="text-sm text-zinc-400 grid grid-cols-3 gap-4 px-2">
          <span>Client</span>
          <span>Date</span>
          <span>Time</span>
        </div>
        <div className="space-y-2 px-2 text-sm text-white">
          <div className="grid grid-cols-3 gap-4 py-2 border-t border-[rgba(255,255,255,0.05)]">
            <span>Michael King</span>
            <span>April 12, 2024</span>
            <span>12:00 AM</span>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2 border-t border-[rgba(255,255,255,0.05)]">
            <span>Sophia Lee</span>
            <span>April 15, 2024</span>
            <span>11:00 AM</span>
          </div>
          <div className="grid grid-cols-3 gap-4 py-2 border-t border-[rgba(255,255,255,0.05)]">
            <span>James Carter</span>
            <span>April 12, 2024</span>
            <span>Tiger Back</span>
          </div>
        </div>
      </div>
    </div>
  );
}
