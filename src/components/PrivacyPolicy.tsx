import React from "react";
import { X, Shield } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  const { t } = useLanguage();
  const p = t.privacyPolicy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Shield size={24} className="text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {p.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            {p.lastUpdated}: April 1, 2025
          </p>

          <p>{p.intro}</p>

          {/* Section 1 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              1. {p.dataCollectedTitle}
            </h3>
            <p>{p.dataCollectedBody}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {p.dataCollectedItems.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              2. {p.dataUseTitle}
            </h3>
            <p>{p.dataUseBody}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {p.dataUseItems.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3. {p.thirdPartyTitle}
            </h3>
            <p>{p.thirdPartyBody}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {p.thirdPartyItems.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              4. {p.dataRetentionTitle}
            </h3>
            <p>{p.dataRetentionBody}</p>
          </section>

          {/* Section 5 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              5. {p.userRightsTitle}
            </h3>
            <p>{p.userRightsBody}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {p.userRightsItems.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              6. {p.securityTitle}
            </h3>
            <p>{p.securityBody}</p>
          </section>

          {/* Section 7 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              7. {p.childrenTitle}
            </h3>
            <p>{p.childrenBody}</p>
          </section>

          {/* Section 8 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              8. {p.changesTitle}
            </h3>
            <p>{p.changesBody}</p>
          </section>

          {/* Section 9 */}
          <section>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              9. {p.contactTitle}
            </h3>
            <p>{p.contactBody}</p>
            <p className="mt-1">
              <a
                href="mailto:hectorcastano.apps@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                hectorcastano.apps@gmail.com
              </a>
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
          >
            {p.closeButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
