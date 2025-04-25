import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../app';

// LoginPage component
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuthenticated, dispatch } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    // Mock authentication
    if (email === 'user@example.com' && password === 'password') {
      dispatch({ 
        type: 'LOGIN', 
        payload: { 
          id: 1, 
          name: 'John Doe', 
          email, 
          role: 'customer',
          deliveryPoints: 250
        } 
      });
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Try user@example.com / password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary">City Pickups</h1>
          <p className="text-gray-600 mt-2">Peer-to-Peer Delivery Platform</p>
        </div>
        
        {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        
        <button
          className="w-full primary-btn py-3 rounded font-semibold"
          onClick={handleLogin}
        >
          Log In
        </button>
        
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>Need an account? <span className="text-primary cursor-pointer">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}
