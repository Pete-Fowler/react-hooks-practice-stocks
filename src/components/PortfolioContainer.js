import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, toggleInPortfolio }) {
  
  const stocks = portfolio.map(item => <Stock key={item.id}
    name={item.name}
    ticker={item.ticker} 
    type={item.type} 
    price={item.price}
    toggleInPortfolio={toggleInPortfolio}
  />);

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocks}
    </div>
  );
}

export default PortfolioContainer;
