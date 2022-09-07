import React from "react";

function Stock({ ticker, name, type, price, toggleInPortfolio }) {
  
  
  return (
    <div onClick={() => { 
      toggleInPortfolio(name) 
    }}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
