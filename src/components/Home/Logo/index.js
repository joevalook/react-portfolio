import './index.scss'
import JoeLogoLight from '../../../assets/images/JoeLogoDark.svg'
import { useRef } from 'react';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    return (
        <div className="logo-container">
            <img src={JoeLogoLight} alt="" className="solid-logo" />
        </div>
    )
}

export default Logo