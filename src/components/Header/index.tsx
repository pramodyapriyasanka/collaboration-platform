"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  const handleStickyNavbar = useCallback(() => {
    setSticky(window.scrollY >= 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, [handleStickyNavbar]);

  return (
    <header
      className={`header fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        sticky
          ? "border-b border-white/[0.06] bg-[#090E16]/80 py-3 backdrop-blur-xl saturate-150 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.3)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="relative flex items-center justify-between">
          
          <div className="flex-shrink-0 w-44">
            <Link href="/" className="block group">
              <Image
                src="/images/logo/branding-light.png"
                alt="Logo"
                width={150}
                height={40}
                priority
                className={`${
                  sticky ? "hidden" : "dark:hidden"
                } transition-all duration-300 group-hover:opacity-80 object-contain`}
              />

              <Image
                src="/images/logo/branding-dark.png"
                alt="Logo"
                width={150}
                height={40}
                priority
                className={`${
                  sticky ? "block" : "hidden dark:block"
                } transition-all duration-300 group-hover:opacity-80 object-contain`}
              />
            </Link>
          </div>

          <div className="flex items-center justify-center flex-grow">
            <nav
              className={`absolute top-full right-0 mt-4 w-64 rounded-2xl border border-white/10 bg-[#0F1522] p-6 lg:static lg:mt-0 lg:w-auto lg:border-none lg:bg-transparent lg:p-0 transition-all duration-300 ${
                navbarOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible lg:visible lg:opacity-100 -translate-y-2 lg:translate-y-0"
              }`}
            >
              <ul className="flex flex-col gap-2 lg:flex-row lg:gap-10">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    {menuItem.path ? (
                      <Link
                        href={menuItem.path}
                        className={`text-[13px] font-semibold uppercase tracking-[1.5px] transition-all duration-300 hover:text-white ${
                          pathname === menuItem.path ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {menuItem.title}
                        {pathname === menuItem.path && (
                          <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-gradient-to-r from-blue-500 to-cyan-400"></span>
                        )}
                      </Link>
                    ) : (
                      <div className="relative group/sub">
                        <button 
                          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                          className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-[1.5px] text-gray-400 transition-all group-hover:text-white"
                        >
                          {menuItem.title}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover/sub:rotate-180">
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </button>
                        
                        <div className={`lg:absolute left-1/2 -translate-x-1/2 top-full mt-4 w-56 rounded-xl border border-white/10 bg-[#0F1522] p-2 shadow-2xl transition-all duration-300 lg:invisible lg:opacity-0 lg:group-hover/sub:visible lg:group-hover/sub:opacity-100 lg:group-hover/sub:translate-y-0 ${openIndex === index ? "block" : "hidden lg:block -translate-y-2"}`}>
                          {menuItem.submenu?.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.path || "#"}
                              className="block rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-400 hover:bg-white/5 hover:text-white transition-all"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/demo"
              className="hidden lg:flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-[12px] font-bold uppercase tracking-widest text-black transition-all hover:bg-gray-200 active:scale-95"
            >
              Request Demo
            </Link>
            
            <div className="flex items-center border-l border-white/10 pl-6">
              <ThemeToggler />
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="ml-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 lg:hidden"
              >
                <div className="flex flex-col gap-1.5">
                  <span className={`h-0.5 w-5 bg-white transition-all ${navbarOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                  <span className={`h-0.5 w-5 bg-white transition-all ${navbarOpen ? "opacity-0" : ""}`}></span>
                  <span className={`h-0.5 w-5 bg-white transition-all ${navbarOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;