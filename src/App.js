import React, { useState } from "react";
import "./index.css";

function App() {
  const [profile, setProfile] = useState({
    name: "Brooklyn Simmons",
  });

  const [personalInfo, setPersonalInfo] = useState({
    username: "brooklynnn",
    email: "brooklyn@gmail.com",
    telephone: "081559938908",
    address: "Jl. Mawar, No. 18 Blok B3 GPG",
    dob: "10/10/2010",
    password: "********",
  });

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingPersonal, setIsEditingPersonal] = useState(false);

  const handleEditProfile = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleEditPersonalInfo = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {/* Back Button */}
      <button className="back-button">Back</button>

      {/* Title */}
      <h1 className="title">Account Settings</h1>

      {/* Big Box */}
      <div className="big-box">
        {/* My Profile Section */}
        <h2 className="section-title">My Profile</h2>
        <div className="profile-card">
          <div className="profile-content">
            {/* Profile Picture */}
            <img
              src={`${process.env.PUBLIC_URL}/profile.png`}
              alt="Profile"
              className="profile-image"
            />

            {/* Profile Details */}
            <div className="profile-text">
              {isEditingProfile ? (
                <div className="profile-edit">
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleEditProfile}
                    className="input-field"
                  />
                  <button
                    className="save-button"
                    onClick={() => setIsEditingProfile(false)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <h3>{profile.name}</h3>
              )}
            </div>
          </div>

          {/* Edit Button */}
          <button
            className="edit-button"
            onClick={() => setIsEditingProfile(!isEditingProfile)}
          >
            Edit
          </button>
        </div>

        {/* Personal Information Section */}
        <div className="profile-cardd">
          <h2 className="section-title">Personal Information</h2>

          {isEditingPersonal ? (
            <div className="personal-edit">
              <input
                type="text"
                name="username"
                value={personalInfo.username}
                onChange={handleEditPersonalInfo}
                className="input-field"
                placeholder="Username"
              />
              <input
                type="email"
                name="email"
                value={personalInfo.email}
                onChange={handleEditPersonalInfo}
                className="input-field"
                placeholder="Email"
              />
              <input
                type="text"
                name="telephone"
                value={personalInfo.telephone}
                onChange={handleEditPersonalInfo}
                className="input-field"
                placeholder="Telephone"
              />
              <input
                type="text"
                name="address"
                value={personalInfo.address}
                onChange={handleEditPersonalInfo}
                className="input-field"
                placeholder="Full Address"
              />
              <input
                type="text"
                name="dob"
                value={personalInfo.dob}
                onChange={handleEditPersonalInfo}
                className="input-field"
                placeholder="Date of Birth"
              />
              <input
                type="text"
                name="password"
                value={personalInfo.password}
                onChange={handleEditPersonalInfo}
                className="input-field"
                placeholder="Password"
              />
              <button
                className="save-button"
                onClick={() => setIsEditingPersonal(false)}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="personal-content">
              <div>
                <b>Username:</b>
                <span>{personalInfo.username}</span>
              </div>
              <div>
                <b>Telephone:</b>
                <span>{personalInfo.telephone}</span>
              </div>
              <div>
                <b>Email:</b>
                <span>{personalInfo.email}</span>
              </div>
              <div>
                <b>Full Address:</b>
                <span>{personalInfo.address}</span>
              </div>
              <div>
                <b>Date of Birth:</b>
                <span>{personalInfo.dob}</span>
              </div>
              <div>
                <b>Password:</b>
                <span>{personalInfo.password}</span>
              </div>
            </div>
          )}
          <button
            className="edit-buttonn"
            onClick={() => setIsEditingPersonal(!isEditingPersonal)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
