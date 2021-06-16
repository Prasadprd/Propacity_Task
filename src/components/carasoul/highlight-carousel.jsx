import React from "react";
import {Carousel} from "react-bootstrap"
import image from "../../assets/image/image.png"

const HighlightCarousel =()=>{
    const imageArray=[image,image,image]

    return(
        <Carousel>
            {
                imageArray.map(image=>{
                    return (
                        <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={image}
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