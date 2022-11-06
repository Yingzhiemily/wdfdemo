import React,{useState} from "react";


export default function Rates() {
    
    const [searchResult,setSearchResult] = useState();
    const [rate,setRate] = useState();
 
   function fetchData (){
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    fetch(`https://api.fastforex.io/fetch-all?from=EUR&api_key=`, options)
    .then(results => results.json())
    .then(json => {console.log(json);
        setRate(json.results[searchResult])
    })
    .catch(err => console.error(err));
  }
  
 
 
    return (
            <>
            <div className="box">
            <h2>Search rate</h2>
                <div>
                <form>
                <input type="text" value={searchResult} onChange={e => setSearchResult(e.target.value)}/> 
                <button onClick ={fetchData()}>Search</button>
                <br/>
                <output >1 EUR = {JSON.stringify(rate)} {searchResult}</output>
                </form>
                </div>
            </div>
            </>
    )
   
}
