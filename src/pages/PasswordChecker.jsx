import React, { useState } from 'react';
import '../App.css';

export default function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckPassword = (e) => {
    e.preventDefault();

    if (!password.trim()) {
      setErrorMessage('Please enter a password.');
      setResult(null);
      return;
    }

    setErrorMessage('');
    const len = password.length;

    let strength = '';
    let statusMessage = '';
    let theme = '';

    if (len < 6) {
      strength = 'Weak';
      statusMessage = 'Please create a stronger password.';
      theme = 'weak';
    } else if (len <= 9) {
      strength = 'Medium';
      statusMessage = 'Consider creating a longer password.';
      theme = 'medium';
    } else {
      strength = 'Strong';
      statusMessage = 'You can use this password.';
      theme = 'strong';
    }

    setResult({
      strength,
      statusMessage,
      theme,
    });
  };

  const handleClear = () => {
    setPassword('');
    setResult(null);
    setErrorMessage('');
  };

  return (
    <div className="activity-wrapper">
      <div className="card">
        <div className="card-header">
          <h2 className="page-title">Password Strength Checker</h2>
          <p className="page-subtitle">Activity 3</p>
        </div>
        
        <div className="card-body">
          <form onSubmit={handleCheckPassword}>
            <div className="form-group">
              <label htmlFor="password-input" className="input-label">Password</label>
              <input
                id="password-input"
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
              <span className="char-count">
                Character count: {password.length}
              </span>
            </div>

            <div className="btn-group">
              <button type="submit" className="btn btn-primary">
                Check Password
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleClear}>
                Clear
              </button>
            </div>
          </form>

          {errorMessage && (
            <div className="error-msg">
              {errorMessage}
            </div>
          )}

          {result && (
            <div className={`result-panel ${result.theme}`}>
              <h3 className="result-title">
                Password Status: {result.strength}
              </h3>
              <p className="result-desc">{result.statusMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}