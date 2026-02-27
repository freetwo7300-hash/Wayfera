"use client";

import { Header, Footer } from '@/components/layout';
import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  By accessing or using Wayfera's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  2. Use License
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Permission is granted to temporarily access the materials on Wayfera's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Attempt to decompile or reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  3. Booking and Reservations
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  When you make a booking through Wayfera:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>You must provide accurate and complete information</li>
                  <li>You are responsible for all charges incurred</li>
                  <li>Bookings are subject to availability and confirmation</li>
                  <li>Prices are subject to change until booking is confirmed</li>
                  <li>You must comply with all terms and conditions of service providers</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  4. Payment Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Payment is required at the time of booking unless otherwise specified. We accept major credit cards and other payment methods as indicated on our website. All prices are in USD unless otherwise stated.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  5. Cancellation and Refund Policy
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Cancellation policies vary by service and provider:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Free cancellation up to 48 hours before departure for most services</li>
                  <li>Cancellations within 48 hours may incur fees</li>
                  <li>No-shows are non-refundable</li>
                  <li>Refunds are processed within 7-14 business days</li>
                  <li>Some services may have different cancellation terms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  6. Travel Documents and Requirements
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Obtaining valid passports and visas</li>
                  <li>Meeting health and vaccination requirements</li>
                  <li>Complying with customs and immigration regulations</li>
                  <li>Obtaining appropriate travel insurance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  7. Limitation of Liability
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Wayfera acts as an intermediary between you and service providers. We are not liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Acts or omissions of third-party service providers</li>
                  <li>Delays, cancellations, or changes by service providers</li>
                  <li>Personal injury, property damage, or loss</li>
                  <li>Force majeure events (natural disasters, political unrest, etc.)</li>
                  <li>Indirect, incidental, or consequential damages</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  8. User Conduct
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  <li>Use our services for any illegal purpose</li>
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful code or malware</li>
                  <li>Harass or harm other users</li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  9. Intellectual Property
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  All content on this website, including text, graphics, logos, images, and software, is the property of Wayfera or its content suppliers and is protected by international copyright laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  10. Dispute Resolution
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. You waive your right to participate in class action lawsuits.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  11. Changes to Terms
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  12. Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  For questions about these Terms of Service, contact us:
                </p>
                <ul className="list-none text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Email: legal@wayfera.com</li>
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
