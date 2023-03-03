import AnimatedLetters from '../AnimatedLetters';
import Loader from '../Loader';
import './index.scss'
import { useEffect, useState } from 'react';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
      setTimeout(() => {
          return setLetterClass('text-animate-hover')
      }, 2000)
  }, [])

  return (
    <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
          letterClass={letterClass}
            strArray={'Contact me'.split('')}
            index={15}/>
        </h1>
      </div>

    </div>
    <Loader />
    </>
  )
}

export default Contact;