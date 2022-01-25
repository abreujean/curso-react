import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyname';
import Pessoas from './components/Pessoas';

function App() {
  return (
    <div className="App">
      <h1 >Olá React!</h1>
      <HelloWord/>
      <SayMyName nome="Jean"/>
      <Pessoas nome="Jean" idade="23 anos" profissao="desenvolvedor" />
    </div>
  );
}

export default App;
