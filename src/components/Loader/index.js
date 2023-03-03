import './index.scss'

const Loader = () => {
  return (
    <div className="loader">
      <div className="circles">
        <span className="one"></span>
        <span className="two"></span>
        <span className="three"></span>
        <span className="four"></span>
      </div>
      <div className="pacman">
        <span className="top"></span>
        <span className="bottom"></span>
        <span className="left"></span>
      </div>
    </div>
  )
}

export default Loader