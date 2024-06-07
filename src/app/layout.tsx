
import Home from "./page";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <Home />
        <Analytics />
      </body>
    </html>
  );
}
