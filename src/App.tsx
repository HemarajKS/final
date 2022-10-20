import './style.css';
import LandingPage from './views/landingPage/landingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import SignUp from './components/signUp/signUp';
import Router from './components/routes/router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
