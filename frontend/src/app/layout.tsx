import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlobalAtmosphere } from "@/components/layout/GlobalAtmosphere";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zylux.com'),
  title: "Zylux Software Solutions | Technology that Builds. Digital Strategies that Grow.",
  description: "Zylux Software Solutions combines high-performance engineering, cybersecurity, DevOps, and digital growth to help businesses build, launch, secure, and scale.",
  keywords: [
    "Zylux",
    "Zylux Software Solutions",
    "Software Development",
    "Web Development",
    "Mobile Applications",
    "Cyber Security",
    "DevOps",
    "Cloud Infrastructure",
    "Digital Marketing",
    "SEO",
    "FastAPI",
    "Next.js",
    "Django",
    "Technology Partner"
  ],
  authors: [{ name: "W.M. Dinusha Kalhara Fernando", url: "https://zylux.com" }],
  icons: {
    icon: [
      { url: "/assets/zylux-symbol.png" },
      { url: "/favicon.ico" }
    ],
    apple: "/assets/zylux-symbol.png"
  },
  openGraph: {
    title: "Zylux Software Solutions | Technology that Builds. Digital Strategies that Grow.",
    description: "Two disciplines. One digital partner. Engineering and digital growth for modern businesses.",
    url: "https://zylux.com",
    siteName: "Zylux Software Solutions",
    images: [
      {
        url: "/assets/zylux-logo.jpg",
        width: 1024,
        height: 975,
        alt: "Zylux Software Solutions"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zylux Software Solutions",
    description: "Technology that builds. Digital strategies that grow.",
    images: ["/assets/zylux-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth max-w-full overflow-x-hidden`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('zylux-theme');
                  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  var theme = saved ? saved : (prefersLight ? 'light' : 'dark');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#0B0A0F] text-[#D7D3DC] min-h-screen flex flex-col antialiased selection:bg-[#FF4F9A] selection:text-white max-w-full overflow-x-hidden transition-colors duration-300 relative">
        <ThemeProvider>
          <GlobalAtmosphere />
          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16 sm:pt-20 w-full max-w-full overflow-x-hidden">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
