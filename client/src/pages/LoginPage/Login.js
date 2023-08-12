import React from 'react';
import styles from './Login.module.css'; // If using CSS modules

const LoginForm = () => {
  return (
    <div className={styles.main}>
    <form className={styles.loginForm}>
      <div className={styles.formgroup}>
        <label htmlFor="email">Email address</label>
        <input type="email" className={styles.formcontrol} id="email" placeholder="Enter email" />
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="password">Password</label>
        <input type="password" className={styles.formcontrol} id="password" placeholder="Password" />
      </div>
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
    </div>
  );
};

export default LoginForm;
