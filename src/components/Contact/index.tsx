import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-20 lg:py-28 bg-[#090E16]">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-20 blur-[100px]">
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-primary/20"></div>
      </div>

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-2xl bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] border border-white/5"
              data-wow-delay=".15s"
            >
              <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Ready to transform your workflow?
              </h2>
              <p className="mb-12 text-base font-medium text-body-color max-w-[500px]">
                Have a specific requirement or need a personalized demo? Our enterprise support team is ready to assist you.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-bold text-dark dark:text-white uppercase tracking-wider">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-bold text-dark dark:text-white uppercase tracking-wider">
                        Business Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="border-stroke w-full rounded-lg border bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-bold text-dark dark:text-white uppercase tracking-wider">
                        How can we help?
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Tell us about your team size and requirements..."
                        className="border-stroke w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-white transition-all"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-lg bg-primary px-10 py-4 text-base font-bold text-white shadow-submit duration-300 hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all dark:shadow-submit-dark">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;