import Link from "next/link";

const Hero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

        /* --- Background Motion Animations --- */
        @keyframes bgFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, 15px) rotate(2deg); }
        }
        @keyframes bgFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -10px) scale(1.05); }
        }
        .bg-animate-1 { animation: bgFloat1 12s ease-in-out infinite; }
        .bg-animate-2 { animation: bgFloat2 15s ease-in-out infinite; }

        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        @keyframes fadeSlideUp2 {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        @keyframes fadeSlideUp3 {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0px); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 8px 32px rgba(74,108,247,0.4), 0 2px 8px rgba(74,108,247,0.2); }
          50%       { box-shadow: 0 16px 48px rgba(74,108,247,0.7), 0 4px 16px rgba(74,108,247,0.4); }
        }
        @keyframes glowPulseBlack {
          0%, 100% { box-shadow: 0 8px 24px rgba(0,0,0,0.18); }
          50%       { box-shadow: 0 14px 40px rgba(0,0,0,0.35); }
        }
        @keyframes badgePop {
          from { opacity: 0; transform: translateY(16px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes statsFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.035; }
          50%       { opacity: 0.07; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(6px); opacity: 1; }
        }

        /* ---- Hero Grid Background ---- */
        .hero-grid-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image:
            linear-gradient(rgba(74,108,247,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,108,247,0.07) 1px, transparent 1px);
          background-size: 48px 48px;
          animation: gridPulse 6s ease-in-out infinite;
        }
        .hero-grid-fade {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, white 90%);
        }
        .dark .hero-grid-fade {
          background: radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #111827 90%);
        }

        .hero-title {
          animation: fadeSlideUp 0.8s cubic-bezier(.16,1,.3,1) 0.2s both;
          font-family: 'Outfit', sans-serif;
        }
        .hero-desc {
          animation: fadeSlideUp2 0.8s cubic-bezier(.16,1,.3,1) 0.36s both;
        }
        .hero-ctas {
          animation: fadeSlideUp3 0.8s cubic-bezier(.16,1,.3,1) 0.52s both;
        }
        .hero-stats {
          animation: statsFadeIn 0.8s cubic-bezier(.16,1,.3,1) 0.72s both;
        }
        .hero-badge {
          animation: badgePop 0.7s cubic-bezier(.16,1,.3,1) 0.05s both;
        }
        .hero-float {
          animation: floatY 7s ease-in-out infinite;
        }

        /* ---- Badge ---- */
        .launch-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px 6px 8px;
          border-radius: 999px;
          border: 1px solid rgba(74,108,247,0.25);
          background: rgba(74,108,247,0.07);
          backdrop-filter: blur(8px);
          font-size: 13px;
          font-weight: 500;
          color: #4A6CF7;
          letter-spacing: 0.01em;
          margin-bottom: 28px;
          font-family: 'Outfit', sans-serif;
        }
        .dark .launch-badge {
          border-color: rgba(74,108,247,0.35);
          background: rgba(74,108,247,0.12);
          color: #7a9bfa;
        }
        .badge-dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #4A6CF7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: white;
          flex-shrink: 0;
        }

        /* ---- Title shimmer highlight ---- */
        .title-highlight {
          background: linear-gradient(135deg, #4A6CF7 0%, #7a9bfa 50%, #4A6CF7 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        /* ---- Buttons ---- */
        .btn-primary {
          animation: glowPulse 3s ease-in-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.01em;
          position: relative;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.04) !important;
        }
        .btn-secondary {
          animation: glowPulseBlack 3s ease-in-out 1.5s infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.01em;
        }
        .btn-secondary:hover {
          transform: translateY(-3px) scale(1.04) !important;
        }

        /* ---- Stat cards ---- */
        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 14px 28px;
          border-radius: 16px;
          border: 1px solid rgba(74,108,247,0.12);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 16px rgba(74,108,247,0.07), 0 1px 3px rgba(0,0,0,0.04);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .dark .stat-card {
          background: rgba(255,255,255,0.04);
          border-color: rgba(74,108,247,0.2);
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(74,108,247,0.14), 0 2px 8px rgba(0,0,0,0.06);
        }
        .stat-number {
          font-family: 'Outfit', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #4A6CF7;
          line-height: 1.1;
        }
        .stat-label {
          font-size: 11px;
          font-weight: 500;
          color: #999;
          margin-top: 3px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .stat-divider {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(74,108,247,0.22);
          align-self: center;
        }

        /* ---- Orbit decoration rings ---- */
        .orbit-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: -1;
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px dashed rgba(74,108,247,0.1);
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        /* ---- Scroll cue ---- */
        .scroll-cue {
          animation: scrollBounce 2s ease-in-out infinite;
        }
      `}</style>

      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="hero-grid-bg" />
        <div className="hero-grid-fade" />

        <div className="orbit-wrap hidden xl:block" style={{ width: 560, height: 560 }}>
          <div className="orbit-ring" style={{ width: 320, height: 320 }} />
          <div className="orbit-ring" style={{ width: 460, height: 460, opacity: 0.6 }} />
          <div className="orbit-ring" style={{ width: 560, height: 560, opacity: 0.35 }} />
        </div>

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center hero-float">

                <div className="flex justify-center hero-badge">
                  <span className="launch-badge">
                    <span className="badge-dot">✦</span>
                    Trusted by 10,000+ teams worldwide
                  </span>
                </div>

                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight hero-title">
                  The world's most{" "}
                  <span className="title-highlight">affordable</span>{" "}
                  collaboration platform
                </h1>

                <p className="mb-10 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl hero-desc" style={{ maxWidth: 620, margin: "0 auto 40px" }}>
                  Hela Ahasa brings communication, project management, HR operations, and developer tools into one powerful workspace, built for teams worldwide, from startups to enterprises.
                </p>

                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 hero-ctas">
                  <Link
                    href="#pricing"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 btn-primary"
                  >
                    🚀 Get Started
                  </Link>
                  
                  {/* Updated Request a Demo Link to new page */}
                  <Link
                    href="/demo"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 btn-secondary"
                  >
                    Request a Demo
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 mt-12 hero-stats">
                  <div className="stat-card">
                    <span className="stat-number">10K+</span>
                    <span className="stat-label">Teams</span>
                  </div>
                  <div className="stat-divider" />
                  <div className="stat-card">
                    <span className="stat-number">99.9%</span>
                    <span className="stat-label">Uptime</span>
                  </div>
                  <div className="stat-divider" />
                  <div className="stat-card">
                    <span className="stat-number">150+</span>
                    <span className="stat-label">Countries</span>
                  </div>
                  <div className="stat-divider" />
                  <div className="stat-card">
                    <span className="stat-number">4.9★</span>
                    <span className="stat-label">Rating</span>
                  </div>
                </div>

                <div className="mt-12 flex justify-center scroll-cue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14M5 12l7 7 7-7" stroke="#4A6CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100 bg-animate-1">
          <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
            <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
            <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
            <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_25:217)" />
            <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_25:217)" />
            <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_25:217)" />
            <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_25:217)" />
            <defs>
              <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" /><stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)">
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" /><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)">
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" /><stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" /><stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" /><stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint5_linear_25:217" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" /><stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="paint6_linear_25:217" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" /><stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100 bg-animate-2">
          <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24" stroke="url(#paint0_linear_25:218)" />
            <path d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24" stroke="url(#paint1_linear_25:218)" />
            <path d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24" stroke="url(#paint2_linear_25:218)" />
            <path d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481" stroke="url(#paint3_linear_25:218)" />
            <circle opacity="0.8" cx="214.505" cy="60.5054" r="49.7205" transform="rotate(-13.421 214.505 60.5054)" stroke="url(#paint4_linear_25:218)" />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" /><stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint1_linear_25:218" x1="156.389" y1="69.2405" x2="156.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" /><stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint2_linear_25:218" x1="125.389" y1="69.2405" x2="125.389" y2="212.24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" /><stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint3_linear_25:218" x1="93.8507" y1="67.2674" x2="89.9278" y2="210.214" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" stopOpacity="0" /><stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient id="paint4_linear_25:218" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4A6CF7" /><stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="paint5_radial_25:218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 63) rotate(90) scale(43)">
                <stop offset="0.145833" stopColor="white" stopOpacity="0" /><stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;