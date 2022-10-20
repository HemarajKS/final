import './sideBar.css'

const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContents">
        <div className="burgerMenu">
          <img
            src={require('../../assets/icons/burger_Menu.png')}
            alt="burger menu"
          />
        </div>
        <div className="homeIcon">
          <img
            src={require('../../assets/icons/home_icn.png')}
            alt="home icon"
          />
          <div className="homeSelected"></div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
