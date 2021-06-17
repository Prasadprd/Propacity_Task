import React from "react"
import {IoIosArrowForward} from "react-icons/io"
import { Button } from "react-bootstrap"

import "./schedule-visit.css"

const ScheduleVisit = ()=>{
    return (
        <div className="container-fluid main-container" >
            <p className ="text">Schedule A Free Site Visit or Online Walkthrough</p>
            <Button className="button d-none d-md-inline" variant="dark">Schedule Now <IoIosArrowForward /> </Button>
        </div>
    )
}

export default ScheduleVisit ;