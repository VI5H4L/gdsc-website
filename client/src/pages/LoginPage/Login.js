import React,{useState} from 'react';
import styles from './Login.module.css'; // If using CSS modules
import axios from 'axios';

const LoginForm = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://gdscbackend.vercel.app/authentication/login', { email, password }); // Replace '/login' with your actual backend API endpoint
      if (response.data.success) {
        // Authentication successful, redirect to admin page
        console.log('Login successful:', response.data.authtoken);
        localStorage.setItem('authtoken', response.data.authtoken);
        window.location.href = 'https://gdsc-lnmiit.vercel.app/admin'; 
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred during login');
    }
  };

  
  return (
    <div className={styles.main}>
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.formgroup}>
        <label htmlFor="email">Email address</label>
        <input type="email" className={styles.formcontrol} id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className={styles.formgroup}>
        <label htmlFor="password">Password</label>
        <input type="password" className={styles.formcontrol} id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit" className={styles.btn}>Submit</button>
    </form>
    </div>
  );
};

export default LoginForm;
