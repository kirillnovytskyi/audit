import './App.css';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <div className="component-container">
        <Header />
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
