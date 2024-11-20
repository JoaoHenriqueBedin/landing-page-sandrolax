import React from 'react';
import MechanicImage1 from "../assets/images/imagemMecanica01.png";
import MechanicImage2 from "../assets/images/imagemMecanica02.png";
import MechanicImage3 from "../assets/images/imagemMecanica03.png";
import "../styles/gallery.css";

const images = [MechanicImage1, MechanicImage2, MechanicImage3];

const Carousel = () => {
    return (
        <div className="carousel">
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image} alt={`Foto da oficina ${index + 1}`} />
                    </div>
                ))}
                {images.map((image, index) => (
                    <div className="gallery-item" key={index + images.length}>
                        <img src={image} alt={`Foto da oficina ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;