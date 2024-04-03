/* eslint-disable @next/next/no-img-element */
import React from "react";

function Footer() {
  return (
    <>
      <section className="py-12 lg:py-[100px] bg-background-gradient bg-cover download-bg">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-around items-center my-4">
          <p className="mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight">
            Download now to get started
          </p>
          <div className="flex">
            <a
              href="https://unicards.onelink.me/KRuW/"
              className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black google-btn-2"
            >
              <svg
                viewBox="0 0 16 16"
                focusable="false"
                className="footer-icon css-xcmdz3"
              >
                <path
                  d="M0.813438 0C0.793438 0.062 0.773438 0.123333 0.773438 0.205333V15.6913C0.773438 15.836 0.814104 15.918 0.896104 16L8.5061 7.938L0.813438 0ZM9.01944 8.472L10.9868 10.502L8.1781 12.102C8.1781 12.102 4.6081 14.1313 2.63944 15.2613L9.01944 8.472ZM9.55344 7.918L11.6641 10.1127C11.9948 9.92867 14.5781 8.45133 14.9468 8.246C15.3361 8.02067 15.2968 7.71267 14.9661 7.54867C14.6601 7.37867 12.0768 5.89867 11.6861 5.65867L9.55077 7.92L9.55344 7.918ZM9.0181 7.38467L11.0074 5.272L8.1681 3.65133C8.1681 3.65133 3.53944 1.00333 1.99944 0.119333L9.01944 7.38467H9.0181Z"
                  fill="black"
                ></path>
              </svg>
              Google Play
            </a>
            <a
              href="https://uni-growth.onelink.me/v6cm/"
              className="w-32 md:w-56 h-10 md:h-[60px] leading-8 md:leading-[3rem] text-center text-[14px] md:text-lg mr-[10px] border-2 rounded-xl border-black apple-btn-2"
            >
              <svg
                viewBox="0 0 16 16"
                focusable="false"
                className="footer-icon css-xcmdz3"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M4.71676 15.6999C4.40143 15.4893 4.12143 15.2313 3.88743 14.9333C3.63209 14.6246 3.39543 14.2999 3.17809 13.9639C2.66743 13.2173 2.26809 12.4006 1.99143 11.5399C1.65809 10.5386 1.49609 9.57994 1.49609 8.64194C1.49609 7.59527 1.72276 6.68194 2.16409 5.91527C2.49076 5.31527 2.97743 4.81327 3.56409 4.4606C4.13076 4.10727 4.79076 3.91393 5.45743 3.9006C5.69076 3.9006 5.94409 3.93393 6.21076 4.0006C6.40409 4.05393 6.63743 4.1406 6.92409 4.24727C7.29076 4.38727 7.49076 4.47393 7.55743 4.49393C7.77076 4.57394 7.95076 4.60727 8.09076 4.60727C8.19743 4.60727 8.35076 4.57394 8.52076 4.5206C8.61743 4.48727 8.80076 4.42727 9.06076 4.31393C9.31809 4.2206 9.52209 4.1406 9.68409 4.0806C9.93076 4.00727 10.1694 3.9406 10.3841 3.90727C10.6441 3.86727 10.9021 3.85393 11.1494 3.87393C11.6228 3.90727 12.0561 4.00727 12.4428 4.15393C13.1228 4.42727 13.6714 4.85394 14.0808 5.4606C13.9074 5.56727 13.7474 5.69127 13.5974 5.82727C13.2728 6.11394 12.9974 6.45394 12.7774 6.8306C12.4908 7.34394 12.3441 7.92394 12.3481 8.5106C12.3581 9.2326 12.5414 9.86727 12.9081 10.4173C13.1661 10.8173 13.5108 11.1599 13.9308 11.4413C14.1374 11.5813 14.3188 11.6779 14.4908 11.7413C14.4108 11.9913 14.3228 12.2346 14.2208 12.4746C13.9894 13.0126 13.7141 13.5279 13.3874 14.0146C13.0994 14.4346 12.8728 14.7479 12.7008 14.9546C12.4328 15.2746 12.1741 15.5146 11.9141 15.6859C11.6274 15.8759 11.2908 15.9766 10.9461 15.9766C10.7128 15.9866 10.4794 15.9566 10.2568 15.8919C10.0634 15.8286 9.87276 15.7573 9.68609 15.6766C9.49076 15.5873 9.28876 15.5113 9.08276 15.4499C8.82943 15.3833 8.56943 15.3513 8.30676 15.3519C8.04009 15.3519 7.78009 15.3853 7.53343 15.4486C7.32676 15.5073 7.12676 15.5793 6.92876 15.6653C6.64876 15.7819 6.46543 15.8586 6.35876 15.8919C6.14276 15.9559 5.92143 15.9946 5.69876 16.0086C5.35209 16.0086 5.02943 15.9086 4.70809 15.7086L4.71676 15.6999ZM9.28609 3.39327C8.83276 3.61993 8.40209 3.71593 7.97076 3.68393C7.90409 3.25327 7.97076 2.8106 8.15076 2.32593C8.31076 1.9126 8.52409 1.53927 8.81743 1.20593C9.12409 0.859268 9.49076 0.572601 9.90409 0.365934C10.3441 0.139268 10.7641 0.0192676 11.1641 -0.000732422C11.2174 0.452601 11.1641 0.899268 10.9974 1.37927C10.8454 1.80593 10.6188 2.19927 10.3308 2.5526C10.0408 2.89927 9.68076 3.18593 9.27343 3.3926L9.28609 3.39327Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              App Store
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="relative w-full bg-black-2">
          <div className="flex items-center justify-center p-4 text-grey-dark">
            <p>Uni maintains the highest level of security standards</p>
            <img
              src="https://uni.cards/images/pcidss_cert.svg"
              className="ml-3 w-20 css-0"
              width="80px"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
        <footer
          className="flex flex-col items-center bg-black-12 text-white pt-[30px] px-4 md:px-14 md:pt-[50px] pb-40"
          id="footer"
        >
          <div className="w-full max-w-[1240px] min-h-[auto]">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
              <div className="flex flex-col w-full lg:w-1/2 items-start">
                <div className="mx-0 md:m-0">
                  <svg
                    className="Logo_logo_white__zowGB"
                    viewBox="0 0 85 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "block" }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                      fill="#00DCC8"
                    ></path>
                  </svg>
                </div>
                <div className="text-grey-dark text-[13px] lg:text-base">
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                    Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI
                    Colony, Koramangala, Bengaluru, Karnataka 560034
                  </p>
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px] mt-4">
                    Contact Us:<a href="tel: 080 68216821">080 68216821</a>
                  </p>
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                    Email:<a href="mailto: care@uni.club"> care@uni.club</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] h-[1px] w-full max-w-[1240px] mt-8"></div>
          <div className="py-4 w-full max-w-[1240px] min-h-[auto] flex justify-between">
            <p className=" ">
              <a
                href="https://www.sbmbank.co.in/aboutus/grievance-redressal-mechanism.php"
                className="text-[#FFFFFF]"
              >
                <u>Grievance Redressal Mechanism</u> - SBM Bank India
              </a>
            </p>
            <p className="ml-auto">
              <a
                href="./docs/Uni_CSR_Policy_v1_Sep22.pdf"
                className="text-[#FFFFFF]"
                about="_blank"
              >
                <u>CSR Policy</u>
              </a>
            </p>
          </div>
          <div className="spacer-gradient h-[1px] w-full max-w-[1240px] mx-0 mb-5 md:mb-8"></div>
          <div className="flex w-full max-w-[1240px] flex-col justify-center md:flex-row md:justify-between">
            <div className="flex w-full flex-wrap flex-1 justify-center md:justify-start">
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://www.instagram.com/uni_cards/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://www.linkedin.com/company/uni-cards"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://twitter.com/cards_uni"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://www.facebook.com/Uni-Cards-104179288358904"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
              <div className="h-10 w-30">
                <a
                  className="py-0 px-[18px] h-[60px]"
                  href="https://careers.uni.cards/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
                <img
                  width="6px"
                  height="6px"
                  src="https://www.uni.cards/images/footer-arrow.png"
                  alt="arrow"
                  className="css-0"
                />
              </div>
            </div>
            <div className="p-0 pb-5 flex justify-center flex-wrap">
              <span data-testid="cc-kfs">
                <a
                  className="h-[60px]"
                  href="/credit-card-key-facts"
                  target="_blank"
                >
                  Credit Card KFS
                </a>
                <span className="px-2">|</span>
              </span>
              <span data-testid="nxwave-tnc">
                <a
                  className="h-[60px]"
                  href="/credit-card-MITC"
                  target="_blank"
                >
                  Credit Card MITCs
                </a>
                <span className="px-2">|</span>
              </span>
              <span data-testid="uni-tnc">
                <a
                  className="h-[60px]"
                  href="/privacy-policy-main"
                  target="_blank"
                >
                  Uni T&amp;Cs
                </a>
                <span className="px-2">|</span>
              </span>
              <span data-testid="nbfc-tnc">
                <a className="h-[60px]" href="/nbfc-terms" target="_blank">
                  Lending Partner TnCs
                </a>
              </span>
            </div>
          </div>
          <div className="sm:h-40 md:hidden"></div>
        </footer>
      </section>
    </>
  );
}

export default Footer;
