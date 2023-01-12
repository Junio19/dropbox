import Navbar from './Navbar';
import './App.css';
import Home from './Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
