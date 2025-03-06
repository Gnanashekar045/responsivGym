import React, { useRef } from "react";
import "./join.css"
const Join = () => {
    const form = useRef()
    return (
        <div className="Join" id="join">
            <div className="left-j">
                <hr />
                <div>
                    <span className="strock-text">READY TO</span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY</span>
                    <span className="strock-text">WITH US?</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} className="email-container">
                    <input type="email" name="user_email" placeholder="Enter you email address" />
                    <button className="btn btn-j">join now</button>
                </form>
            </div>
        </div>
    )
} 

export default Join