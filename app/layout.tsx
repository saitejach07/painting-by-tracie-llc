import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/700.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto-mono/400.css"
import "@fontsource/roboto-mono/500.css"
import "@fontsource/roboto-mono/700.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Painting By Tracie | Professional Painting & Landscaping Services",
  description:
    "Professional residential and commercial painting, landscaping, and yard clean-up services in Arizona. Contact Tracie Pacheco for quality work you can trust.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico", // ✅ real fallback
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png", // ✅ must be PNG
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
