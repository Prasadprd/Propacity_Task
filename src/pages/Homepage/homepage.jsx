import React ,{useState}from "react"
import Header from "../../components/Header/header";
import Image from "../../components/Image/image";
import Offers from "../../components/Offers-component/offers";
import Brochure from "../../components/Brochure/brochure";
import ProjectHighlights from "../../components/Project Highlights/project-highlights";
import PaymentPlans from "../../components/Payment Plans/payment-plans";
import ScheduleVisit from "../../components/Schedule Visit/schedule-visit";
import Specification from "../../components/Project Specification/project-specification";
import Location from "../../components/Location/location";
import Register from "../../components/Register/register";
import PiramalRealty from "../../components/Piramal Realty/piramal-realty";
import Footer from "../../components/Footer/footer";


const Homepage= ()=>{
    const [show,setShow] =useState(false)

    return(
        <div>
            <Image />
            <Offers />
            <Brochure />
            <ProjectHighlights />
            <PaymentPlans />
            <ScheduleVisit />
            <Specification />
            <Location />
            <Register />
            <Footer />
            {/* <PiramalRealty /> */}
        </div>
    )
}

export default Homepage