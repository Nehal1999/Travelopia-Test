import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { FLIGHT_DETAILS } from "../../api/API_CONSTANTS";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/loading-component/loading";
const FlightDetails = ()=>{
    const {getData,data,loading,error} = useFetch();
    const navigate = useNavigate();
    useEffect(()=>{
        //fetch flight data when component mounts
        getData(FLIGHT_DETAILS)

        //fetch flight data every 5 min(3,00,000 ms)
        const intervalId = setInterval(()=>{
            getData(FLIGHT_DETAILS);
        },300000)

        return ()=>{
            //cleanup function
            clearInterval(intervalId)
        }
    },[]);


    const handleClick = (id : any)=>{
        navigate(`/flights/${id}`);
    }

    return (
        <>
        {!loading ? <table className="table table-hover table-light" style={{marginTop: '80px'}}>
        <thead>
            <tr>
            <th>Flights</th>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((flight : any,index : number)=>{
                const {id,flightNumber,airline,origin,destination,departureTime,status} = flight;
                return (
                    <tr key={index} onClick={()=>handleClick(id)}>
                    <th scope="row">{id}</th>
                    <td>{flightNumber}</td>
                    <td>{airline}</td>
                    <td>{origin}</td>
                    <td>{destination}</td>
                    <td>{departureTime}</td>
                    <td>{status}</td>
                    </tr>
                )
            })}
            
        </tbody>
        </table> : <Loading/>}
        </>
    )
}

export default FlightDetails;