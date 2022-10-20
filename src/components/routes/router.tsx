import { Routes, Route } from 'react-router-dom';
import Home from '../../views/home/home';
import LandingPage from '../../views/landingPage/landingPage';
import Login from '../Login/login';
import SignUp from '../signUp/signUp';
import { useState, useEffect } from 'react';

const Router = () => {
  const [authValue, setAuthValue] = useState<string | null>('');

  // if (localStorage.getItem('auth') === 'authenticated') {
  //   setAuth(true);
  // }

  useEffect(() => {
    setAuthValue(localStorage.getItem('auth'));
  }, []);

  console.log(authValue);

  const protectedRouting = (path: string, component: JSX.Element) => {
    return (
      <Route
        path={path}
        element={
          authValue !== '' && authValue === 'authenticated' ? (
            component
          ) : (
            <LandingPage props={<Login />} />
          )
        }
      />
    );
  };
  return (
    <Routes>
      <Route path="/landing/*" element={<LandingPage />}>
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
      {protectedRouting('*', <Home />)}
    </Routes>
  );
};

export default Router;
