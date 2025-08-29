/**
 * React State Checkpoint Application
 * 
 * This file demonstrates fundamental React concepts including:
 * - Class Components and Component lifecycle
 * - State management using this.state
 * - Event handling and state updates
 * - Conditional rendering based on state
 * - Props and component structure
 * 
 * The app displays a person's profile information that can be toggled
 * on/off using a button, showcasing React's state-driven UI updates.
 */

// Import React's Component class for creating class-based components
// Class components are the traditional way to create React components with state
import {Component} from 'react'

// Import the component-specific CSS file for styling
import './App.css'

/**
 * App Component - Main application component
 * 
 * This is a class component that extends React.Component, allowing us to:
 * - Use constructor for initializing state
 * - Access lifecycle methods
 * - Use this.setState for state updates
 * - Bind methods to the component instance
 */
class App extends Component{
  
  /**
   * Constructor method - called when component is instantiated
   * 
   * @param {Object} props - Properties passed to the component
   * 
   * Key responsibilities:
   * - Call super(props) to properly initialize the React component
   * - Initialize the component's state object
   * - Set up initial data and UI state
   */
  constructor(props) {
    // Must call super(props) to properly initialize the React component
    // This ensures the component inherits all React functionality
    super(props)
    
    /**
     * Component State - Internal data that can change over time
     * 
     * State changes trigger component re-renders, updating the UI
     * State is always an object and should be treated as immutable
     */
    this.state={
      // Person object containing profile information
      // This demonstrates nested state structure
      person:{
        fullName: "quavo", // Artist's full name
        bio: "just dropped the album, y'all go stream now!", // Personal biography
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Carmelo_Anthony_Rich_Kleiman_Quavo_Jim_Mollica_Boardroom_Bose_2025_NBA_All_Star_Weekend_%28cropped%29.jpg/250px-Carmelo_Anthony_Rich_Kleiman_Quavo_Jim_Mollica_Boardroom_Bose_2025_NBA_All_Star_Weekend_%28cropped%29.jpg", // Profile image URL
        profession: "musician" // Professional occupation
      },
      // Boolean flag to control visibility of profile information
      // This demonstrates simple state management for UI toggling
      shows: false, // false = profile hidden, true = profile visible
    };
  }

  /**
   * toggler Method - Event handler for toggling profile visibility
   * 
   * This method demonstrates:
   * - Arrow function syntax to avoid 'this' binding issues
   * - State updates using this.setState()
   * - Functional state updates (using previous state)
   * 
   * Note: Using arrow function syntax automatically binds 'this' to the component
   * This prevents common React issues with method binding
   */
  toggler = () => {
    // this.setState() is the proper way to update React component state
    // It triggers a re-render of the component with new state
    // The callback function receives the previous state as parameter
    this.setState({shows: !this.state.shows});
    
    // Alternative functional approach (more modern and recommended):
    // this.setState(prevState => ({ shows: !prevState.shows }));
  };

  /**
   * Render Method - Required method that returns JSX
   * 
   * This method:
   * - Is called every time the component needs to re-render
   * - Returns JSX (JavaScript XML) that describes the UI
   * - Automatically called when state or props change
   * - Should be pure (no side effects, same output for same inputs)
   */
  render() {
    // Destructure state variables for cleaner code
    // This is a common React pattern for accessing state
    const {person, shows} = this.state;
    
    // Destructure person object properties for easier access
    // This makes the JSX more readable and maintainable
    const {imgSrc, fullName, profession, bio} = person
    
    // Return JSX that describes the component's UI
    // JSX allows us to write HTML-like syntax in JavaScript
    return (
      // Root div container for the entire component
      <div>
        {/* Main heading for the application */}
        <h1>React State Checkpoint</h1>

        {/* Conditional Rendering Section */}
        {/* 
          Conditional rendering using the logical AND operator (&&)
          When 'shows' is true, the profile information is displayed
          When 'shows' is false, nothing is rendered (null)
          
          This is a common React pattern for showing/hiding content
          based on state values
        */}
        {shows && (
          // Profile information container - only visible when shows is true
          <div>
            {/* Profile image with alt text for accessibility */}
            <img src={imgSrc} alt="" />
            
            {/* Person's full name as a heading */}
            <h2>{fullName}</h2>
            
            {/* Profession information with semantic HTML structure */}
            <p>
              {/* Strong tag for semantic emphasis */}
              <strong>Profession: </strong>{profession}
            </p>
            
            {/* Biography information with semantic HTML structure */}
            <p>
              {/* Strong tag for semantic emphasis */}
              <strong>Bio: </strong>{bio}
            </p>
          </div>
        )}
        
        {/* Toggle Button */}
        {/* 
          Button element with:
          - onClick event handler bound to the toggler method
          - Descriptive text explaining its function
          
          When clicked, this button calls the toggler method,
          which updates the state and triggers a re-render
        */}
        <button onClick={this.toggler}>Toggler Show</button>
      </div>
    )
  }
}

// Export the App component as the default export
// This allows other files to import and use this component
export default App
