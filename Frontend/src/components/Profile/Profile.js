import React, { useState } from 'react';

const ProfilePopup = ({ ShowProfile, profilePicture, firstLetterFirstName, firstLetterLastName, Name, EmailId, PhoneNumber}) => {
    
    return (
        <div className={`popup-profile ${showProfile ? 'profile-show' : 'profile-hide'}`} style={{ display: showProfile ? 'block' : 'none' }}>
            <div className="container-fluid p-0">
                <div className="profile-heading">
                    <img id="profile-bg" src="assets/bg.png" alt="Profile Background" />
                    <img id="pic-bg" src="assets/bg image.png" alt="Background Image" />
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
                            <img src="assets/next1.svg" alt="Next" />
                        </div>
                    </div>
                </div>
                <div className="profile-footer d-flex p-3 justify-content-around align-items-center">
                    <div className="mx-n2 signout-btn">
                        <span><img src="./../assets/icon sign out.svg" alt="Sign Out Icon" /></span>
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
    );
}

export default ProfilePopup;
