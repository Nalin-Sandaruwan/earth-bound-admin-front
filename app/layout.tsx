import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "./provider/query-provider";
import { Toaster } from 'sonner';

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ADMIN DASHBOARD",
  description: "ADMIN DASHBOARD FOR MONITORING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProvider>

        <body
          className={`${raleway.variable}  antialiased`}
        >
          {children}
          <Toaster position="top-right" richColors />
        </body>
      </QueryProvider>
    </html>
  );
}
