import Breadcrumb from "@/components/Common/Breadcrumb";

const TermsOfService = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms of Service"
        description="Legal framework and professional guidelines for the Hela Ahasa ecosystem."
      />

      <section className="pb-[120px] pt-[80px] dark:bg-[#090E16]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            
            {/* Left side: Quick Navigation (Desktop only) */}
            <div className="hidden w-full px-4 lg:block lg:w-3/12">
              <div className="sticky top-[100px] rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-md">
                <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-primary">On this page</h4>
                <ul className="space-y-4 text-sm font-medium text-body-color dark:text-gray-400">
                  <li className="hover:text-primary transition-colors cursor-pointer">01. Acceptance</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">02. User Conduct</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">03. Data Rights</li>
                  <li className="hover:text-primary transition-colors cursor-pointer">04. Liability</li>
                </ul>
              </div>
            </div>

            {/* Right side: Content */}
            <div className="w-full px-4 lg:w-9/12">
              <div className="rounded-3xl bg-white p-10 shadow-2xl dark:bg-gray-dark border border-white/5 sm:p-14">
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  <div className="mb-12 border-b border-stroke pb-8 dark:border-white/10">
                    <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase text-primary">Updated March 2026</span>
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">Platform Governance</h2>
                  </div>

                  <section className="mb-12">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">01. Service Agreement</h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-gray-400">
                      By integrating Hela Ahasa into your enterprise workflow, you agree to a professional service standard. This platform is provided as a unified workspace for legitimate business operations only.
                    </p>
                  </section>

                  <section className="mb-12">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white">02. Intellectual Property & Sovereignty</h3>
                    <p className="text-base leading-relaxed text-body-color dark:text-gray-400">
                      While you retain 100% ownership of the data you upload, the underlying architecture, proprietary algorithms, and brand assets of Hela Ahasa remain the exclusive property of our cloud ecosystem.
                    </p>
                  </section>

                  <div className="rounded-2xl bg-primary/5 p-8 border border-primary/10">
                    <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">Notice</p>
                    <p className="text-sm text-body-color italic">
                      "Violation of these terms may result in immediate suspension of enterprise modules to protect the integrity of the sovereign cloud."
                    </p>
                  </div>
                </article>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TermsOfService;