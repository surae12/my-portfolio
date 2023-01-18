import React from 'react'
import { Element } from 'react-scroll'
import "./Topcontent.css"
import Resume from "./resume.pdf"


const Topcontent = () => {
    return (
        <Element className='topcontent'>
            <div className='topcontent_container'>
                <p className='first-p'>Hi, I'm</p>
                <h1 className='first-h'>Suresh...! </h1>
                <h1 className='last-h'>Full Stack Developer [MERN]</h1>
                <p className='last-p'>Passionate about web development and seeking an opportunity to grow in the software industry. My goal is to achieve a high position by providing satisfactory service to the company.</p>
                <a href={Resume} download>
                    <button className='topcontent-downloadbutton'> my CV <span className='download-arrow'>📁</span></button>
                </a>


            </div>
            <div className='profile-pic'></div>
        </Element>
    )
}

export default Topcontent