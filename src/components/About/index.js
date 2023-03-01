import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { faAngular, faCss3, faGitAlt, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 2000)
    }, [])
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={'About me'.split("")}
                        index={15}
                    />
                </h1>
                <span className='tag-section' > &lt;section&gt;</span>
                <p align= "justify">Hello, first and foremost, thanks for visiting my website! My name is Joe Valookaran and I am a Full Stack Web Developer transitioning from the Education Field as a Calculus and Physics Teacher.  I am a graduate of the Full Stack Web Development Bootcamp at Lighthouse Labs, and obtained a degree in theoretical and astrophysics from the University of Toronto. </p>
                <p align= "justify">I am a very ambitious developer, and I believe now is the time to spread my wings and gather as much as knowledge as I can in order to build and design beautiful web-apps from the ground up. I am looking for a company where personal growth is deeply rooted in the culture, and where challenging and diverse projects will help build strong problem solving skills.</p>
                <p align= "justify"> Fueled by my boundless energy and high levels of enthusiasm, I enjoy following my imagination in order to create unique designs and build intuitive solutions. I am passionate, diligent and hardworking and will never be content with just ideas; I need to be able to create them! </p>
                <span className='tag-section' > &lt;/section&gt;</span>
            </div>


        </div>
    )
}

export default About;