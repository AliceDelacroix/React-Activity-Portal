import React, { useState } from 'react';

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
    let barColor = '';
    let barWidth = '';

    if (len < 6) {
      strength = 'Weak';
      statusMessage = 'Please create a stronger password.';
      barColor = '#ef4444'; // Red
      barWidth = '33%';
    } else if (len <= 9) {
      strength = 'Medium';
      statusMessage = 'Consider creating a longer password.';
      barColor = '#eab308'; // Yellow
      barWidth = '66%';
    } else {
      strength = 'Strong';
      statusMessage = 'You can use this password.';
      barColor = '#22c55e'; // Green
      barWidth = '100%';
    }


    setResult({
      strength,
      statusMessage,
      barColor,
      barWidth,
    });
  };

  const handleClear = () => {
    setPassword('');
    setResult(null);
    setErrorMessage('');
  };

  return (
    <div className="card">
      <h2 className="page-title">Password Strength Checker</h2>
      <p>Activity 3</p>
      <p className="page-subtitle">Checks password strength based on character length</p>

      {errorMessage && <div className="error-msg">{errorMessage}</div>}

      <form onSubmit={handleCheckPassword}>
        <div className="form-group">
          <label htmlFor="password-input">Password</label>
          <input
            id="password-input"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
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

      {result && (
        <div className="result-panel">
          <p className="result-item">
            <strong>Password Status:</strong> {result.strength}
          </p>
          <p className="result-item">{result.statusMessage}</p>

          <div className="strength-meter">
            <div
              className="strength-bar"
              style={{ width: result.barWidth, backgroundColor: result.barColor }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}