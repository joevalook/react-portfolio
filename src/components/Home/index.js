import { Link } from 'react-router-dom'
import JoeJ2 from '../../assets/images/JoeJ2.png'
import './index.scss'


const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hi, <br /> I'm&nbsp; 
                <img src={JoeJ2} alt="developer" />
                oe Valookaran
                <br />
                Full Stack Web Developer
                </h1>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>

            </div>
        </div>
    )
    }

export default Home