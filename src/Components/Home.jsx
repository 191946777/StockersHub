import React from "react";
import Chart from "./Chart";


function Home() {
  return (
    <>
      <main className="">
        <section className="chart-section ml-5 mr-5 mt-10 mb-5 sm:min-h-screen ">
          <div className="chart w-3/3">
            <Chart />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
