import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const container = document.getElementById('tradingview-widget');

   
    container.innerHTML = '';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.innerHTML = JSON.stringify({
      "interval": "5m",
      "width": 425,
      "isTransparent": true,
      "height": 450,
      "symbol": "NSE:GREAVESCOT",
      "showIntervalTabs": true,
      "displayMode": "single",
      "locale": "en",
      "colorTheme": "light"
      
    });

    container.appendChild(script);
    
    return () => {
      
      container.innerHTML = '';
    };
  }, []); 

  return (
    <div className="tradingview-widget-container text-white">
      <div id="tradingview-widget" className="tradingview-widget-container__widget text-white"></div>
      <div className="tradingview-widget-copyright text-white">
        {/* <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
      </div>
    </div>
  );
};

export default TradingViewWidget;
