import { useState } from 'react';
import styles from './App.module.css'; // Import the styles
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';

function App() {
  const [login, setLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    isLoggedIn
      ? setIsLoggedIn((prevState) => !prevState)
      : setLogin((prevState) => !prevState);
  };

  console.log(isLoggedIn);

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <a href="#">
            <img
              src="https://preservica.com/img/logo.png"
              alt="Preservica logo"
              className={styles.logo}
              onClick={loginHandler}
            />
          </a>
          <ul className={styles['navbar-items']}>
            <li>
              <button onClick={loginHandler} type="button">
                {isLoggedIn ? 'Logout' : 'Login'}
              </button>
            </li>
            <li>
              <button type="button">Solutions</button>
            </li>
            <li>
              <button type="button">Features</button>
            </li>
            <li>
              <button type="button">Resources</button>
            </li>
            <li>
              <button type="button">About</button>
            </li>
            <li>
              <button type="button">Pricing</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {!isLoggedIn && login ? (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        ) : isLoggedIn ? (
          <UserList />
        ) : (
          <LandingPage />
        )}
      </main>

      {/* <footer className={styles.footer}>
        <p>Copyright © 2006 The Example Company</p>
        <p>
          <a href="about.html">About</a> -
          <a href="policy.html">Privacy Policy</a> -
          <a href="contact.html">Contact Us</a>
        </p>
      </footer> */}
    </>
  );
}

export default App;
