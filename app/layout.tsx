import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { AppShellTemplate } from "@/components/templates/app/AppShellTemplate";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UMTAS",
    template: "%s | UMTAS",
  },
  description: "University Module Timetable Assistance System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userName: string | null = null;
  const userEmail: string | null = null;

  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var theme = localStorage.getItem('umtas-theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
            })();
          `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
          {children}
      </body>
    </html>
  );
}