import React from "react";
import {Carousel} from "react-bootstrap"
import image from "../../assets/image/image.png"

const HighlightCarousel =()=>{
    const imageArray=[
        {
            key:"1",
            image
        },
        {
            key:"2",
            image
        },
        {
            key:"3",
            image
        }
    ]

    return(
        <Carousel>
            {
                imageArray.map(image=>{
                    return (
                        <Carousel.Item interval={2000} key={image.key}>
                        <img
                            className="d-block w-100"
                            src={image.image}
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                    )
                })
            }    
            
        </Carousel>
    )
}

export default HighlightCarousel;