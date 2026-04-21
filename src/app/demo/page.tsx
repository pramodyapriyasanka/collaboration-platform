import React from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";

const DemoPage = () => {
  return (
    <>
      <style>{`
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.1); }
        }
        .bg-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(80px);
          z-index: -1;
          opacity: 0.15;
          animation: floatOrb 10s ease-in-out infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="bg-orb top-20 -left-20 bg-primary"></div>
        <div className="bg-orb bottom-20 -right-20 bg-blue-400" style={{ animationDelay: "-5s" }}></div>

        <Breadcrumb
          pageName="Experience Hela Ahasa"
          description="See how our unified digital workspace can transform your team's productivity. Fill out the form below for a personalized walkthrough with our experts."
        />

        <section className="pb-[120px] pt-[60px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              
              {/* Left Side: Benefits & Visuals */}
              <div className="w-full px-4 lg:w-5/12">
                <div className="mb-12 lg:mb-0">
                  <h2 className="mb-8 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                    What to expect in your <span className="text-primary">Live Demo</span>
                  </h2>
                  
                  <div className="space-y-6">
                    {[
                      { t: "Personalized Walkthrough", d: "A tour customized based on your specific team workflows.", i: "🎯" },
                      { t: "Expert Consultation", d: "Direct Q&A with our product engineers and strategists.", i: "💡" },
                      { t: "Live Implementation", d: "See how Hela Ahasa integrates with your current toolstack.", i: "⚙️" }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4 p-4 rounded-xl transition-all hover:bg-white/5 group">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-2xl group-hover:scale-110 transition-transform">
                          {item.i}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black dark:text-white">{item.t}</h4>
                          <p className="text-base text-body-color">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <p className="text-sm italic text-body-color">
                      "Hela Ahasa has redefined how our regional teams collaborate. The demo was the turning point for our digital transformation."
                    </p>
                    <p className="mt-3 text-sm font-bold text-primary">— Enterprise Client, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Right Side: Professional Form */}
              <div className="w-full px-4 lg:w-7/12">
                <div className="glass-card rounded-3xl p-8 sm:p-12">
                  <form>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-6">
                          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">Full Name</label>
                          <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-base text-white outline-none focus:border-primary focus:bg-white/10 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-6">
                          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">Work Email</label>
                          <input
                            type="email"
                            placeholder="john@company.com"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-base text-white outline-none focus:border-primary focus:bg-white/10 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-6">
                          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">Company</label>
                          <input
                            type="text"
                            placeholder="Organization Name"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-base text-white outline-none focus:border-primary focus:bg-white/10 transition-all shadow-inner"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-6">
                          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">Team Size</label>
                          <div className="relative">
                            <select className="w-full rounded-xl border border-white/10 bg-[#1d2129] px-6 py-4 text-base text-white outline-none focus:border-primary transition-all appearance-none cursor-pointer">
                              <option>Select Size</option>
                              <option>1 - 20 Members</option>
                              <option>21 - 100 Members</option>
                              <option>100+ Members</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">▼</span>
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">What can we help you solve?</label>
                          <textarea
                            rows={4}
                            placeholder="Briefly describe your requirements..."
                            className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-base text-white outline-none focus:border-primary focus:bg-white/10 transition-all shadow-inner"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-95">
                          Schedule My Live Demo 🚀
                        </button>
                        <p className="mt-4 text-center text-sm text-body-color">
                          🔒 Your data is secure and will never be shared.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;