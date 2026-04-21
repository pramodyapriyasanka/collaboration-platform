"use client";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <>
      <style>{`
        .a2-feature-card { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .a2-feature-card:hover { transform: translateY(-5px) translateX(10px); background: rgba(74, 108, 247, 0.08); border-color: rgba(74, 108, 247, 0.2); }
        .a2-progress-fill { transition: width 2s cubic-bezier(0.1, 0, 0, 1); }
      `}</style>

      <section className="py-20 md:py-28 lg:py-36 overflow-hidden bg-white dark:bg-[#080B11]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">

            {/* IMAGE: Dashboard Analytics */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto max-w-[550px] lg:m-0">
                <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]"></div>
                <div className="relative z-10 rounded-[2.5rem] border border-white/5 bg-[#0F1522] p-4 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] transition-transform hover:rotate-1">
                  <Image
                    src="/images/about/Image 07.png" 
                    alt="Hela Ahasa Cloud Architecture"
                    width={550}
                    height={550}
                    className="rounded-[2rem] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* TEXT: Elite Value Proposition */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[540px] lg:ml-auto mt-16 lg:mt-0">
                <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                  The Hela Standard
                </div>

                <h2 className="mb-6 text-3xl font-extrabold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                  Engineered for <br />
                  <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Elite Performance.</span>
                </h2>

                <p className="mb-10 text-lg leading-relaxed text-body-color dark:text-gray-400">
                  Hela Ahasa transcends basic collaboration. We provide a high-fidelity cloud environment where digital sovereignty meets frictionless team velocity.
                </p>

                <div className="space-y-4">
                  {[
                    { i: "🛡️", h: "Sovereign Security", b: "Next-gen encryption and data localization built for Sri Lanka." },
                    { i: "🚀", h: "Zero-Lag Infrastructure", b: "Experience lightning-fast deployments with 99.99% uptime." },
                    { i: "📈", h: "Velocity Insights", b: "Real-time analytics to visualize team performance and growth." }
                  ].map((item, idx) => (
                    <div key={idx} className="a2-feature-card flex gap-5 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl shadow-inner">
                        {item.i}
                      </div>
                      <div>
                        <h4 className="mb-1 text-lg font-bold text-black dark:text-white">{item.h}</h4>
                        <p className="text-sm leading-relaxed text-body-color dark:text-gray-400">{item.b}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* KPI Metrics Bar */}
                <div className="mt-12 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                      <span>Operational Efficiency</span>
                      <span className="text-primary">94%</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div className="a2-progress-fill h-full bg-gradient-to-r from-primary to-blue-400" style={{ width: '94%' }}></div>
                    </div>
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

export default AboutSectionTwo;