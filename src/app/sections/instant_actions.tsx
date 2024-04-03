/* eslint-disable @next/next/no-img-element */
import React from "react";

const actions = [
  {
    imageUrl: "https://www.uni.cards/images/nx-wave/app_screen_1.webp",
    title: "We’ve all heard of instant groceries, now say hello to",
    subTitle: "instant credit.",
    description: "0% hassle, 100% paperless. Get your",
    subDescription: "Uni Card instantly.",
  },
  {
    imageUrl: "https://www.uni.cards/images/nx-wave/app_screen_2.webp",
    title: "With Uni,",
    subTitle: "you’re always in control.",
    description: `Set your own payment limits. Choose how and where you spend. Lock
    and unlock your card. All right from the app.`,
    subDescription: " ",
  },
];

function InstantActions() {
  return (
    <section className="lg:py-[100px] bg-black py-8 relative">
      <img
        src="https://www.uni.cards/images/circles.png"
        alt="circles"
        className="absolute top-0 h-auto w-[70%]"
      />
      {actions.map((action, index) => (
        <div
          className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex relative py-6"
          key={index}
        >
          <div className="mx-auto w-full flex-[50%] flex-grow-0 my-auto">
            <p className="text-[22px] font-medium text-white mb-4 md:text-[40px] leading-[1.2]">
              {action.title}
              <span className="uni-gradient-primary">
                <br />
                {action.subTitle}
              </span>
            </p>
            <p className="text-[#BFC9CC] text-[14px] md:text-2xl">
              {action.description} <br /> {action.subDescription}
            </p>
          </div>
          <div className="m-auto w-full md:w-[450px] h-auto md:flex-[50%]">
            <img
              src={action.imageUrl}
              alt=""
              loading="lazy"
              className="m-auto w-[80%] h-auto css-1e2fy0l"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default InstantActions;
