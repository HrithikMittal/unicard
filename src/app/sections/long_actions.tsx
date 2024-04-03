/* eslint-disable @next/next/no-img-element */
import React from "react";

const actions = [
  {
    title: " Help, just a WhatsApp away. Anytime, Anyday.",
    description:
      "During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.",
    url: "https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp",
  },
  {
    title: "No hidden charges, no last minute surprises.",
    description: `100% money back guarantee if a charge is applied without your
    knowledge.`,
    url: "https://www.uni.cards/images/nx-wave/rupee_bubble.webp",
  },
  {
    title: "Super secure. Because we care about your money.",
    description: (
      <img
        style={{ marginTop: "24px" }}
        src="https://www.uni.cards/images/pcidss_cert.svg"
        alt="PCI Logo"
      />
    ),
    url: "https://www.uni.cards/images/nx-wave/antivirus_bubble.webp",
  },
];

function LongActions() {
  return (
    <section className="py-12 lg:py-[100px] bg-black">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-between">
        {actions.map((action, index) => (
          <div
            className="flex false w-full items-center md:flex-col md:max-w-xs my-12 md:my-0"
            key={`action-${index}`}
          >
            <div className="flex-[50%] flex-shrink-0 flex w-full">
              <div className="w-full h-36 relative">
                <img
                  className="absolute md:relative md:left-auto md:-translate-x-0 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-20 md:w-28 h-auto mx-auto md:mx-0"
                  src={action.url}
                  alt=""
                />
              </div>
            </div>
            <div className="flex-[50%] flex flex-col">
              <p className="font-medium text-base text-white leading-[18px] md:text-2xl">
                {action.title}
              </p>
              <p className="text-sm text-gray-4 mt-2 md:text-lg">
                <span>{action.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LongActions;
