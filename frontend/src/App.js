import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Navigate, Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TextContainer from './components/TextContainer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
          </Routes>

          <Routes>
            <Route path='/dashboard' exact element={<Dashboard/>}/>
          </Routes>

          <Routes>
            <Route path='/topic-desc' exact element={<TextContainer/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
