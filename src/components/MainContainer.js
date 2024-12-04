import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [filterOption, setFilterOption] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  console.log(stocks);
  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleFilter = (event) => {
    setFilterOption(event.target.value);
  };

  const handleBuyStock = (stock) => {
    setPortfolio([...portfolio, stock]);
  };

  const handleSellStock = (stock) => {
    setPortfolio(portfolio.filter((item) => item !== stock));
  };

  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={stocks}
            onBuyStock={handleBuyStock}
            sortOption={sortOption}
            filterOption={filterOption}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolio={portfolio}
            onSellStock={handleSellStock}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
