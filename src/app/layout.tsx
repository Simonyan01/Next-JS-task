import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex gap-8 p-4">
          <Link href={"/"}>Home</Link>
          <Link href={"/users"}>Users</Link>
          <Link href={"/add"}>Add User</Link>
          <Link href={"/edit"}>Update User</Link>
        </nav>
        <div className="min-h-screen bg-gray-800 text-white pt-20">
          {children}
        </div>
      </body>
    </html>
  )
}
