import React from "react";

function Hero(){
    return(
        <section className="container-fluid" id="supportHero">
            <div className=" ps-5 pe-5 pt-5" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row p-5 ms-5" id="supportContent">
                <div className="col-7 p-5 ms-5">
                    <h1 className="fs-4 mb-4">Search for an answer or browse help <br /> topics to create a ticket</h1>
                    <input className="mb-3" type="text" style={{width:"87%"}} placeholder="Eg. how do I activate F&O,why is my order getting rejected.." /><br />
                    <a href="" className="me-3">Track account opening</a>
                    <a href="" className="me-3">Track segment activation</a>
                    <a href="" className="me-3">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-4 p-5">
                    <h1 className="fs-4">Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                        <br />
                        <li><a href="">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>    
                </div>
            </div>
        </section>
    );
}

export default Hero;