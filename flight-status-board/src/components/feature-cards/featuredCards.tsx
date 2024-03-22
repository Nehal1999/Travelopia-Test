import CardLayout from "../card-layout/cardLayout";
import aboutUsImg from '../../assets/images/AboutUs.jpeg';
import brandsImg from '../../assets/images/partners.jpeg'
import antarcticaImg from '../../assets/images/antarctica.jpeg';

const FeaturedCards = ()=>{
    return (
        <>
        <div className="container text-center" style={{marginTop:'3rem'}}>
            <div className="row">
                <div className="col">
                <CardLayout title="About Us" text="We are travel experts. Our award-winning travel brands create unique experiences for our guests around the world. From wildlife encounters to polar expeditions our business is not just about showing people the world, but designing new ways to experience it." btn_text="Know more" img_source={aboutUsImg}/>
                </div>
                <div className="col">
                <CardLayout title="Our brands" text="Specialising in expeditions to Antarctica and the Arctic, Quark Expeditions has been the leading provider of polar adventure travel for three decades. With a diverse fleet of expedition vessels and icebreakers, we offer travellers access to the most remote places on Earth." btn_text="know More" img_source={brandsImg}/>
                </div>
                <div className="col">
                <CardLayout title="TCS World Travel" text="TCS World Travel have been enriching lives through our all-inclusive jet expeditions and custom itineraries for almost 30 years. We are the world's most awarded private jet expedition company. Our all-inclusive journeys deliver unparalleled and meaningful experiences." btn_text="Know More" img_source={antarcticaImg}/>
                </div>
            </div>
        </div>
        </>
    )

}

export default FeaturedCards;