import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { faAngular, faCss3, faGitAlt, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
    console.log(portfolioData)
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2000)
    }, [])

    const renderPortfolio = (portfolioArray) => {
        return (
            <div className='portfolio-container'>
                {
                    portfolioArray.map((port, index) => {
                        return (
                            <div className={`flip-card _${index}`} key={index}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={port.cover} alt="project" className='portfolio-image' />
                                        <h4>{port.title}</h4>
                                    </div>
                                    <div className="flip-card-back">
                                        <h3>{port.title}</h3>
                                        <p>{port.description}</p>
                                        <p>Stack: {port.stack}</p>
                                        <div className='portfolio-buttons'>
                                            <a href={port.url} className='flat-button' target='_blank'> URL</a>
                                            <a href={port.github} className='flat-button' target='_blank'> Github</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            /* <article className='portfolio_item'>
                                <div className="portfolio_item-image" key={index}>
                                    <img src={port.cover} alt="project" className='portfolio-image' />
                                </div>
                                <h3> {port.title}</h3>
                                <div className='portfolio-buttons'>
                                    <a href={port.url} className='flat-button' target='_blank'> URL</a>
                                    <a href={port.github} className='flat-button' target='_blank'> Github</a>
                                </div>

                            </article> */
                        )
                })
                }
            </div>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone-portfolio">
                    <h1 className='portfolio-heading'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Portfolio".split("")}
                            index={15}
                        />
                    </h1>
                </div>
                <div >
                    {renderPortfolio(portfolioData.portfolio)}
                </div>

                {/* <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faNodeJs} color="#6CC24A" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faDatabase} color="#FC8EAC" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div> */}
            </div>

            <Loader />
        </>
    )
}

export default Portfolio;