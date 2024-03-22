import React from 'react'
import { useNavigate } from 'react-router-dom';

const ViewFlights = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/flights');
    }
  return (
    <div className="card" style={{marginTop :"3rem",backgroundColor: 'lightblue'}}>
    <div onClick={handleClick} className="card-body" style={{justifyContent: 'center',alignItems:'center',display :'flex'}}>
        <strong><em>Click to view Flight status board</em></strong>
    </div>
    </div>
  )
}

export default ViewFlights;
