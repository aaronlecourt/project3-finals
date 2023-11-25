import logo from './logo.svg';
import './App.css';
import Beginner from './components/Beginner';
import Intermediate from './components/Intermediate';
import Expert from './components/Expert';

function App() {
  return (
    <div className="p-0 m-0">
      <Beginner/>
      <Intermediate/>
      <Expert/>
    </div>
  );
}

export default App;
