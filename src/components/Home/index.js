import { useState } from 'react'
import { Link } from 'react-router-dom'
import JoeJ2 from '../../assets/images/JoeJ2.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'e', ' ', 'V','a','l','o','o','k','a','r','a','n']
    const jobArray = ['F','u','l','l', ' ','S','t','a','c','k', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v','e','l', 'o', 'p', 'e', 'r']
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i,</span> 
                <br />
                <span className={`${letterClass} _13`}>I</span> 
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={JoeJ2} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                index={15}
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                index={29}
                />
                </h1>
                <h2> Frontend / Backend / React / Angular / NodeJS </h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>

            </div>
        </div>
    )
    }

export default Home