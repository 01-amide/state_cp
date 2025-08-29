/**
 * vite.config.js - Vite Build Tool Configuration
 * 
 * This file configures Vite, a modern build tool that provides:
 * - Extremely fast hot module replacement (HMR)
 * - Optimized builds for production
 * - Native ES modules support
 * - Plugin system for framework integration
 * - Development server with instant reloading
 * 
 * Vite is designed to be a faster alternative to webpack and other bundlers,
 * especially for modern web applications using ES modules.
 */

// Import the defineConfig function from Vite
// defineConfig provides TypeScript support and better IDE integration
// It also provides better IntelliSense and type checking for configuration
import { defineConfig } from 'vite'

// Import the React plugin for Vite
// This plugin enables React support including:
// - JSX/TSX file processing
// - Fast refresh for React components
// - Optimized builds for React applications
// - Development server integration
import react from '@vitejs/plugin-react-swc'

/**
 * Vite Configuration Object
 * 
 * This configuration object defines how Vite should build and serve the application.
 * The defineConfig function provides better TypeScript support and validation.
 * 
 * Configuration options include:
 * - plugins: Array of Vite plugins to use
 * - build: Production build settings
 * - server: Development server configuration
 * - resolve: Module resolution settings
 * - css: CSS processing options
 */
export default defineConfig({
  // Plugins array - defines which Vite plugins to use
  plugins: [
    // React plugin with SWC compiler for faster builds
    // SWC is a Rust-based compiler that's significantly faster than Babel
    // It provides the same functionality with better performance
    react()
  ],
  
  // Additional configuration options can be added here:
  // 
  // build: {
  //   // Production build settings
  //   outDir: 'dist',           // Output directory
  //   sourcemap: true,          // Generate source maps
  //   minify: 'terser',         // Minification method
  // },
  // 
  // server: {
  //   // Development server settings
  //   port: 3000,               // Server port
  //   open: true,               // Open browser automatically
  //   host: true,               // Allow external connections
  // },
  // 
  // resolve: {
  //   // Module resolution settings
  //   alias: {
  //     '@': '/src',            // Path aliases
  //   },
  // },
})

/**
 * Development Workflow:
 * 
 * 1. Run 'npm run dev' to start the development server
 * 2. Vite will start a local server (usually on http://localhost:5173)
 * 3. Changes to source files trigger instant hot module replacement
 * 4. No full page reloads needed during development
 * 
 * Production Build:
 * 
 * 1. Run 'npm run build' to create optimized production build
 * 2. Vite will bundle and optimize all assets
 * 3. Output goes to 'dist' directory by default
 * 4. Run 'npm run preview' to preview the production build locally
 */
