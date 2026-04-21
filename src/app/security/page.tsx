import Breadcrumb from "@/components/Common/Breadcrumb";

const SecurityStandards = () => {
  return (
    <>
      <Breadcrumb
        pageName="Security Architecture"
        description="Enterprise-grade defense mechanisms for your digital assets."
      />

      <section className="pb-[120px] pt-[80px] dark:bg-[#090E16]">
        <div className="container">
          <div className="mx-auto max-w-[1000px]">
            
            {/* Security Overview Cards */}
            <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "End-to-End Encryption", d: "AES-256 military-grade encryption for all data.", i: "🔒" },
                { t: "Zero-Trust Access", d: "Identity-based security protocols for every user.", i: "👤" },
                { t: "99.9% Resilience", d: "Fault-tolerant cloud-native infrastructure.", i: "⚡" }
              ].map((item, idx) => (
                <div key={idx} className="rounded-2xl border border-white/5 bg-white/5 p-8 text-center backdrop-blur-sm transition-transform hover:scale-[1.03]">
                  <div className="mb-4 text-4xl">{item.i}</div>
                  <h4 className="mb-2 text-lg font-bold text-white">{item.t}</h4>
                  <p className="text-xs leading-relaxed text-gray-400">{item.d}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white p-10 shadow-2xl dark:bg-gray-dark border border-white/5 sm:p-14">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">Our Commitment to Sovereignty</h2>
                <div className="mx-auto h-1 w-20 bg-primary rounded-full"></div>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-black dark:text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">01</span>
                    Network & Infrastructure Security
                  </h3>
                  <p className="ml-11 text-base text-body-color dark:text-gray-400">
                    Hosted on world-class infrastructure with isolated VPCs and dedicated firewalls. Our 24/7 Security Operations Center (SOC) monitors for DDoS attacks and unauthorized intrusions in real-time.
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-black dark:text-white">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">02</span>
                    Regular Security Audits
                  </h3>
                  <p className="ml-11 text-base text-body-color dark:text-gray-400">
                    We conduct quarterly penetration testing and vulnerability assessments to ensure that Hela Ahasa remains resilient against evolving cyber threats.
                  </p>
                </section>
              </div>

              <div className="mt-16 rounded-2xl bg-black p-10 text-center dark:bg-primary/10 border border-primary/20">
                <h4 className="mb-4 text-xl font-bold text-white">Trust Hela Ahasa for your Enterprise</h4>
                <p className="mb-8 text-sm text-gray-400">Download our full Security Whitepaper or contact our CISO for custom compliance requirements.</p>
                <button className="rounded-lg bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95">
                  Contact Security Team
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SecurityStandards;