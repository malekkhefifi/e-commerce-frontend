import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import styles from './Login.module.css';  // Ensure you import the CSS module

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Track whether user is signing up or logging in
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission (either login or sign up)
  const handleSubmit = (e) => {
    e.preventDefault();

    // If signing up, validate passwords
    if (isSignup) {
      // Ensure passwords match
      if (password !== confirmPassword) {
        setError('Les mots de passe ne correspondent pas');
        return; // Don't proceed if passwords don't match
      }

      // Here, you would call your API to create a new user
      // For now, let's assume registration is always successful
      setError(''); // Clear any errors
      navigate('/shop'); // Redirect to Shop page immediately after sign up
    } else {
      // If logging in, validate credentials
      if (email === 'test@example.com' && password === 'password123') {
        // Simulate successful login and navigate to shop page
        navigate('/shop'); // Redirect to Shop page
      } else {
        setError('Email ou mot de passe invalide');
      }
    }
  };

  return (
    <div className={styles['login-container']}>
      <h2>{isSignup ? 'Créer un compte' : 'Connexion'}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles['input-field']}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles['input-field']}
        />
        
        {/* Show this input only for Signup */}
        {isSignup && (
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles['input-field']}
          />
        )}

        <button type="submit" className={styles['button']}>
          {isSignup ? 'Créer un compte' : 'Se connecter'}
        </button>

        {/* Error message */}
        {error && <p className={styles['error-message']}>{error}</p>}

        {/* Forgot password link */}
        {!isSignup && (
          <a href="/forgot-password" className={styles['forgot-password']}>
            Mot de passe oublié ?
          </a>
        )}
      </form>

      {/* Toggle between Login and Register */}
      <div className={styles['create-account']}>
        <p>
          {isSignup
            ? 'Vous avez déjà un compte ? '
            : "Vous n'avez pas de compte ? "}
          <span
            className={styles['toggle-link']}
            onClick={() => setIsSignup(!isSignup)} // Toggle between signup and login
          >
            {isSignup ? 'Se connecter' : 'Créez un compte'}
          </span>
          
        </p>
      </div>
    </div>
  );
}

export default Login;











