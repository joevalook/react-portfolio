import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'
import { faAngular, faCss3, faGitAlt, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    return (
        <div className="stage-cube-cont">
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
        </div>
    )
}

export default Portfolio;