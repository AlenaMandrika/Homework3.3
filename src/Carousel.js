import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import photo1 from './img/images1.jpg';
import photo2 from './img/images2.jpg';
import photo3 from './img/images3.jpg';
import photo4 from './img/images4.jpg';
import photo5 from './img/images5.jpg';
import photo6 from './img/images6.jpg';

export default class myCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay>
                <div>
                    <img src={photo1}/>
                    <p className="legend">Туман</p>
                </div>
                <div>
                    <img src={photo2}/>
                    <p className="legend">Степ</p>
                </div>
                <div>
                    <img src={photo3}/>
                    <p className="legend">Замок</p>
                </div>
                <div>
                    <img src={photo4}/>
                    <p className="legend">Річка</p>
                </div>
                <div>
                    <img src={photo5}/>
                    <p className="legend">Водопад</p>
                </div>
                <div>
                    <img src={photo6}/>
                    <p className="legend">Ліс</p>
                </div>
            </Carousel>
        );
    }
}

