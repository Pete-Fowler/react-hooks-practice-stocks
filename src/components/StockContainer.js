import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, toggleInPortfolio }) {


  const cards = stocks.map(stock => <Stock 
    key={stock.id}
    name={stock.name}
    ticker={stock.ticker} 
    type={stock.type} 
    price={stock.price}
    toggleInPortfolio={toggleInPortfolio}
  />);

  return (
    <div>
      <h2>Stocks</h2>
      {cards}
    </div>
  );
}

export default StockContainer;
