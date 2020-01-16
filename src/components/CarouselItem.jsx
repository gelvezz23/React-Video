import React from 'react';
import './../assets/styles/components/CarouselItem.scss';
import playIcon from './../assets/image/icons8-play-64.png';
import moreIcon from './../assets/image/icons8-más-2-matemáticas-64.png';

const CarouselItem = ({cover, title, year, contentRating, duration}) =>(
    <div className="carousel-items">
        <img className="carousel-items__img" src={cover} alt={title}/>
        <div className="carousel-items__details">
            <img src={playIcon}/>
            <img src={moreIcon}/>
<p className="carousel-items__details--title">{title}</p>
            <p className="carousel-items__details--subtitle">
            {`${year} ${contentRating} ${duration} minutos`}</p>
        </div>
        
    </div>
    );

export default CarouselItem;