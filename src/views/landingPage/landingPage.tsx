import Login from '../../components/Login/login'
import SignUp from '../../components/signUp/signUp'
import './landingPage.css'
import { Routes, Route, Link } from 'react-router-dom'
import SnackBar from '../../components/snackBar/snackBar'
import { useEffect, useState } from 'react'

const LandingPage = (child: any) => {
  const [displaySnackBar, setDisplaySnackBar] = useState(false)
  const [path, setPath] = useState('')

  useEffect(() => {
    setDisplaySnackBar(Boolean(sessionStorage.getItem('signUpSuccess')))
    sessionStorage.removeItem('signUpSuccess')
  }, [])

  setInterval(() => {
    setDisplaySnackBar(false)
  }, 2000)

  console.log('current', path)

  useEffect(() => {
    setPath(window.location.pathname)
  })

  return (
    <div className="login">
      {displaySnackBar ? (
        <SnackBar message="Congrats!!! Success, Signin to access the vault" />
      ) : (
        ''
      )}

      <div className="loginContainer">
        <div className="loginLogoContainer">
          <div className="loginLogo">
            <img
              src={require('../../assets/images/logo.png')}
              alt="Login Logo"
              className="imgOne"
            />
            <img
              src={require('../../assets/images/logo (3).png')}
              alt="Login Logo"
              className="imgTwo"
            />
          </div>
          <div className="loginLogoBody">
            Protect & Manage every password in your business
          </div>
          <div className="signInsignUpTab">
            <Link
              className={
                path === '/landing/login' ? 'signInsignUpTabunderline' : ''
              }
              to="/landing/login"
            >
              SIGN IN
            </Link>
            <Link
              className={
                path === '/landing/signUp' ? 'signInsignUpTabunderline' : ''
              }
              to="/landing/signUp"
            >
              SIGN UP
            </Link>
          </div>
        </div>
        <div className="loginForm">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
          {child !== '{}' ? child.props : ''}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
