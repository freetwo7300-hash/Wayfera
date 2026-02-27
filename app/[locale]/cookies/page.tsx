"use client";

import { Header, Footer } from '@/components/layout';
import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
  return (
    <main className="overflow-hidden">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. What Are Cookies?
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Wayfera uses cookies to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Remember your preferences and settings</li>
                  <li>Keep you signed in to your account</li>
                  <li>Understand how you use our website</li>
                  <li>Improve our services and user experience</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Analyze website traffic and performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Types of Cookies We Use
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and booking processes.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    Duration: Session or up to 1 year
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Performance Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    These cookies collect information about how visitors use our website, such as which pages are visited most often. This helps us improve our website's performance.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    Duration: Up to 2 years
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Functionality Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    These cookies allow the website to remember choices you make (such as language preference, currency, or region) and provide enhanced, personalized features.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    Duration: Up to 1 year
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Targeting/Advertising Cookies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    These cookies are used to deliver advertisements more relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    Duration: Up to 2 years
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Third-Party Cookies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may use third-party services that also set cookies on your device. These include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
                  <li><strong>Social Media Platforms:</strong> To enable social sharing features</li>
                  <li><strong>Payment Processors:</strong> To facilitate secure transactions</li>
                  <li><strong>Advertising Networks:</strong> To display relevant advertisements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Managing Cookies
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Using our cookie consent banner when you first visit our website</li>
                  <li>Adjusting your browser settings to refuse cookies</li>
                  <li>Deleting cookies that have already been set</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Please note that if you choose to block or delete cookies, some features of our website may not function properly.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Browser-Specific Instructions
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To manage cookies in your browser:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Local Storage and Session Storage
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  In addition to cookies, we use browser storage technologies (localStorage and sessionStorage) to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Store user preferences and settings</li>
                  <li>Cache data for improved performance</li>
                  <li>Maintain session information</li>
                  <li>Remember your favorite destinations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. Do Not Track Signals
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to have your online activity tracked. We currently do not respond to DNT signals, but we respect your privacy choices and provide cookie management options.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  9. Updates to This Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any significant changes by posting the updated policy on our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Email: privacy@wayfera.com</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Address: 123 Travel Street, Adventure City, AC 12345</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
