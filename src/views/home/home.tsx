import HomeBody from '../../components/homeBody/homeBody';
import SideBar from '../../components/sideBar/sideBar';
import TopBar from '../../components/topBar/topBar';
import './home.css';
import { useState } from 'react';

const Home = () => {
  const [profileShow, setProfileShow] = useState(false);
  const [clickSearch, setClickSearch] = useState(false);
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="homeSideBar">
          <SideBar />
        </div>
        <div className="homeTopBar">
          <TopBar />
        </div>
        <div className="mobileTopBar">
          <div className="mobileTopBarFirst">
            <img
              src={require('../../assets/icons/burger_menu (2).png')}
              alt="burger"
            />
            <img
              src={require('../../assets/icons/PASS MANAGER.png')}
              alt="pass manager"
            />
          </div>
          <div className="mobileTopBarLast">
            <img
              src={require('../../assets/icons/search (2).png')}
              alt="search"
              id="searchIcon"
              onClick={() => {
                setClickSearch(!clickSearch);
              }}
            />
            <img src={require('../../assets/icons/sync_icn.png')} alt="sync" />
            <img
              src={require('../../assets/icons/profile (2).png')}
              alt="profile"
              onClick={() => {
                setProfileShow(!profileShow);
              }}
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
        </div>
        <div className="homeBody">
          <div className="homeBodyTop"></div>
          <HomeBody clickSearch={clickSearch} />
        </div>
      </div>
    </div>
  );
};

export default Home;
