import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar({title}) {
  // Toggles dark mode on or off
  function handleDarkToggle(e) {
    if (e.target.checked) {
      localStorage.setItem('theme', 'dark')
      setTheme()
    } else {
      localStorage.setItem('theme', 'light')
      setTheme()
    }
  }

  function handleSwitch() {
    let theme = localStorage.getItem('theme')

    if (theme == 'dark') {
      return 'checked'
    }
  }

  // Sets the light or dark mode by reading from browser settings or local storage
  function setTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  setTheme();

  return (
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
            <Link to="/" className="text-lg font-bold align-middle">
              { title }
            </Link>
          </div>
          <div className="flex-1 px-2 mx-2">
            <div className="flex justify-end items-center">
              <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
                Home
              </Link>
              <Link to="/tips" className="btn btn-ghost btn-sm rounded-btn">
                Tips
              </Link>

              {/* Sun icon for dark mode toggle - source Heroicons: https://heroicons.com/ */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-5 w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              
              {/* Dark mode toggle switch */}
              <input type="checkbox" id="toggle-dark" role="switch" className="toggle ml-2" onClick={handleDarkToggle} {handleSwitch}/>
              
              {/* Moon icon for dark mode toggle - source Heroicons: https://heroicons.com/ */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-2 w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>

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


