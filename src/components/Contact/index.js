import AnimatedLetters from '../AnimatedLetters';
import Loader from '../Loader';
import './index.scss'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_lbsjphn',
      'template_0pig7o8',
      refForm.current,
      'eLKKgFKvBAP9ZkUNv'
    )
      .then(function () {
        alert('Message Successfully Sent');
        window.location.reload(false)
      }, function (error) {
        alert('Failed to sent message, please try again');
      });


  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact me'.split('')}
              index={15} />
          </h1>
          <span className='tag-section' > &lt;article&gt;</span>
          <p align="justify" className='contact-para'>
            I am interested in a junior developement position at a company that provides a great learning culture. If you have any other questions, concerns or would like to get to know me better, please feel free to use the contact form below to send me an email. Thanks!
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required></textarea>
                </li>
                <li>
                  <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
          <span className='tag-section' > &lt;/article&gt;</span>
        </div>
        <div className="info-map">
          Joe Valookaran,
          <br />
          Markham, Ontario
          <br />
          Canada
           <br />
          <span>joevalookaran@hotmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[43.89753182496072, -79.23972000636782]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.89753182496072, -79.23972000636782]}>
              <Popup>I live within a 1 kilometer radius from here, but if you live on the other side of the world I'd still love to chat! :)</Popup>
            </Marker>
          </MapContainer>
        </div>

      </div>
      <Loader />
    </>
  )
}

export default Contact;