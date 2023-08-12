// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import profile  from './assets/profile-img.png'
import smShare  from './assets/share-icon-arrow.svg'
import mdShare  from './assets/share-icon-desktop.svg'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

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
          
        </main>

      </div>
    </>
  )
}

export default App
