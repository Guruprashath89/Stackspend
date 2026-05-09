import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StackSpend | AI Spend Audits",
  description:
    "Analyze your AI tool subscriptions and API usage to find savings opportunities in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#050812]">{children}</body>
    </html>
  );
}
