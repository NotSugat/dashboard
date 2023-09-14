import Sidebar from "./components/Sidebar";
import "./globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogiSync",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark flex">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
