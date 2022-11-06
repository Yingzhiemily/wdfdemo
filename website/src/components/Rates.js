import React,{useState} from "react";





export default function Rates() {
    
    const [usd,setUsd] = useState();
    const [gbp,setGbp] = useState();
    const [cny,setCny] = useState();
    const [jpy,setJpy] = useState();
    const [eur,setEur] = useState();
    const [result,setResult] = useState(0);
    const [result2,setResult2] = useState(0);
    const [result3,setResult3] = useState(0);
    const [result4,setResult4] = useState(0);
    
    
 
   function fetchData (){
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    fetch('https://api.fastforex.io/fetch-all?from=EUR&api_key=', options)
    .then(results => results.json())
    .then(json => {console.log(json);
        setUsd(json.results.USD);
        setGbp(json.results.GBP);
        setCny(json.results.CNY);
        setJpy(json.results.JPY);
        setResult(eur*json.results.USD);
        setResult2(eur*json.results.GBP);
        setResult3(eur*json.results.CNY);
        setResult4(eur*json.results.JPY);
    })
    .catch(err => console.error(err));
  }
  fetchData();
 
    return (
            <>
            <div className="box">
            <h2>Exchange rate</h2>
                <div className="rates">
                   
                    1 EUR = {JSON.stringify(usd)} USD<br/>
                    1 EUR = {JSON.stringify(gbp)} GBP<br/>
                    1 EUR = {JSON.stringify(cny)} CNY<br/>
                    1 EUR = {JSON.stringify(jpy)} JPY<br/>
                </div>
                <div className='form'>
                <form onSubmit={fetchData}>
                <input type="number" value={eur} onChange={e => setEur(e.target.value)}/> EUR = <br/>
                {JSON.stringify(result)} USD<br/>
                {JSON.stringify(result2)} GBP<br/>
                {JSON.stringify(result3)} CNY<br/>
                {JSON.stringify(result4)} JPY
                </form>
                </div>
            </div>
            </>
    )
   
}