import {Component} from 'react'
import './App.css'

class App extends Component{
  constructor(props) {
    super(props)
    this.state={
      person:{
        fullName: "quavo",
        bio: "just dropped the album, y'all go stream now!",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Carmelo_Anthony_Rich_Kleiman_Quavo_Jim_Mollica_Boardroom_Bose_2025_NBA_All_Star_Weekend_%28cropped%29.jpg/250px-Carmelo_Anthony_Rich_Kleiman_Quavo_Jim_Mollica_Boardroom_Bose_2025_NBA_All_Star_Weekend_%28cropped%29.jpg",
        profession: "musician"
      },
      shows: false,
    };
  }


  toggler = () => {
    this.setState({shows: !this.state.shows});
  };

  render() {
    const {person, shows} = this.state;
    const {imgSrc, fullName, profession, bio} = person
    return (
      <div>
      <h1>React State Checkpoint</h1>

      
      {shows && (
        <div>
        <img src={imgSrc} alt="" />
        <h2>{fullName}</h2>
        <p>
          <strong>Profession: </strong>{profession}
        </p>
        <p>
          <strong>Bio: </strong>{bio}
        </p>
        </div>
      )}
        <button onClick={this.toggler}>Toggler Show</button>
      </div>
      
      
    )
  }
}
  
export default App
