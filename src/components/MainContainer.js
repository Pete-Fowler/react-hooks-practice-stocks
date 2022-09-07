import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [ stocks, setStocks ] = useState([]);
  const [ portfolio, setPortfolio ] = useState([]);
  const [ sorted, setSortedBy ] = useState('');
  const [ filtered, setFiltered ] = useState('Tech');


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

  function sortStocks(method) {
    setSortedBy(method);
  }

  function filterStocks(method) {
    setFiltered(method)
  }

  const stocksShown = stocks.sort((a, b) => {
    if(sorted === 'Alphabetically') {
      const aName = a.name.toUpperCase();
      const bName = b.name.toUpperCase();
      return aName < bName ? -1 : 1;
    } else {
      return a.price - b.price;
    }
  }).filter(stock => stock.type === filtered);

  const portfolioShown = portfolio;

  return (
    <div>
      <SearchBar sortStocks={sortStocks} filterStocks={filterStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksShown} sortStocks={sortStocks} toggleInPortfolio={toggleInPortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolioShown} toggleInPortfolio={toggleInPortfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
