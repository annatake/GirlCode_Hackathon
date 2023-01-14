import logo from './logo.svg';
import './App.css';
// import Images from './Images';
import Recommendations from './Recommendations';
import Album from './Album';


function App() {
  return (
    <div className="App">
      <Recommendations/>
      <header className="App-header">
      <Album></Album>
      
      </header>
    </div>
  );
}



export default App;
