import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function Chart() {
  const [stock, setStock] = useState("MAFATIND");
  const [data, setData] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "CandleStick Chart",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  const [companyInfo, setCompanyInfo] = useState(null);

  const fetchChart = async (stockSymbol) => {
    try {
      const [response1, response2] = await Promise.all([
        fetch(
          `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockSymbol}.BSE&outputsize=compact&apikey=SS0TY4FORK5PQ5P1`
        ),
        fetch(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}.BSE&apikey=SS0TY4FORK5PQ5P1`
        ),
      ]);

      const responseData1 = await response1.json();
      const responseData2 = await response2.json();

      if (!responseData1["Time Series (Daily)"]) {
        throw new Error("API LIMIT HAS BEEN REACHED");
      }

      const timeSeries = responseData1["Time Series (Daily)"];
      const mappedData = Object.keys(timeSeries).map((datetime) => ({
        x: new Date(datetime),
        y: [
          parseFloat(timeSeries[datetime]["1. open"]),
          parseFloat(timeSeries[datetime]["2. high"]),
          parseFloat(timeSeries[datetime]["3. low"]),
          parseFloat(timeSeries[datetime]["4. close"]),
        ],
      }));

      setData((prevState) => ({
        ...prevState,
        series: [
          {
            data: mappedData,
          },
        ],
      }));

      setCompanyInfo(responseData2["Global Quote"]);
    } catch (error) {
      console.error("Error fetching or processing data:", error);
    }
  };

  useEffect(() => {
    let timeOut = setTimeout(() => {
      fetchChart(stock);
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [stock]);

  const handleStockChange = (e) => {
    const stockSymbol = e.target.value.toUpperCase();
    setStock(stockSymbol);
  };

  return (
    <>
      <main >
        <section className="search-section mt-4  flex items-center justify-between">
          <div className="input-group flex items-center ">
            <form>
              <input
                className="input min-h-12 max-w-50 p-3 text-black border-[#C8ACD6] rounded-md border-2 "
                type="text"
                value={stock}
                onChange={handleStockChange}
                placeholder="Enter stock symbol"
              />
            </form>
          </div>

          {companyInfo && (
            <div className="flex flex-wrap items-center justify-between text-center sm:gap-12 bg-white rounded-md border-2 pl-3 border-[#C8ACD6] pr-3 w-2/4">
              <div>
                <p className="text-sm font-medium text-gray-500">Open</p>
                <p className="text-lg font-semibold text-gray-900">
                  {companyInfo["02. open"]}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-green-500">High</p>
                <p className="text-lg font-semibold text-gray-900">
                  {companyInfo["03. high"]}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-500">Low</p>
                <p className="text-lg font-semibold text-gray-900">
                  {companyInfo["04. low"]}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Price</p>
                <p className="text-lg font-semibold text-gray-900">
                  {companyInfo["05. price"]}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Change %</p>
                <p className="text-lg font-semibold text-gray-900">
                  {companyInfo["10. change percent"]}
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="mt-10">
          <div className="bg-white rounded-lg">
            <h3 className="font-medium text-3xl  ml-2 mt-5 pt-4 mr-2">
              Price Movement
            </h3>
            <ReactApexChart
              options={data.options}
              series={data.series}
              type="candlestick"
              height={350}
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default Chart;
