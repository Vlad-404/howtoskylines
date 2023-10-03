import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import setMode from '../../util/darkMode'

setMode();

function Navbar({title}) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <Link to="/" className="text-lg font-bold align-middle">
            { title }
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/tips" className="btn btn-ghost btn-sm rounded-btn">
              Tips
            </Link>
            <input type="checkbox" role="switch" className=""/>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'How To Skylines'
}

Navbar.propTypes = {
  title: PropTypes.string
}

export default Navbar
