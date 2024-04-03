/* eslint-disable @next/next/no-img-element */
import React from "react";

function DownMover() {
  return (
    <div className=" md:py-[150px] bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4">
        <div className="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
          <p
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            Earn 1% assured cashback{" "}
            <span className="gray">on your spends. Get</span> 5X
          </p>
          <p
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            more value than cashback{" "}
            <span className="gray"> at the Uni Store. Enjoy</span>
          </p>
          <p
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            <span className="text-[#9EA7AE] gray">round the clock </span>
            Whatsapp support.{" "}
            <span className="text-[#9EA7AE] gray">And it&apos;s</span>
          </p>
          <p
            style={{
              opacity: 1,
              transform: "none",
            }}
          >
            lifetime free
            <span className="gray">; no joining fee, no annual charges.</span>
          </p>
        </div>
        <div
          className="flex md:justify-center py-12"
          style={{
            opacity: 1,
            transform: "none",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)",
            }}
            className="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center"
          >
            <img
              alt="down_arrow"
              src="https://www.uni.cards/images/down_arrow.svg"
              loading="lazy"
              className="w-9 md:w-14 css-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownMover;
