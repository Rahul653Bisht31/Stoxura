import React from "react";

function Universe(){
    return(
        <div className="container mt-5 mb-4">
            <div className="row text-center">
                <h1>The Stoxura Universe</h1>
                <p>Extend your trading and investement experience even further with our partner platforms</p>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\smallcaseLogo.png" alt="" />
                    <p className="text-small text-muted">Thematic investement platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\streakLogo.png" style={{width:"38%"}} alt="" />
                    <p className="text-small text-muted">Algo & strategy platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\sensibullLogo.svg" style={{width:"50%"}} alt="" />
                    <p className="text-small text-muted">Options trading platform</p>
                </div>
                <div className="col-4 p-2 mt-4">
                    <img src="media\images\stoxuraLogo.png" style={{width:"50%"}} alt="" />
                    <p className="text-small text-muted">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\goldenpiLogo.png" alt="" />
                    <p className="text-small text-muted mt-2">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\dittoLogo.png" style={{width:"25%"}} alt="" />
                    <p className="text-small text-muted mt-2">Options trading platform</p>
                </div>
                <button className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{width:"15%",margin:"0 auto"}}>Sign up now</button>
            </div>
        </div>
    );
}

export default Universe;