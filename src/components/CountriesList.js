import { Link } from "react-router-dom"

export default function CountriesList(props){
    
    return(
        <div className="row">
            <div className="col">
            {props.data.map((item)=>{
                return (
                    <div className="card mt-5" style={{width: "18rem"}} key={item.alpha3Code}>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name.common}</h5>
                        <Link to={`/${item.alpha3Code}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}
