import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Create Next App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
