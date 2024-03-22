import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { FLIGHT_DETAILS } from "../../api/API_CONSTANTS";
import Loading from "../../components/loading-component/loading";
import airlineImg from '../../assets/images/airline.jpeg';
import './flightInfo.css'

const FlightInfo = () =>{
    const { id } = useParams();
    const {data, getData,loading} = useFetch();
    useEffect(()=>{
        getData(FLIGHT_DETAILS+`/${id}`)
    },[])
    return (
        <>
        <div className="container" style={{display:'flex',justifyContent :'center',marginBottom:'2rem'}}>
        <h1 style={{color : '#576b6b'}}><em>Flight information</em></h1>
        </div>

        <div className="container img-style">
        <img src={airlineImg}/>
        </div>
        
        {(!loading && data) ? 
        <div className="card">
        <div className="card-header">
            <strong>Flight Number : {data.flightNumber}</strong>
        </div>
        <div className="card-body">
            <h5 className="card-title">Airline : {data.airline}</h5>
            <table className="table">
					<tbody>					
						<tr>
						<td>Origin</td>
						<td>{data['origin']}</td>
						</tr>
						<tr>
						<td>Destination</td>
						<td>{data['destination']}</td>
						</tr>
						<tr>
						<td>Departure Time</td>
						<td>{data['departureTime']}</td>
						</tr>
						<tr>
						<td>Status</td>
						<td>{data['status']}</td>
						</tr>
					</tbody>
				</table>
        </div>
        </div> : 
        <Loading/>}
        </>
    )
}

export default FlightInfo;