import React from "react";
import TradingViewWidget from "../Widget/TradingViewWidget";



function About() {
  return (
    <>
      <section className="about-section min-h-screen">
        <div className="container ml-5 mt-8">
          <h2 className="text-white text-2xl font-semibold text-center">
            About <span className="text-[#C8ACD6]">Stockers Hub</span>
          </h2>
          <div className="flex items-center justify-evenly ">
            <p className="text-white mt-12 font-bold text-justify w-2/4 ">
              Stockers Hub is a web application designed to provide real-time
              insights into the stock market. Our platform allows users to
              monitor key stock metrics such as daily high, low, and opening
              prices, along with interactive candlestick charts to track price
              movements throughout the day.
            </p>
            <img className="w-1/4" src="/images/man-laptop.png"/>
          </div>

          <div className="flex items-center flex-row-reverse justify-evenly ">
            <p className="text-white mt-10 font-bold text-justify w-2/4">
              Whether you're an experienced trader or just getting started,
              Stockers Hub offers a user-friendly interface and powerful tools
              to help you stay informed and make better investment decisions.
              With a clean design and intuitive navigation, our goal is to
              simplify the complexities of the stock market and make financial
              data accessible to everyone.
            </p>
            <img className="w-1/4" src="/images/two-laptop.png"/>
          </div>

          <div className="flex items-center justify-evenly ">
            <p className="text-white mt-10 font-bold text-justify w-2/4">
              Our data is sourced from reliable APIs, ensuring that you have
              access to accurate and up-to-date information. Additionally, we
              provide the latest news and company information to give you a
              comprehensive view of the market landscape.
            </p>
            <img className="w-1/4" src="/images/women-laptop.png"/>
          </div>

          <div className="flex flex-row-reverse items-center justify-evenly ">
            <p className="text-white mt-10 font-bold text-justify w-2/4">
              We are committed to continuously improving the platform by adding
              new features and enhancing the user experience. Thank you for
              choosing Stockers Hub as your go-to resource for stock market
              insights.
            </p>
            <img className="w-1/4" src="/images/human-illustrate.png"/>
          </div>

          <div className="flex items-center justify-evenly ">
            <p className="text-white mt-10 font-bold text-justify w-2/4">
              At Stockers Hub, we understand that the financial markets are
              dynamic and ever-changing. That's why we strive to offer a
              platform that adapts to the needs of our users, providing tools
              and resources that help you stay ahead in the fast-paced world of
              stock trading.
            </p>
            <img className="w-1/4" src="/images/stock-market.png"/>
          </div>
          <div className="justify-center flex mt-5">
            <TradingViewWidget />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
