// src/App.js
import "./App.css";
import { useState, useEffect} from "react";
import Navbar from "./components/Navbar"
import CountriesList from "./components/CountriesList"
import {Routes, Route} from "react-router-dom"
import CountryDetails from "./components/CountryDetails"


function App() {
  const [countries, setCountries] = useState(0)

  useEffect(()=>{
    fetch("https://ih-countries-api.herokuapp.com/countries")
    .then((response) => response.json())
    .then((data) => setCountries(data));
  }, [])

  return (
  <div className="App">
    <Navbar/>
    <div className="row justify-content-evenly">
      <div className="col-5">
        <CountriesList data={countries}/>
      </div>
      <div className="col-5">
      <Routes>
          <Route path="/:id" element={<CountryDetails data={countries}/>} />
      </Routes>
      </div>
    </div>
  </div>
  )
}
export default App;