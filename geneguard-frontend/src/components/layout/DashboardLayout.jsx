import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, Bell, Search, User } from 'lucide-react';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-1 flex-col lg:ml-0">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-md lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 sm:flex">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search analytics..."
                className="w-48 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            </button>
            <Link
              to="/"
              className="hidden text-sm font-medium text-primary-600 hover:text-primary-700 sm:block"
            >
              Home
            </Link>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-100">
              <User className="h-4 w-4 text-primary-600" />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
