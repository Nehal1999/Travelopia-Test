import CarouselComponent from "../../components/carousel-component/CarouselComponent";
import FeaturedCards from "../../components/feature-cards/featuredCards";
import ViewFlights from "../../components/view-flights-card/viewFlights";

const TravelopiaHomePage = () =>{
    return  (
        <>
        <div className="container" style={{display:'flex',justifyContent :'center',marginBottom:'2rem'}}>
        <h1 style={{color : '#576b6b'}}><em>Book your experiences with Travelopia</em></h1>
        </div>
        <CarouselComponent/>
        <ViewFlights/>
        <FeaturedCards/>
        </>
    )
}

export default TravelopiaHomePage;