"use client";

import Front from "./sections/front";
import InfoSection from "./sections/info";
import InstantActions from "./sections/instant_actions";
import LongActions from "./sections/long_actions";
import MessageAction from "./sections/message_action";
import Footer from "./sections/footer";
import DownMover from "./sections/down_mover";
import FloatingFooter from "./sections/floating_footer";
import { useEffect, useRef, useState } from "react";
import Header from "./sections/header";

export default function Home() {
  const ref = useRef<any>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(scrollTop > 800); // Change visibility based on scroll position
    };

    // Add event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <Front />
      <DownMover />
      <InfoSection />
      <InstantActions />
      <LongActions />
      <MessageAction />
      <div className="flex justify-center items-center text-center text-[#BFC9CC] text-base sm:text-xl md:text-2xl bg-black py-16 px-5 sm:px-8 md:px-12">
        <p className="max-w-3xl">
          Please note that to stay compliant with RBI guidelines, we have
          discontinued Pay 1/3rd and Pay 1/2 cards for the time being.
        </p>
      </div>
      <Footer />

      <div className={`scroll-div ${isVisible ? "visible" : ""}`}>
        <FloatingFooter />
      </div>
    </div>
  );
}
