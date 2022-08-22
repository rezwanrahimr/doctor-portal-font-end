import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shear/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
