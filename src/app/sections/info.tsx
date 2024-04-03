/* eslint-disable @next/next/no-img-element */
import React from "react";

const InfoBocks = [
  {
    title: "1% assured cashback on your spends.",
    description: " The more you spend, the more you earn.",
    subTitle: `Not applicable on fuel purchase, rent &amp; wallet transfers,
        ATM withdrawals &amp; international transactions.`,
    imageUrl: "https://www.uni.cards/images/one_percent_cashback.png",
  },
  {
    title: " 5x more value than your cashback,",
    description: "only at the Uni Store.",
    subTitle: "",
    imageUrl: "https://www.uni.cards/images/forex_globe.png",
  },
  {
    title: "Zero Forex Markup.",
    description: "Go international, without any fees.",
    subTitle: "",
    imageUrl: "https://www.uni.cards/images/five_x_rewards.png",
  },
];

function InfoSection() {
  return (
    <div className="w-full mx-auto px-6 md:px-4 bg-white md:pb-[150px] pb-[50px]">
      <div className="flex  max-w-7xl mx-auto justify-center flex-col">
        {InfoBocks.map((infoBlock, index) => (
          <div
            className={`flex md:items-center ${
              index % 2 == 0
                ? "flex-col-reverse md:flex-row"
                : "flex-col-reverse md:flex-row-reverse"
            }  w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8`}
            key={infoBlock.title}
          >
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    {infoBlock.title}
                  </span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    {infoBlock.description}
                  </span>
                </div>
              </div>
              <div className="info-caption">
                <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
                  {infoBlock.subTitle}
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img
                    src={infoBlock.imageUrl}
                    alt="information about uni cards"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
          <p>
            Lifetime <span className="text-uni-green">free. </span>
            <span className="block sm:inline-block md:text-center">
              No joining fee.
            </span>
            <span className="block md:text-center"> No annual charges. </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
