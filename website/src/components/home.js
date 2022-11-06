import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="home">

       <Link style={{textDecoration:'none'}} to="/rates"><button className="rates">Rates Page</button></Link>
       <Link style={{textDecoration:'none'}} to="/search"><button className="search">Search Page</button></Link>
        </div>
    )

}