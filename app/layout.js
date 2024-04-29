import { Inter } from "next/font/google";
import "@/css/globalcss.css";
import Navbar from "@/components/navbar";
import { dbConnect } from "@/services/mongo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eventry",
  description: "Booking events",
};

export default async function RootLayout({ children }) {
  const data = await dbConnect();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
