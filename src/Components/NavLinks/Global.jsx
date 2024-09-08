import React, { useEffect, useState } from "react";

function Global() {
  useEffect(() => {
    const container = document.getElementById("ticker-tape-widget");

    // Clean up any existing widget before adding a new one
    container.innerHTML = "";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index",
        },
        {
          description: "NASDAQ",
          proName: "NASDAQ:NDX",
        },
        {
          description: "NIKKEI",
          proName: "CME:NKD1!",
        },
        {
          description: "FTSE",
          proName: "SPREADEX:FTSE",
        },
        {
          description: "BITCOIN",
          proName: "BITSTAMP:BTCUSD",
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "in",
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  const [gainer, setGainer] = useState([]);
  const [losser, setLosser] = useState([]);
  
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=NLFFIMV93ELHBWGR"
      );
      const data = await response.json();
      const feed = data.top_gainers;
      const loss = data.top_losers;
      // console.log(feed);

      setGainer(feed);
      setLosser(loss);
    };
    fetchPost();
  }, []);

  return (
    <>
      <div className="tradingview-widget-container">
        <div
          id="ticker-tape-widget"
          className="tradingview-widget-container__widget"
        ></div>
      </div>

      <h2 className="text-2xl font-semibold text-white text-center mt-5">
        TOP GAINER & LOSSER
      </h2>
      <section className="global-stocks min-h-screen mt-10 ml-5 mr-5 flex mb-5 gap-2">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5 ">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2 text-green-600 text-center">
              Top Gainers
            </h2>
            <ul className="divide-y divide-gray-200">
              {gainer?.map((gainer) => (
                <li
                  key={gainer.ticker}
                  className="py-3 flex justify-between items-center gap-60"
                >
                  <span className="font-medium">{gainer.ticker}</span>
                  <span className="text-green-500">
                    {gainer.change_percentage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-5">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold mb-2 text-red-600 text-center">Top Losers</h2>
            <ul className="divide-y divide-gray-200">
              {losser?.map((loser, index) => (
                <li
                  key={index}
                  className="py-3 flex justify-between items-center gap-60"
                >
                  <span className="font-medium">{loser.ticker}</span>
                  <span className="text-red-500">
                    {loser.change_percentage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Global;
