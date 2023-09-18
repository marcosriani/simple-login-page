import React, { useState } from 'react';
import styles from './LoginForm.module.css'; // Import the styles

function LoginForm({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length > 0 && value.length <= 7) {
      setEmailError('Email must be more than 7 characters');
    } else if (!value.includes('@')) {
      setEmailError('Email must contain "@" symbol');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length > 0 && value.length <= 8) {
      setPasswordError('Password must be more than 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.length <= 7 || password.length <= 8) {
      alert('Validation failed: Email or password is too short.');
      return;
    }

    // The console log should be replaced by the validation functionality
    console.log('email', email);
    console.log('password', password);
    setIsLoggedIn(true);
    setEmail('');
    setPassword('');
  };

  return (
    <section className={styles['form-section']}>
      <h1 className={styles['sub-title']}>Login Form</h1>
      <form onSubmit={handleSubmit} className={styles['form']}>
        <p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />

          {emailError && (
            <span className={styles['error-message']}>{emailError}</span>
          )}
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />

          {passwordError && (
            <span className={styles['error-message']}>{passwordError}</span>
          )}
        </p>
        <div>
          <button className={styles['form-button']} type="submit">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
