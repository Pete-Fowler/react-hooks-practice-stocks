import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([]);
  const [ portfolio, setPortfolio ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => setStocks(data));
  }, []);
  
  function toggleInPortfolio(name) {
    const inPortfolio = portfolio.find(stock => stock.name === name);
    if(!inPortfolio) {
      const stockArr = stocks.filter(stock => stock.name === name);
      setPortfolio(portfolio => [...portfolio, ...stockArr]);
    } else {
      setPortfolio(portfolio => portfolio.filter(stock => stock.name !== name));
    }
  }

  const stocksShown = stocks;
  const portfolioShown = portfolio;

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksShown} toggleInPortfolio={toggleInPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolioShown} toggleInPortfolio={toggleInPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
