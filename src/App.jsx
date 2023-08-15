import profile  from './assets/profile-img.png'
import github  from './assets/github.svg'
import slack  from './assets/slack.svg'
import KodeCampLogo  from './assets/kodecamp-logo-left.png'
import kodeHauzLogo from './assets/kodeHauz-Logo-right.png'
import shareIconMobile from './assets/share-icon-arrow.svg'
import shareIconDesktop from './assets/share-icon-desktop.svg'
import './App.css'

const Header = () => {
  return (
    <header className="header">
      <figure>
        <picture>
          <source srcSet={shareIconMobile} media="(width>425px)" alt="" />
          <img src={shareIconDesktop} alt="" />
        </picture>
        <div className='profile-container'>
        <img src={profile} alt="User profile image" />
        </div>
        <figcaption className="username">John Doe</figcaption>
      </figure>
    </header>
  );
}

import PropTypes from "prop-types";

const Button = (props) => <button className="link-tree-btn">{props.name}</button>
Button.propTypes = {
  name: PropTypes.string.isRequired
}

const buttons = [
  {id: 1, text: "Twitter Links" },
  {id: 2, text: "KodeCamp Team" },
  {id: 3, text: "KodeCamp Books" },
  {id: 4, text: "Python Books" },
  {id: 5, text: "Background Check for Coders" },
  {id: 6, text: "Design Books"}
];

const Main = () => {

  return (
    
    <main className="main-section">
      {
         buttons.map((button) => (
          <Button name = {button.text} key={button.id}/>
       ))
      }
     
      <button className="link-tree-btn">
        <span className='dev-comm'>
          <img src={slack} alt="" />
        </span>
        <span className='dev-comm'>
          <img src={github} alt="" />
        </span>
      </button>
    </main>
  );
}

const Footer = () => {
  return (
    <footer className='footer'>
      <span>
        <img src={KodeCampLogo} alt="" />
        </span>
      <p>KodeCamp Internship Task</p>
      <span>
        <img src={kodeHauzLogo} alt="" />
        </span>
    </footer>
  );
}


function App() {

  return (
    <>
      <div className="wrapper">  
        < Header />
        < Main /> 
        < Footer />
      </div>
    </>
  )
}



export default App
