import { Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase  } from '@fortawesome/free-solid-svg-icons'
import { faAngular, faCss3, faGitAlt, faNodeJs, faReact  } from '@fortawesome/free-brands-svg-icons'
import SideBar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return <>
    <div className='App'>
      <SideBar />
      <div className='page'>
        <span className="tags top-tags tag-html">
          &lt;html&gt;
          <br />
          <span className='tag-body-top' > &lt;body&gt;</span>
        </span>

        <Outlet />

        <span className='tags bottom-tags'>
          &lt;/body&gt;
          <br />
          <span className="tag-html"> &lt;/html&gt;</span>
        </span>
      </div>


    </div>
  </>
}

export default Layout