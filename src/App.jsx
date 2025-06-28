import React from 'react';
import Navbar1 from './components/navbar 1/navbar1';
import Academics_cards from './components/Academics_cards/Academics_cards';
import Button_1 from './components/Button_1/Button_1';
import logo from './assets/logo.png';
import search from './assets/vector5.svg';
import Slider_image from './assets/1.jpg';
import Design from './assets/design.png';
import card_image_1 from './assets/card_image_1.png';
import card_image_2 from './assets/card_image_2.png';
import card_image_3 from './assets/card_image_3.png';
import card_image_4 from './assets/card_image_4.png';
import lms_image from './assets/lms-image.png';
import arrow from './assets/vector.svg';
import chat_image from './assets/chat_image.png';
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

      <div width="80%" className='academics-section'>
        <div className='academics-header'>
          <h1 className='academics-heading'>Academics</h1>
          <img src={Design} alt="" />
        </div>
        <div>
          <div className='academics_cards'>
            <Academics_cards image={card_image_1} text="Let's Talk Science" />
            <Academics_cards image={card_image_2} text="Innovative Courses" />
            <Academics_cards image={card_image_3} text="Cloud Storage" />
            <Academics_cards image={card_image_4} text="Online Education" />
          </div>
        </div>
      </div>

      {/* Academics Card Section End */}

      {/* LMS Section */}
      <div width="100%" className='lms-section-container'>
        <div className='lms-section'>
          <div className='lms-image'>
            <img width='80%' src={lms_image} alt="" />
          </div>
          <div className='lms-content'>
            <div>
              <h1 className='lms-heading-design blue-text' >Welcome to</h1>
              <h1 className='lms-heading-design red-text'>Echooling LMS Platform</h1>
            </div>
            <div>
              <p className='grey-text f-2'>Education is both the act of teaching knowledge to others and
                the act of receiving knowledge from someone else.</p>
              <p className='grey-text'>Have questions?<a className='free-guide' href="#">Get Free Guide</a></p>
            </div>
            <div className='divider'></div>
            <div>
              <p className='grey-text'>Education also refers to the knowledge received through schooling instruction
                and to the institution of teaching as a whole. The main purpose of education
                is the integral development of a person.</p>
            </div>
            <div className='lms-button'>
              <Button_1 text="Read More" />
              <div className='lms-chat'>
                <div >
                  <img src={chat_image} alt="" />
                </div>
                <div className='lms-support'>
                  <p className='grey-text m-0 f-0'>Get Support</p>
                  <a className='support' href="#">support@react.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LMS Section End */}

      {/* Campus Life Section Start */}

      <div className='campus-life-container'>
        <div width="80%" className='campus-life-section extra-padding'>
          <div className='academics-header'>
            <h1 className='academics-heading'>Campus Life</h1>
            <img src={Design} alt="" />
          </div>
          <div className='campus-life-main-section'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
