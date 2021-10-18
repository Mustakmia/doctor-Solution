import Home from './component/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Home/Nav/Nav';
import Services from './component/Services/services';

function App() {
  return (
    <div className="App">
      <Services></Services>

    </div>
  );
}

export default App;
