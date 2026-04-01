import React from "react";
import { Shield, ArrowLeft } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();
  const p = t.privacyPolicy;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Top bar */}
      <div className="bg-gray-900 dark:bg-black text-white px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shield size={22} className="text-blue-400" />
          <span className="font-semibold text-lg">{p.title}</span>
        </div>
        <a
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          {p.backToPortfolio}
        </a>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-700 dark:text-gray-300 text-sm leading-relaxed space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {p.title}
          </h1>
          <p className="text-gray-400 text-xs">{p.lastUpdated}: April 1, 2025</p>
        </div>

        <p>{p.intro}</p>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            1. {p.dataCollectedTitle}
          </h2>
          <p>{p.dataCollectedBody}</p>
          <ul className="list-disc list-outside ml-5 mt-3 space-y-2">
            {p.dataCollectedItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            2. {p.dataUseTitle}
          </h2>
          <p>{p.dataUseBody}</p>
          <ul className="list-disc list-outside ml-5 mt-3 space-y-2">
            {p.dataUseItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            3. {p.thirdPartyTitle}
          </h2>
          <p>{p.thirdPartyBody}</p>
          <ul className="list-disc list-outside ml-5 mt-3 space-y-2">
            {p.thirdPartyItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            4. {p.dataRetentionTitle}
          </h2>
          <p>{p.dataRetentionBody}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            5. {p.userRightsTitle}
          </h2>
          <p>{p.userRightsBody}</p>
          <ul className="list-disc list-outside ml-5 mt-3 space-y-2">
            {p.userRightsItems.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            6. {p.securityTitle}
          </h2>
          <p>{p.securityBody}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            7. {p.childrenTitle}
          </h2>
          <p>{p.childrenBody}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            8. {p.changesTitle}
          </h2>
          <p>{p.changesBody}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            9. {p.contactTitle}
          </h2>
          <p>{p.contactBody}</p>
          <a
            href="mailto:hectorcastano.apps@gmail.com"
            className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            hectorcastano.apps@gmail.com
          </a>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
