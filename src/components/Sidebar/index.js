import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Jayvee_Gold from '../../assets/images/Jayvee_Gold.svg'
import Joevalookaran from '../../assets/images/Joevalookaran.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileText, faHome, faSuitcase, faUser, faDatabase  } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faAngular, faCss3, faGitAlt, faNodeJs, faReact  } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Jayvee_Gold} alt="logo" />
      <img className="sub-logo" src={Joevalookaran} alt="slobodan" />
    </Link>
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
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
      </NavLink>

    </nav>
    <ul>
      <li>
        <a 
          target="_blank"
          rel='noreferrer' 
          href="https://www.linkedin.com/in/joe-valookaran-355569155/"
          className="linkedin">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel='noreferrer' 
          href="https://github.com/joevalook"
          className="github">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a 
          target="_blank"
          rel='noreferrer' 
          href="https://resume.creddle.io/resume/buzwk2qtx8e"
          className="resume">
          <FontAwesomeIcon icon={faFileText} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>

)

export default SideBar