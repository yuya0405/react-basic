import logo from './logo.svg';
import './App.css';
import BasicUseEffect from './components/BasicUseEffect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Basic2 /> */}
        <BasicUseEffect />
      </header>
    </div>
  );
}

export default App;
