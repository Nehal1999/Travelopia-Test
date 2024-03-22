import React from "react";
import './loading.css';
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className='container loader-center'>
    <Spinner animation="border" />
    </div>
  );
};

export default Loading;
