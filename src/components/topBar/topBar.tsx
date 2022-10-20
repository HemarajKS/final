import './topBar.css'

const TopBar = () => {
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
          <div className="profile">
            <img
              src={require('../../assets/icons/profile.png')}
              alt="Profile"
            />
          </div>
          <div className="profileSync">
            <img src={require('../../assets/icons/sync.png')} alt="Sync" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
