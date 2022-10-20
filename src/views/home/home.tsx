import HomeBody from '../../components/homeBody/homeBody';
import SideBar from '../../components/sideBar/sideBar';
import TopBar from '../../components/topBar/topBar';
import './home.css';

const Home = () => {
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
                document.getElementById('searchIcon')?.classList.add('flex');
              }}
            />
            <img src={require('../../assets/icons/sync_icn.png')} alt="sync" />
            <img
              src={require('../../assets/icons/profile (2).png')}
              alt="profile"
            />
          </div>
        </div>
        <div className="homeBody">
          <HomeBody />
        </div>
      </div>
    </div>
  );
};

export default Home;
