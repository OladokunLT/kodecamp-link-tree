import profile  from './assets/profile-img.png'
import github  from './assets/github.svg'
import slack  from './assets/slack.svg'
import KodeCampLogo  from './assets/kodecamp-logo-left.png'
import kodeHauzLogo from './assets/kodeHauz-Logo-right.png'
import shareIconMobile from './assets/share-icon-arrow.svg'
import shareIconDesktop from './assets/share-icon-desktop.svg'
import camera from './assets/photo-camera.png'
import './App.css'
import PropTypes from "prop-types";

function App() {
  return (
    <div className="wrapper">  
      < Header />
      < Main /> 
      < Footer />
    </div>
  )
}

const buttons = [
  {id: 1, text: "Twitter Links" },
  {id: 2, text: "KodeCamp Team" },
  {id: 3, text: "KodeCamp Books" },
  {id: 4, text: "Python Books" },
  {id: 5, text: "Background Check for Coders" },
  {id: 6, text: "Design Books"}
];

const Button = (props) => <button className="link-tree-btn"> {props.name} </button>

const SpanIcons = (props) => <span> <img src={props.icon} alt="" /> </span>

const Header = () => {
  return (
    <header className="header">
      <figure>
        <picture>
          <source srcSet={shareIconMobile} media="(width>425px)" alt="" />
          <img src={shareIconDesktop} alt="" />
        </picture>
        <div className='profile-container'>
          <img src={profile} alt="User profile image" className='profile-image'/>
          <label htmlFor="input-file" className='load-image'> <img src={camera} alt="Update profile photo" className='camera' /> </label>
          <input type="file" name="input-file" id="input-file" className='input-file' />
        </div>
        <figcaption className="username"> John Doe </figcaption>
      </figure>
    </header>
  );
}

const Main = () => {
  return (
    <main className="main-section">
      {
        buttons.map((button) => (
          <Button name = {button.text} key={button.id}/>
       ))
      }     
      <button className="link-tree-btn">
        <SpanIcons icon = {slack} />
        <SpanIcons icon = {github} />
      </button>
    </main>
  );
}

const Footer = () => {
  return (
    <footer className = 'footer'>
      <SpanIcons icon = {KodeCampLogo} />
      <p>KodeCamp Internship Task</p>
      <SpanIcons icon = {kodeHauzLogo} />
    </footer>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}
SpanIcons.propTypes = {
  icon: PropTypes.string.isRequired
}

/******** Code below: Upload Profile picture Refused to work properly  **********
let inputFile = document.querySelector(".input-file")
let profileImage = document.querySelector(".profile-image")

function handleProfileImage(){
  console.log(inputFile);
  profileImage.src = URL.createObjectURL(inputFile.files[0])
}
*/

export default App
