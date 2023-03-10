import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import JoeJ2 from '../../assets/images/JoeJ2.png'
import AnimatedLetters from '../AnimatedLetters'
import Loader from '../Loader'
import './index.scss'
import Logo from './Logo'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "oe Valookaran,".split("")
    const jobArray = "A Full Stack Web Developer".split("")

    useEffect(() => {
         setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5400)
    }, [])
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <span className={`${letterClass} _15`}>&nbsp;</span>
                <span className={`${letterClass} _16`}>J</span>
                {/* <img src={JoeJ2} alt="developer" /> */}
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                index={17}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={32}
                />
                </h1>
                <h2> Frontend / Backend / React / Angular / NodeJS / SQL</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
            </div>
            <Logo />
        </div>

        <Loader />
        </>
    )
    }

export default Home