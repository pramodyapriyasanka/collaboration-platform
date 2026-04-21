import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Hela Ahasa",
  description: "This is Privacy Policy Page for Hela Ahasa",
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="At Hela Ahasa, your privacy is our priority. This policy outlines how we collect, use, and protect your enterprise data."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-9/12 xl:w-8/12">
              <div className="rounded-sm bg-white px-8 py-10 shadow-three dark:bg-gray-dark sm:p-[60px] border border-white/5">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  1. Information We Collect
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color">
                  We collect information necessary to provide our unified collaboration tools, including account details, usage logs, and communication data within the Hela Ahasa ecosystem.
                </p>

                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  2. How We Use Your Data
                </h3>
                <ul className="mb-10 list-inside list-disc text-base font-medium leading-relaxed text-body-color">
                  <li className="mb-2">To maintain and optimize our project management and HR modules.</li>
                  <li className="mb-2">To ensure enterprise-grade security and prevent unauthorized access.</li>
                  <li className="mb-2">To provide technical support and personalized product demos.</li>
                </ul>

                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  3. Data Security & Sovereignty
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color">
                  Hela Ahasa uses advanced encryption to protect your data. As a Sri Lankan-focused platform, we prioritize regional data sovereignty and cloud-native security protocols.
                </p>

                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  4. Third-Party Services
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color">
                  We do not sell your data. We only share information with trusted infrastructure providers (like AWS/Vercel) necessary to run our high-performance services.
                </p>

                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  5. Contact Us
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color">
                  If you have questions about this policy, please reach out to our security team via the <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;