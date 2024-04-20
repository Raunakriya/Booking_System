import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileBg from '../../assets/bg.png';
import profileBgImage from '../../assets/bg image.png';
import nextIcon from '../../assets/next1.svg';
import signOutIcon from '../../assets/icon sign out.svg';
import profileIcon from '../../assets/myprofile.png';

const Header = ({ setSearchTerm, ShowProfile, profilePicture, firstLetterFirstName, firstLetterLastName, Name, EmailId, PhoneNumber }) => {
  const [searchInput, setSearchInput] = useState('');
  const [showProfile, setShowProfile] = useState(true);

  const toggleProfileIcon = () => {
    setShowProfile(!showProfile);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value)
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setSearchInput('');
  };

  return (
    <header className="bg-slate-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Get Your Guide</h1>
        <div className="flex items-center">
          {showProfile ? (
            <div className="pick" onClick={toggleProfileIcon}>
              <img
                src={profileIcon}
                alt="Profile"
                title="Profile"
              />
            </div>
          ) : (
            <img
              src={profilePicture ? profilePicture : profileBg}
              alt="Profile"
              className="profilepic"
              title="Profile"
              onClick={toggleProfileIcon}
            />
          )}
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleInputChange}
            className="px-2 py-1 rounded border-none focus:outline-none focus:ring-2 focus:ring-yellow-500 mr-2" style={{ color: 'black' }}
          />
          <button onClick={handleSearch} className="px-4 py-1 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 mr-2" >Search</button>

          {/* Navigation Menu */}
          <nav className="flex space-x-6 font-bold">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/features" className="hover:text-gray-300">
              Features
            </Link>
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link to="/admin" className="hover:text-gray-300">
              Admin Panel
            </Link>
          </nav>
        </div>
      </div>

      {/* Popup Profile */}
      <div className={`popup-profile ${showProfile ? 'profile-show' : 'profile-hide'}`} style={{ display: showProfile ? 'block' : 'none' }}>
        <div className="container-fluid p-0">
          <div className="profile-heading">
            <img id="profile-bg" src={profileBg} alt="Profile Background" />
            <img id="pic-bg" src={profileBgImage} alt="Background Image" />
            {profilePicture ? (
              <img id="profile-pic" src={profilePicture} alt="Profile Picture" />
            ) : (
              <div className="image-container">
                <span className="initials">{firstLetterFirstName}{firstLetterLastName}</span>
              </div>
            )}
          </div>
          <div className="d-block mb-5 mt-0 text-center profile-content1">
            <h5 className="text-capitalize">{Name}</h5>
            <p>{EmailId}</p>
            <p>+{PhoneNumber}</p>
          </div>
          <div className="row ml-0 mr-0 mb-3 profile-content2">
            <div className="d-flex justify-content-around align-items-center profile-p">
              <div className="col-sm-8 ml-2 profile-c">
                <h3>Manage your profile</h3>
                <p className="m-0">Manage & view wallet, plans & subscription</p>
              </div>
              <div className="col-sm-2 p-0 mx-2 text-center next-btn">
                <img src={nextIcon} alt="Next" />
              </div>
            </div>
          </div>
          <div className="profile-footer d-flex p-3 justify-content-around align-items-center">
            <div className="mx-n2 signout-btn">
              <span><img src={signOutIcon} alt="Sign Out Icon" /></span>
              <button id="logout-btn" >Sign Out</button>
            </div>
            <div className="col-sm-5 d-flex justify-content-center align-items-center active-toggle">
              <div className="px-2 switch-text">
                <p className="m-0">Active</p>
              </div>
              <div className="px-2 switch-toggle">
                <label className="m-0 switch">
                  <input type="checkbox" className="m-0 form-control-checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
