import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import Jayvee_Gold from '../../assets/images/Jayvee_Gold.svg'
import Joevalookaran from '../../assets/images/Joevalookaran.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileText, faFolder, faHome, faSuitcase, faSuitcaseMedical, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={Jayvee_Gold} alt="logo" />
      <img className="sub-logo" src={Joevalookaran} alt="slobodan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
      </NavLink>
      <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
        <FontAwesomeIcon icon={faSuitcase} color='#4d4d4e' />
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