"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: { text: string }) => (
    <div className="group mb-5 flex items-center text-base font-semibold tracking-tight text-dark dark:text-white/80 a1-list-item">
      <span className="mr-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary group-hover:text-white">
        {checkIcon}
      </span>
      {text}
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes a1FadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:none} }
        @keyframes a1Glow { 0%,100%{filter:drop-shadow(0 0 20px rgba(74,108,247,0.2))} 50%{filter:drop-shadow(0 0 40px rgba(74,108,247,0.4))} }
        
        .a1-card { background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05); }
        .a1-list-item:hover { transform: translateX(8px); }
        .a1-stat-card { background: linear-gradient(135deg, rgba(74,108,247,0.1) 0%, transparent 100%); }
        .a1-img-container { animation: a1Glow 4s ease-in-out infinite; }
      `}</style>

      <section id="about" className="pt-16 md:pt-24 lg:pt-32">
        <div className="container">
          <div className="border-b border-white/5 pb-16 md:pb-24 lg:pb-32">
            <div className="-mx-4 flex flex-wrap items-center">
              
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2px] text-primary">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary"></span>
                  The #1 Unified Ecosystem
                </div>

                <SectionTitle
                  title="Powerful Tools, Engineered for High-Velocity Teams."
                  paragraph="Hela Ahasa isn't just a tool; it's your entire business operating system. We've eliminated the 'app-switching tax' by unifying project logic, HR oversight, and developer workflows."
                  mb="40px"
                />

                <div className="mb-12 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:mb-0">
                  <div className="space-y-1">
                    <List text="Unified Workspaces" />
                    <List text="Real-time Oversight" />
                    <List text="Automated HR Flows" />
                  </div>
                  <div className="space-y-1">
                    <List text="DevOps Integration" />
                    <List text="Sovereign Security" />
                    <List text="Lightning Cloud" />
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                  {[
                    { n: "500+", l: "Enterprise Partners" },
                    { n: "99.9%", l: "Global Uptime" },
                    { n: "4.9/5", l: "User Rating" }
                  ].map((s, i) => (
                    <div key={i} className="a1-stat-card flex-1 min-w-[140px] rounded-2xl border border-white/5 p-5 transition-all hover:border-primary/20">
                      <div className="text-2xl font-bold text-black dark:text-white">{s.n}</div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-body-color">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="a1-img-container relative mx-auto mt-12 max-w-[550px] lg:mt-0 lg:mr-0">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none z-10"></div>
                     <Image
                        src="/images/about/image 05.png" 
                        alt="Intelligence Interface"
                        width={600}
                        height={550}
                        className="transition-transform duration-700 hover:scale-110"
                        priority
                      />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;