import ChatWidget from "@/components/common/ChatWidget";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const getStoreStatus = () => {
    const now = new Date();
    const day = now.getDay();

    let closingHour = 19;
    let closingTimeText = "7:00 PM";

    if (day === 0) {
      closingHour = 14;
      closingTimeText = "2:00 PM";
    } else if (day === 6) {
      closingHour = 16;
      closingTimeText = "4:00 PM";
    }

    const currentTime = now.getHours() * 60 + now.getMinutes();
    const closingTime = closingHour * 60;

    if (currentTime >= closingTime) {
      return {
        isOpen: false,
        message: "Currently Closed",
      };
    }

    return {
      isOpen: true,
      message: `Open Today Until ${closingTimeText}`,
    };
  };

  const storeStatus = getStoreStatus();
  return (
    <>
      <Navbar isOpen={storeStatus.isOpen} />
      <main>
        {children}
        <ChatWidget />
      </main>
      <Footer />
    </>
  );
}