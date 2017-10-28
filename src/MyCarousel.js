import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

import photo1 from './img/images1.jpg';
import photo2 from './img/images2.jpg';
import photo3 from './img/images3.jpg';
import photo4 from './img/images4.jpg';
import photo5 from './img/images5.jpg';
import photo6 from './img/images6.jpg';

export default class MyCarousel extends Component {
    constructor(props) {
        super(props);

        this.photos = [
            {
                name : photo1,
                legend: 'туман',
            },
            {
                name : photo2,
                legend: 'Степ',
            },
            {
                name : photo3,
                legend: 'Замок',
            },
            {
                name : photo4,
                legend: 'річка',
            },
            {
                name : photo5,
                legend: 'водопад',
            },
            {
                name : photo6,
                legend: 'ліс',
            }

        ];

        this.renderHeader = this.renderHeader.bind(this)
    }
    renderHeader() {
        return (
            <Carousel autoPlay>
                {this.photos.map(function(photo, index) {
                    return (
                        <div  key={index}>
                            <img src={photo.name}/>
                            <p className="legend">{photo.legend}</p>
                        </div>
                    )
                }) }
            </Carousel >
        )
    }
    render () {
        return (
                <section>
                    {this.renderHeader()}
                </section>
        )
    }
}

