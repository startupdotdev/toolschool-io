import "./globals.css";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";

const scp = Source_Code_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toolschool.io",
  description: "Learn to build the OSS tools that are building the future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={scp.className}>{children}</body>
    </html>
  );
}
