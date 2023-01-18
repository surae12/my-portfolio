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
                                <Card.Title>Country Guide</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title
                                </Card.Text>
                                <a href='https://stupendous-jalebi-cc60c1.netlify.app/' target="_blank"><Button variant="primary" className='buttons'>Wanna chech</Button></a>
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
                                <Button variant="primary" className='buttons'>Wanna chech</Button>
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
                                <Button variant="primary" className='buttons'>Wanna chech</Button>
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
                                <Button variant="primary" className='buttons'>Wanna chech</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Projectcontainer