import React, { createContext, useContext, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RequireAuth } from './components/RequireAuth';

// Import pages
import { Dashboard } from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import FAQsPage from './pages/FAQsPage';
import SupportPage from './pages/SupportPage';
import CommunityPage from './pages/CommunityPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import SecurityPage from './pages/SecurityPage';
import ImprintPage from './pages/ImprintPage';

// Auth Context
const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('token', 'mock-token');
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return { ...state, isAuthenticated: false, user: null };
    case 'TOGGLE_ROLE':
      const newUser = { ...state.user, role: state.user.role === 'customer' ? 'courier' : 'customer' };
      localStorage.setItem('user', JSON.stringify(newUser));
      return { ...state, user: newUser };
    default:
      return state;
  }
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: !!localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

// Main App Component
const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/imprint" element={<ImprintPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                } 
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

// Render the App
const root = createRoot(document.getElementById('root'));
root.render(<App />);
