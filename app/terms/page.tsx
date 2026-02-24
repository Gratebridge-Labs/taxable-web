import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Taxable. Rules and guidelines for using our services.",
  openGraph: {
    title: "Terms of Service | Taxable",
    description: "Terms and conditions for using Taxable and related services from Gratebridge Labs.",
  },
};

const LEGAL_ENTITY = "Gratebridge Labs";
const SUPPORT_EMAIL = "support@gettaxable.com";
const LEGAL_EMAIL = "legal@gettaxable.com";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-taxable-dark font-sans">
      <header className="py-6 px-6 md:px-14 flex items-center justify-between w-full max-w-3xl mx-auto border-b border-gray-100">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_blue.svg"
            alt="Taxable"
            width={120}
            height={40}
            className="w-auto h-9"
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-[#404040]">
          <Link href="/" className="hover:text-taxable-blue transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-taxable-blue transition-colors">Blog</Link>
          <Link
            href="https://dashboard.gettaxable.com/"
            className="border border-[#E5E5E5] text-taxable-blue font-semibold px-4 py-2 rounded-full hover:bg-gray-50"
          >
            Sign In
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#171717] mb-2">Terms of Service</h1>
        <p className="text-sm text-taxable-gray mb-10">Last updated: February 2025</p>

        <div className="prose prose-gray prose-lg max-w-none prose-headings:font-semibold prose-headings:text-[#171717] prose-p:text-[#404040] prose-p:leading-relaxed prose-a:text-taxable-blue prose-a:no-underline hover:prose-a:underline">
          <p className="lead text-[#404040]">
            Welcome to Taxable. Taxable is a product of <strong>{LEGAL_ENTITY}</strong>. We are registered in Nigeria (RC No. 9217047) and in the United States. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website, applications, and related services (the &quot;Services&quot;). By using the Services, you agree to these Terms. If you do not agree, do not use the Services. These Terms apply globally to all users.
          </p>

          <h2>1. Eligibility</h2>
          <p>You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use the Services. By using the Services, you represent that you meet these requirements and that all information you provide is accurate and current.</p>

          <h2>2. Use of the Services</h2>
          <p>You may use the Services only for lawful purposes and in accordance with these Terms. You agree not to: (a) use the Services in any way that violates applicable laws or regulations; (b) attempt to gain unauthorized access to any part of the Services, other accounts, or any systems or networks; (c) use the Services to transmit any harmful, offensive, or illegal content; (d) interfere with or disrupt the integrity or performance of the Services; or (e) use any automated means to access or scrape the Services without our prior written consent.</p>

          <h2>3. Account and Data</h2>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. You are responsible for the accuracy of any data you submit. We are not responsible for your tax obligations; you remain solely responsible for your compliance with tax laws in your jurisdiction. Our tools are designed to assist you and do not constitute legal or professional tax advice.</p>

          <h2>4. Intellectual Property</h2>
          <p>All content, features, and functionality of the Services (including but not limited to software, text, graphics, logos, and design) are owned by us or our licensors and are protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.</p>

          <h2>5. Privacy</h2>
          <p>Your use of the Services is also governed by our <Link href="/privacy">Privacy Policy</Link>, which describes how we collect, use, and protect your information. By using the Services, you consent to the practices described in the Privacy Policy.</p>

          <h2>6. Disclaimers</h2>
          <p>The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, to the fullest extent permitted by applicable law. We do not warrant that the Services will be uninterrupted, error-free, or free of harmful components. Tax calculations and outputs are for informational and assistive purposes only and do not constitute professional tax, legal, or financial advice.</p>

          <h2>7. Limitation of Liability</h2>
          <p>To the maximum extent permitted by applicable law, we and our affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising out of or in connection with your use of the Services. Our total liability for any claims arising from or related to the Services shall not exceed the amount you paid us, if any, in the twelve (12) months preceding the claim, or one hundred United States dollars (USD 100), whichever is greater. Some jurisdictions do not allow certain limitations of liability; in such jurisdictions, our liability will be limited to the maximum extent permitted by law.</p>

          <h2>8. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless us and our affiliates, officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising out of or related to your use of the Services, your violation of these Terms, or your violation of any third-party rights.</p>

          <h2>9. Termination</h2>
          <p>We may suspend or terminate your access to the Services at any time, with or without cause or notice, to the extent permitted by applicable law. Upon termination, your right to use the Services ceases immediately. Provisions that by their nature should survive (including disclaimers, limitation of liability, and indemnification) will survive termination.</p>

          <h2>10. Governing Law and Disputes</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law principles. Any dispute arising from or relating to these Terms or the Services shall be subject to the exclusive jurisdiction of the courts of Nigeria, except where mandatory law in your jurisdiction requires otherwise. We may also seek injunctive or other equitable relief in any court of competent jurisdiction.</p>

          <h2>11. Changes to the Terms</h2>
          <p>We may modify these Terms at any time. We will post the updated Terms on this page and update the &quot;Last updated&quot; date. Your continued use of the Services after changes constitutes acceptance of the updated Terms where permitted by law. If you do not agree to the new Terms, you must stop using the Services.</p>

          <h2>12. General</h2>
          <p>If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in effect. Our failure to enforce any right or provision does not waive that right or provision. These Terms constitute the entire agreement between you and us regarding the Services and supersede any prior agreements. You may not assign these Terms without our consent; we may assign them without restriction.</p>

          <h2>13. Contact Us</h2>
          <p>
            For questions about these Terms: <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.<br />
            For general support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </div>

        <p className="mt-12 text-sm text-taxable-gray">
          <Link href="/" className="text-taxable-blue font-medium hover:underline">← Back to Home</Link>
          {" · "}
          <Link href="/privacy" className="text-taxable-blue font-medium hover:underline">Privacy Policy</Link>
        </p>
      </main>
    </div>
  );
}
