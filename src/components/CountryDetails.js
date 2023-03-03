import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


export default function CountryDetails(props){
    let { id } = useParams();
    const [country, setCountry] = useState(0)

    useEffect(()=>{
        let result = props.data.find((item)=>item.alpha3Code === id)
        setCountry(result)
    }, [id])

return(
    <>
    <div className="card mt-5" style={{width: "40rem", border: "0px"}}>
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country && country.alpha2Code.toLowerCase()}.png`} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{country && country.name.common}</h5>
    </div>
    <table class="table">
    <tbody>
    <tr>
      <th scope="row">Capital</th>
      <td>{country && country.capital}</td>
    </tr>
    <tr>
      <th scope="row">Area</th>
      <td>{country && country.area}Km²</td>
    </tr>
    <tr>
      <th scope="row">Borders</th>
      {country && country.borders.map((item)=>{return (<tr key={item}><td><Link to={`/${item}`} >{item}</Link></td></tr>)})}
    </tr>
    </tbody>
    </table>
    </div>
    </>
)
}