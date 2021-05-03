import './App.css'; 
import Header from './components/Header'
import Fighters from './components/Fighters'
import FighterList from './components/FighterList'
import Team from './components/Team'
import TeamName from './components/TeamName'
import Character from './components/Character'

function App() {
  return (
    <div className="App">
    <Header/>
    <Fighters/>
    <FighterList/>
    <Team/>
    <TeamName/>
    <Character/>
    </div>
  );
}

export default App;
