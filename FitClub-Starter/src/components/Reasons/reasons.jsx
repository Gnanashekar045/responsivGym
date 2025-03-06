import React from "react";
import './reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nick from "../../assets/nike.png"
import tick from "../../assets/tick.png"
const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>some reasons</span>

                <div>
                    <span className="stroke-text">why</span>
                    <span> Choose us?</span>
                </div>
                <div className="details-r">
                    <div>
                        <img src={tick} alt=""></img>
                        <spam>OVER 140 EXPERT COACHES</spam>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <spam>TRAIN SMARTER AND FASTER THER OTHERS</spam>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <spam>1 FREE PROGRAM FOR NEW MENBER</spam>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <spam>RELIABLE PARTNERS</spam>
                    </div>
                </div>
                <span style={{ color: "var(--gray)", fontWeight: "normal", }}>
                    OUR PARTNERS
                </span>
                <div className="partners">
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nick} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons