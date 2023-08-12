import profile  from './assets/profile-img.png'
import github  from './assets/github.svg'
import slack  from './assets/slack.svg'
import KodeCampLogo  from './assets/kodecamp-logo-left.png'
import kodeHauzLogo from './assets/kodeHauz-Logo-right.png'
import './App.css'

function App() {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <figure>
            <div className='profile-container'>
             <img src={profile} alt="User profile image" />
            </div>
            <figcaption className="username">John Doe</figcaption>
          </figure>
        </header>
        <main className="main-section">
          <button className="link-tree-btn">Twitter Links</button>
          <button className="link-tree-btn">KodeCamp Team</button>
          <button className="link-tree-btn">KodeCamp Books</button>
          <button className="link-tree-btn">Python Books</button>
          <button className="link-tree-btn">Background Check for Coders</button>
          <button className="link-tree-btn">Design Books</button>
          <button className="link-tree-btn">
            <span className='dev-comm'>
              <img src={slack} alt="" />
            </span>
            <span className='dev-comm'>
              <img src={github} alt="" />
            </span>
          </button>
        </main>
        <footer className='footer'>
          <span>
            <img src={KodeCampLogo} alt="" />
            </span>
          <p>KodeCamp Internship Task</p>
          <span>
            <img src={kodeHauzLogo} alt="" />
            </span>
        </footer>

      </div>
    </>
  )
}

export default App
