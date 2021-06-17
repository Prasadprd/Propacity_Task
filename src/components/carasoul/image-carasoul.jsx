import React from "react";
import {Carousel} from "react-bootstrap"
import image from "../../assets/image/image.png"
import city from "../../assets/city.jfif"

const ImageCarousel =()=>{
    return (
        <Carousel>
            <Carousel.Item>
                
                <img
                className="d-block w-100"
                src={image}
                alt="First slide"
                />
                <Carousel.Caption style={{color:"black"}}>
                <h3>VIEWS SO SPECTACULAR. AN OFFER SO UNIQUE</h3>
                <p>2 BHK: 3.69 Cr onwards* | 3 BHK: 4.59 Cr onwards*</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption style={{color:"black"}}>
                    <h3>VIEWS SO SPECTACULAR. AN OFFER SO UNIQUE</h3>
                    <p>2 BHK: 3.69 Cr onwards* | 3 BHK: 4.59 Cr onwards*</p>
                </Carousel.Caption>
                <img
                className="d-block w-100"
                src={image}
                alt="Second slide" 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={image}
                alt="Third slide"
                />

                <Carousel.Caption style={{color:"black"}}>
                <h3>VIEWS SO SPECTACULAR. AN OFFER SO UNIQUE</h3>
                <p>2 BHK: 3.69 Cr onwards* | 3 BHK: 4.59 Cr onwards*</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel;