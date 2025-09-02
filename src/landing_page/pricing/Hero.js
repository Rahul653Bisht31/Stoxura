import React from "react";

function Hero(){
    return(
        <div className="container">
            <div className="row text-center mt-5 p-5 border-bottom">
                <h1>Pricing</h1>
                <h3 className="text-muted fs-5 mt-4">Free equity investments and the flat ₹20 traday and F&O trades</h3>
            </div>
            <div className="row mt-5 p-5 text-center">
                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-2 mb-4">Free equity delivery</h1>
                    <p className="text-muted">All equity delivery investements (NSE,BSE), are absolutely free - ₹ 0 brokerage</p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/images/intradayTrades.svg" />
                    <h1 className="fs-2">Intraday and F&Q trades</h1>
                    <p className="text-muted">Flat Rs.20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                </div>
                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" />
                    <h1 className="fs-2">Free direct MF</h1>
                    <p className="text-muted">All direct mutual fund investements are absolutely free - 0 commissions & DP ₹ charges.</p>
                </div>
            </div>

        </div>
    );
}

export default Hero;