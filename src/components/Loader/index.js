import './index.scss'

const Loader = () => {
  return (
    <div class="loader">
      <div class="circles">
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
        <span class="four"></span>
      </div>
      <div class="pacman">
        <span class="top"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </div>
    </div>
  )
}

export default Loader