import React from "react"
import Header from "../../components/Header/header";
import Image from "../../components/Image/image";
import Offers from "../../components/Offers-component/offers";
import Brochure from "../../components/Brochure/brochure";
import ProjectHighlights from "../../components/Project Highlights/project-highlights";
import PaymentPlans from "../../components/Payment Plans/payment-plans";
import ScheduleVisit from "../../components/Schedule Visit/schedule-visit";
import Specification from "../../components/Project Specification/project-specification";
const Homepage= ()=>{
    return(
        <div>
            <Image />
            <Offers />
            <Brochure />
            <ProjectHighlights />
            <PaymentPlans />
            <ScheduleVisit />
            <Specification />
        </div>
    )
}

export default Homepage