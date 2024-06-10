
import Home from "./page";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <link rel="icon" href="/logo/kpmj controls logo without text.png" sizes="any" />
      <title>KPMJ CONTROLS</title>
      <body>

        <Home />
        <SpeedInsights />
      </body>
    </html>
  );
}
