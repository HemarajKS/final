import './topBar.css';
import { useState } from 'react';

const TopBar = () => {
  const [profileShow, setProfileShow] = useState(false);

  return (
    <div className="topBar">
      <div className="topBarContents">
        <div className="topBarLogo">
          <img
            src={require('../../assets/images/logo (2).png')}
            alt="homePage logo"
          />
        </div>
        <div className="topBarOptions">
          <div
            className="profile"
            onClick={() => {
              setProfileShow(!profileShow);
            }}
          >
            <img
              src={require('../../assets/icons/profile.png')}
              alt="Profile"
            />
            {profileShow ? (
              <div className="profileContents">
                <div className="changePassword changePasswordMarginBottom">
                  <div className="changePwText">Change Password</div>
                  <img
                    src={require('../../assets/icons/ic_pass.png')}
                    alt="change Password"
                  />
                </div>
                <div
                  className="changePassword"
                  onClick={() => {
                    localStorage.removeItem('auth');
                    localStorage.removeItem('currentUser');
                    window.location.reload();
                  }}
                >
                  <div className="changePwText">Sign Out</div>
                  <img
                    src={require('../../assets/icons/712391-200.png')}
                    alt="sign out"
                  />
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <div className="profileSync">
            <img src={require('../../assets/icons/sync.png')} alt="Sync" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
