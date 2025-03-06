import React from "react";
import './Hero.css'
import Header from "../Header/Header";
import hero_image from '../../assets/hero_image.png'
import heroBackImg from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../..//assets/calories.png'


const Hero = () => {
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/*the best add*/} {/**/}
                <div className="the-best-add">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                {/*hero Heading*/}
                <div className="hero-text">
                    <div>
                        <span className="strock-text">Shape</span>
                        <span> Your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we wll help you
                        </span>
                    </div>
                </div>
                {/*figures*/}
                <div className="figures">
                    <div><span>+140</span><span>Export Coaches</span></div>
                    <div><span>+978</span><span>Members Joined</span></div>
                    <div><span>+50</span><span>Fitness Programs</span></div>
                </div>
                {/*hero button*/}
                <div className="hero-button">
                    <buttons className="btn">Get Start with</buttons>
                    <buttons className="btn">Learn More</buttons>
                </div>
            </div>



            <div className="right-h">
                <button className="btn">join Now</button>

                <div className="heart-rate">
                    <img src={heart} alt="" />
                    <spam>Heart Rate</spam>
                    <spam>116 bpm</spam>
                </div>
                {/*hero image*/}
                <img src={hero_image} alt="" className="hero-image"/>
                <img src={heroBackImg} alt="" className="back-ground-img" />

                {/*calories*/}
                <div className="clories">
                 <img src={calories} alt="" className="calories"/>   
                 <span>Calories Buened</span><span>220 kcal</span>
                </div>
            </div>
        </div>
    )
}

export default Hero