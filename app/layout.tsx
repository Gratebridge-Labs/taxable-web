import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { UserProvider } from "../context/UserContext";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Taxable | The Modern Standard for Nigerian Tax Compliance",
    template: "%s | Taxable"
  },
  description: "Taxable simplifies Nigerian tax compliance for individuals and businesses. Calculate PIT, generate FIRS forms, and stay compliant with real-time tax tools.",
  keywords: ["Nigerian Tax", "FIRS", "Personal Income Tax", "Tax Compliance Nigeria", "Taxable", "Tax Calculator Nigeria"],
  authors: [{ name: "Taxable Team" }],
  creator: "Taxable",
  publisher: "Taxable",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://gettaxable.com",
    title: "Taxable | Nigerian Tax Compliance Simplified",
    description: "The modern standard for Nigerian tax compliance. Calculate your personal income tax in real-time and generate FIRS-compliant forms.",
    siteName: "Taxable",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taxable - Nigerian Tax Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxable | Nigerian Tax Compliance Simplified",
    description: "Modern tax tools for the Nigerian economy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} antialiased`}
      >
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
