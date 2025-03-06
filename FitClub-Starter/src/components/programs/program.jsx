import React from "react"
import './program.css'
import {programsData} from '../../data/programsData'
import rightarrow from '../../assets/rightArrow.png'

const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/*header*/}
            <div className="program-header">
                <span className="strock-text">Exploare our</span>
                <span >Programs</span>
                <span className="strock-text">to shape you</span>
            </div>
            <div className="program-calories">
                {programsData.map((program)=>(
                    <div className="catagory">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>

                        <div className="join-now"><span>join now</span><img src={rightarrow} alt="" /></div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs