import ChatWidget from "@/components/common/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Navbar />
      <main>
        {children}
        <ChatWidget />
      </main>
      <Footer />
    </>
  );
}