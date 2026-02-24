import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Taxable. How we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | Taxable",
    description: "How Taxable and Gratebridge Labs collect, use, and protect your information.",
  },
};

const LEGAL_ENTITY = "Gratebridge Labs";
const SUPPORT_EMAIL = "support@gettaxable.com";
const LEGAL_EMAIL = "legal@gettaxable.com";

export default function PrivacyPage() {
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
        <h1 className="text-3xl md:text-4xl font-semibold text-[#171717] mb-2">Privacy Policy</h1>
        <p className="text-sm text-taxable-gray mb-10">Last updated: February 2025</p>

        <div className="prose prose-gray prose-lg max-w-none prose-headings:font-semibold prose-headings:text-[#171717] prose-p:text-[#404040] prose-p:leading-relaxed prose-a:text-taxable-blue prose-a:no-underline hover:prose-a:underline">
          <p className="lead text-[#404040]">
            Taxable (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is a product of <strong>{LEGAL_ENTITY}</strong>. We are registered in Nigeria (RC No. 9217047) and in the United States. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services, including gettaxable.com and related platforms (collectively, the &quot;Services&quot;). It applies globally to all users.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information you provide directly (e.g. account details, tax-related data, contact information), information collected automatically (e.g. device and usage data, cookies and similar technologies), and information from third parties where permitted by law.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to provide, maintain, and improve the Services; to process transactions and send related information; to send support and administrative messages; to respond to your requests; to protect against fraud and abuse; and to comply with legal obligations. We may also use aggregated or de-identified data for analytics and product improvement.</p>

          <h2>3. Sharing of Information</h2>
          <p>We do not sell your personal information. We may share your information with service providers who assist our operations (under strict confidentiality), with regulators or authorities when required by law, or in connection with a merger, sale, or other corporate transaction, subject to applicable law.</p>

          <h2>4. Data Retention and Security</h2>
          <p>We retain your information only as long as necessary to fulfill the purposes described in this policy or as required by law. We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse.</p>

          <h2>5. Your Rights and Choices</h2>
          <p>Depending on your location, you may have rights to access, correct, delete, or port your data, or to object to or restrict certain processing. You may also opt out of marketing communications. To exercise these rights or ask questions, contact us at <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>. You may have the right to lodge a complaint with a supervisory authority in your jurisdiction.</p>

          <h2>6. International Transfers</h2>
          <p>Your information may be processed in countries where we or our service providers operate. We ensure appropriate safeguards are in place where required by applicable law for such transfers.</p>

          <h2>7. Children</h2>
          <p>Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us at <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.</p>

          <h2>8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will post the revised policy on this page and update the &quot;Last updated&quot; date. Continued use of the Services after changes constitutes acceptance of the updated policy where permitted by law.</p>

          <h2>9. Contact Us</h2>
          <p>
            For privacy-related questions or requests: <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>.<br />
            For general support: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </div>

        <p className="mt-12 text-sm text-taxable-gray">
          <Link href="/" className="text-taxable-blue font-medium hover:underline">← Back to Home</Link>
          {" · "}
          <Link href="/terms" className="text-taxable-blue font-medium hover:underline">Terms of Service</Link>
        </p>
      </main>
    </div>
  );
}
