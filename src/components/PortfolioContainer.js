import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onSellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      <div>
        {portfolio.map((stock) => (
          <div key={stock.ticker}>
            <Stock stock={stock} onClick={() => onSellStock(stock)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioContainer;
