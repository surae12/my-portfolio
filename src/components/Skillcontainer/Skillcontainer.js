import React from 'react'
import { Element } from 'react-scroll'
import { LinearProgress } from '@mui/material'
import "./Skillcontainer.css"
const Skillcontainer = () => {
    return (
        <Element className='skillcontainer' id='skills'>

            <div className='skillcontainer-full'>
                <div> <h1 className='skillcontainer-heading'>SKILLS & TOOLS</h1></div>

                {/* <div className='Skillcontainer-interior' >
                <img src='' alt='' />
                <p></p>
            </div> */}
                <div className='skillcontainer-list'>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' alt='' />
                        <p>ReactJs</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' alt='' />
                        <p>NodeJs</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' alt='' />
                        <p>MongoDb</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' alt='' />
                        <p>github</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg' alt='' />
                        <p>heroku</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' alt='' />
                        <p>VsCode</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt='' />
                        <p>HTML</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt='' />
                        <p>css</p>
                    </div>
                    <div className='skillcontainer-interior' >
                        <img className='skills-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='' />
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>


        </Element>
    )
}

export default Skillcontainer