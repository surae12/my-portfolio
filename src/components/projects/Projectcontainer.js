import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Element } from 'react-scroll'
import "./Projectcontainer.css"

const Projectcontainer = () => {

    return (
        <Element className='projectcontainer' id='projects'>
            <div className='project-full'>
                <h1 className='project-heading'>PROJECTS</h1>
                <div className='project-list'>
                    <div className='project-1'>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://codingartistweb.com/wp-content/uploads/2022/03/countries-01.png" className='project-img' />
                            <Card.Body>
                                <Card.Title>COUNTRY-GUIDE</Card.Title>
                                <Card.Text>

                                    By entering country name you can get the  country details
                                </Card.Text>
                                <a href='https://stupendous-jalebi-cc60c1.netlify.app/' target="_blank"><Button variant="primary" className='buttons'>check</Button></a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='project-1'>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://s38924.pcdn.co/wp-content/uploads/2021/09/User-Registration-1-scaled-1-1360x692.jpg" className='project-img' />
                            <Card.Body>
                                <Card.Title>USER-REGISTRATION</Card.Title>
                                <Card.Text>
                                    By using react router and firebase we can generate every user token id
                                </Card.Text>
                                <a href='https://main--wondrous-melba-5df993.netlify.app/' target="_blank"> <Button variant="primary" className='buttons'>check</Button></a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='project-1'>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3GNM6G1mWljToHNa8Mt4s42vxx0_VLEEVcg&usqp=CAU" className='project-img' />
                            <Card.Body>
                                <Card.Title>WEATHER-FINDING</Card.Title>
                                <Card.Text>
                                    By entering the city and country name we can get weather details
                                </Card.Text>
                                <a href='https://stunning-pegasus-ece9e8.netlify.app/' target="_blank"><Button variant="primary" className='buttons'>check</Button></a>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='project-1'>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src="https://codingartistweb.com/wp-content/uploads/2022/03/countries-01.png" className='project-img' />
                            <Card.Body>
                                <Card.Title>Country Guide</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <Button variant="primary" className='buttons'>check</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Projectcontainer