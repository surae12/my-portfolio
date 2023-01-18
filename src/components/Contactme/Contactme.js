import React from 'react'
import "./Contactme.css"
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
const Contactme = () => {
    return (
        <Element className='contact'>
            <h1 className='contact-heading'>CONTACT ME</h1>
            <div className='contact-container'>
                <p>Email: <span>suricekmar12@gmail.com</span></p>
                <p>
                    Github Username : <span>https://github.com/surae12</span>
                </p>

                <div className='contact-icons' >
                    <a href='https://www.facebook.com/profile.php?id=100002897153886' target="_blank">
                        <IconButton>
                            <Facebook />

                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/_s_u_r_a_e_/' target="_blank">
                        <IconButton>
                            <Instagram />

                        </IconButton>
                    </a>
                    <a href='http://www.linkedin.com/in/sureshkumar1220' target="_blank">
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contactme