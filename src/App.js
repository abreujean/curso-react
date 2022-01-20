import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyname';

function App() {
  return (
    <div className="App">
      <h1 >Olá React!</h1>
      <HelloWord/>
      <SayMyName nome="Jean"/>
    </div>
  );
}

export default App;
