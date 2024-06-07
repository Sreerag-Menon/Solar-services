
import Home from "./page";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>
        <Home />
        <SpeedInsights />
      </body>
    </html>
  );
}
