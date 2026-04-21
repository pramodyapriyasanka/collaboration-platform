"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-stroke bg-white pt-20 dark:border-white/5 dark:bg-[#080B11] lg:pt-28">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(74,108,247,0.05)_0%,transparent_100%)]"></div>

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          
          {/* --- Brand Insight & Mission --- */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[380px]">
              <Link href="/" className="group mb-8 inline-block transition-transform hover:scale-95">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt="Hela Ahasa"
                  className="w-full dark:hidden"
                  width={150}
                  height={35}
                />
                <Image
                  src="/images/logo/logo.svg"
                  alt="Hela Ahasa"
                  className="hidden w-full dark:block"
                  width={150}
                  height={35}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color opacity-90 dark:text-gray-400">
                Synchronizing the future of work. <span className="text-primary font-medium">Hela Ahasa</span> empowers high-performance teams with a secure, unified workspace built on next-gen cloud sovereignty.
              </p>
              
              {/* --- Social Connectivity --- */}
              <div className="flex items-center gap-3">
                <SocialLink href="https://linkedin.com" platform="linkedin" />
                <SocialLink href="https://twitter.com" platform="twitter" />
                <SocialLink href="https://facebook.com" platform="facebook" />
                <SocialLink href="https://github.com" platform="github" />
              </div>
            </div>
          </div>

          {/* --- Navigation Columns --- */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <FooterColumn title="Platform">
              <FooterLink href="/#features">Core Features</FooterLink>
              <FooterLink href="/#pricing">Plans & Pricing</FooterLink>
              <FooterLink href="/demo">Book a Demo</FooterLink>
              <FooterLink href="/about">Our Roadmap</FooterLink>
            </FooterColumn>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <FooterColumn title="Transparency">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/tos">Terms of Service</FooterLink>
              <FooterLink href="/security">Security Center</FooterLink>
              <FooterLink href="/refund-policy">Refund Policy</FooterLink>
            </FooterColumn>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <FooterColumn title="Connect">
              <FooterLink href="/contact">Support Center</FooterLink>
              <FooterLink href="/careers">Join the Mission</FooterLink>
              <div className="mt-8 rounded-xl border border-stroke bg-gray-light/30 p-4 dark:border-white/5 dark:bg-white/5">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Global HQ</p>
                <p className="text-sm text-body-color dark:text-gray-400 leading-snug">
                  Colombo, Sri Lanka <br />
                  <span className="mt-2 block font-medium dark:text-white">support@helaahasa.com</span>
                </p>
              </div>
            </FooterColumn>
          </div>
        </div>

        {/* --- Refined Bottom Bar --- */}
        <div className="mt-16 border-t border-stroke py-10 dark:border-white/5">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
               <p className="text-sm font-medium text-body-color dark:text-gray-500">
                &copy; {currentYear} <span className="text-black dark:text-white">Hela Ahasa Inc.</span> 
              </p>
              <p className="text-xs text-gray-500 italic">Built for modern digital sovereignty.</p>
            </div>
            
            <div className="flex items-center gap-8">
              {/* System Status Indicator */}
              <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/5 px-4 py-1.5 transition-colors hover:bg-green-500/10">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-600 dark:text-green-400">
                  Global Systems: Operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* --- UI Helper Components --- */

const FooterColumn = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12 lg:mb-16">
    <h2 className="mb-9 text-xs font-bold uppercase tracking-[2.5px] text-black dark:text-white opacity-80">
      {title}
    </h2>
    <ul className="space-y-4">{children}</ul>
  </div>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-base text-body-color/80 transition-all duration-300 hover:translate-x-1 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, platform }: { href: string; platform: string }) => {
  const getIcon = () => {
    switch (platform) {
      case "linkedin": return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
      case "twitter": return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
      case "facebook": return <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
      case "github": return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>;
      default: return null;
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-stroke bg-white text-body-color shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white dark:border-white/5 dark:bg-white/5 dark:text-gray-400 dark:hover:border-primary"
    >
      {getIcon()}
    </a>
  );
};

export default Footer;