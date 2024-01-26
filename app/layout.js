import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chord Finder"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}><main className={styles.main}>{children}</main></body>
    </html>
  );
}
