import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaXmark } from 'react-icons/fa6';
import LanguageSwitcher from './LanguageSwitcher';

const logoUrl = 'https://res.cloudinary.com/dzc5rnskc/image/upload/v1779631722/tt-removebg-preview_ukx0bz.png';

const navItems = [
  ['/', 'nav.home'],
  ['/about', 'nav.about'],
  ['/services', 'nav.services'],
  ['/kcc-services', 'nav.kcc'],
  ['/banking-services', 'nav.legal'],
  ['/contact', 'nav.contact'],
];

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${
      isActive ? 'bg-wine text-white shadow-md' : 'text-navy hover:bg-white/80 hover:text-wine'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[#eadfcb] bg-[#fff8ec]/95 px-4 py-3 shadow-glass backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-wine to-royal p-2 shadow-glow">
              <img src={logoUrl} alt="Takala Typing logo" className="h-full w-full object-contain" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xl font-black italic leading-6 sm:text-2xl">
                <span className="text-wine">Takala</span>
                <span className="text-navy"> Typing</span>
              </span>
              <span className="block truncate text-xs font-black uppercase tracking-[0.13em] text-wine sm:text-sm">
                M.P. Online Service Center
              </span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map(([path, key]) => (
              <NavLink key={path} to={path} className={linkClass}>
                {t(key)}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {open && (
          <div className="mt-4 grid gap-2 border-t border-slate-200 pt-4 lg:hidden">
            {navItems.map(([path, key]) => (
              <NavLink key={path} to={path} className={linkClass} onClick={() => setOpen(false)}>
                {t(key)}
              </NavLink>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
