'use client'
import {
  ArrowLeftRight,
  Clock,
  CreditCard,
  Home,
  Landmark,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", icon: <Home className="w-5 h-5" />, href: "/" },
  { name: "Transactions", icon: <ArrowLeftRight className="w-5 h-5" />, href: "/transactions" },
  { name: "Budgets", icon: <Clock className="w-5 h-5" />, href: "/budgets" },
  { name: "Accounts", icon: <CreditCard className="w-5 h-5" />, href: "/accounts" },
];
const Sidebar = () => {
     const pathname = usePathname();
  return (
    <div className="h-screen flex flex-col w-64 text-text-primary border-zinc-800/60 border-r">
      {/* Area 1: Logo  */}
      <div className="flex items-center justify-start p-6 h-24 gap-3 border-zinc-800/60 border-b">
        <div className="bg-avocado-500 p-2 rounded-xl shadow-lg shadow-avocado-600/40 ">
          <Landmark className="w-5 h-5 text-black" />
        </div>
        <div>
          <span className="text-base font-bold tracking-tight text-text-primary">
            FinanceFlow
          </span>
          <p className="text-xs text-text-secondary leading-none mt-0.5">
            Personal Finance
          </p>
        </div>
      </div>
      {/* Navigation */}
     <nav className="flex flex-col gap-1 px-3 py-4  overflow-y-auto">
        <p className="px-3 mb-2  text-xs font-semibold uppercase tracking-widest text-text-secondary">Menu</p>
        {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex  relative items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                active ? "bg-primary/20 text-avocado-500" : "text-text-secondary hover:bg-zinc-800/60 hover:text-text-primary"
              }`}
            >
              <span className="">
                {item.icon}
              </span>
              <span>
                 {item.name}
              </span>
              {active && <span className="w-1.5 h-1.5 absolute bg-avocado-500 right-2 mr-1 rounded-full" />}
               
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
