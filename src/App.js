import logo from './logo.svg';
import './App.css';
import Registration from './pages/registration';
import Login from './pages/login';
import {BrowserRouter,Routes, Route} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        
          <Route path='/registration' element= { <Registration/>} />
          <Route path='/login' element= { <Login/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
