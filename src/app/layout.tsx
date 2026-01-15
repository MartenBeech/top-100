import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Top 100",
  description: "Web site created with Next.js.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
