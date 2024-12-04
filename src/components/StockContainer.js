import React, { useMemo } from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onBuyStock, sortOption, filterOption }) {
  const sortedAndFilteredStocks = useMemo(() => {
    let filteredStocks = stocks.filter((stock) => 
      filterOption ? stock.type === filterOption : true
    );

    if (sortOption === "Alphabetically") {
      return filteredStocks.sort((a, b) => a.ticker.localeCompare(b.ticker));
    } else if (sortOption === "Price") {
      return filteredStocks.sort((a, b) => a.price - b.price);
    }

    return filteredStocks;
  }, [stocks, sortOption, filterOption]);

  return (
    <div>
      <h2>Stocks</h2>
      {sortedAndFilteredStocks.map((stock) => (
        <div key={stock.ticker}>
          <Stock stock={stock} onClick={() => onBuyStock(stock)} />
        </div>
      ))}
    </div>
  );
}

export default StockContainer;
