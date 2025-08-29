/**
 * main.jsx - Application Entry Point
 * 
 * This file serves as the main entry point for the React State Checkpoint application.
 * It is responsible for:
 * - Importing the main App component
 * - Setting up the React application
 * - Rendering the app into the DOM
 * - Configuring development and production settings
 * 
 * This file demonstrates the modern React 18+ rendering approach using:
 * - createRoot API for concurrent features
 * - StrictMode for development debugging
 * - ES6 module imports
 */

// Import React's StrictMode component for development debugging
// StrictMode helps identify potential problems in the application during development
// It performs additional checks and warnings for:
// - Identifying unsafe lifecycles
// - Warning about legacy string ref API usage
// - Warning about deprecated findDOMNode usage
// - Detecting unexpected side effects
import { StrictMode } from 'react'

// Import createRoot from react-dom/client for React 18+ rendering
// createRoot is the new API that replaces ReactDOM.render
// It enables concurrent features and better performance
import { createRoot } from 'react-dom/client'

// Import global CSS styles that apply to the entire application
// These styles establish the foundation styling and design system
import './index.css'

// Import the main App component that contains the application logic
// This is the root component that will be rendered into the DOM
import App from './App.jsx'

/**
 * Application Rendering
 * 
 * This section creates and renders the React application:
 * 1. Gets the DOM element with id 'root' from index.html
 * 2. Creates a React root using createRoot()
 * 3. Renders the App component wrapped in StrictMode
 * 4. Mounts the application into the DOM
 */
createRoot(document.getElementById('root')).render(
  // Wrap the App component in StrictMode for development debugging
  // StrictMode is a development-only feature that helps catch common mistakes
  <StrictMode>
    {/* Main App component - the root of our component tree */}
    <App />
  </StrictMode>,
)

/**
 * Development Notes:
 * 
 * - The createRoot API enables React 18+ features like concurrent rendering
 * - StrictMode provides additional development-time checks and warnings
 * - The root element must exist in index.html before this script runs
 * - Hot Module Replacement (HMR) is automatically configured by Vite
 * - This file is processed by Vite's build tools for optimization
 */
