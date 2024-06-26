import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FlightsDetails from './pages/flight-details/flightsDetails';
import NavbarComponent from './components/navbar/navbar';
import FlightInfo from './pages/flight-info/flightInfo';
import TravelopiaHomePage from './pages/travelopia-homepage/travelopiaHomePage';
import PageNotFound from './components/page-not-found/PageNotFound';

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <TravelopiaHomePage/>
    },
    {
      path : "/flights",
      element : <FlightsDetails/>
    },
    {
      path : "/flights/:id",
      element : <FlightInfo/>
    },
    {
      path : '*',
      element : <PageNotFound/>
    }
  ])

  return (
    <> 
    <>
    <NavbarComponent/>
    </>
    <div className='container'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  );
}

export default App;
