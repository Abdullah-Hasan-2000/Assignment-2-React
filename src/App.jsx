import React from 'react';
import Navbar1 from './components/navbar 1/navbar1';
import Academics_cards from './components/Academics_cards/Academics_cards';
import logo from './assets/logo.png';
import search from './assets/vector5.svg';
import Slider_image from './assets/1.jpg';
import Design from './assets/design.png';
import card_image_1 from './assets/card_image_1.png';
import card_image_2 from './assets/card_image_2.png';
import card_image_3 from './assets/card_image_3.png';
import card_image_4 from './assets/card_image_4.png';
import './App.css'

const App = () => {

  return (
    <>
      <Navbar1 />

      {/* Main Navbar */}

      <div>
        <div className='navbar-width'>
          <div>
            <img src={logo} alt="Echooling" />
          </div>
          <div>
            <ul className='navbar-list'>
              <li className='extra-padding' >
                <select className='dropdown-design' name="" id="">
                  <option value="">Home</option>
                  <option value="">Home One</option>
                  <option value="">Home Two</option>
                  <option value="">Home Three</option>
                </select>
              </li>
              <li className='extra-padding'>
                <select className='dropdown-design' name="" id="">
                  <option value="">Pages</option>
                  <option value="">About</option>
                  <option value="">Instructor</option>
                  <option value="">Profile</option>
                  <option value="">Login</option>
                  <option value="">Signup</option>
                  <option value="">Events</option>
                </select>
              </li>
              <li className='extra-padding'>
                <select className='dropdown-design' name="" id="">
                  <option value="">Courses</option>
                  <option value="">Home One</option>
                  <option value="">Home Two</option>
                  <option value="">Home Three</option>
                </select>
              </li>
              <li className='extra-padding'>
                <select className='dropdown-design' name="" id="">
                  <option value="">Blog</option>
                  <option value="">Home One</option>
                  <option value="">Home Two</option>
                  <option value="">Home Three</option>
                </select>
              </li>
              <li className='extra-padding'>
                <select className='dropdown-design' name="" id="">
                  <option value="">Contact</option>
                  <option value="">Home One</option>
                  <option value="">Home Two</option>
                  <option value="">Home Three</option>
                </select>
              </li>
              <li className='search-bar'>
                <input className='search-input' placeholder='Search Course' type="text" />
                <img src={search} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main Navbar End */}

      {/* Slider Start  */}

      <div className='slider'>
        <div width="100%">
          <img width="100%" src={Slider_image} alt="" />
        </div>
      </div>

      {/* Slider End */}

      {/* Academics Card Section */}

      <div width="100%" className='academics-section'>
        <div className='academics-header'>
          <h1 className='academics-heading'>Academics</h1>
          <img src={Design} alt="" />
        </div>
        <div>
          <div className='academics_cards'>
            <Academics_cards image={card_image_1} text="Let's Talk Science"/>
            <Academics_cards image={card_image_2} text="Innovative Courses" />
            <Academics_cards image={card_image_3} text="Cloud Storage" />
            <Academics_cards image={card_image_4} text="Online Education" />
          </div>
        </div>
      </div>

      {/* Academics Card Section End */}

      {/* LMS Section */}
      <div>
        
      </div>
    </>
  )
}

export default App
