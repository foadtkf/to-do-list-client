import { Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './Components/Add/Add';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import Signup from './Components/Signup/Signup';
import Update from './Components/Update/Update';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
      <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/login' element={<Login></Login>}></Route>
<Route path='/register' element={<Register></Register>}></Route>
<Route path='/update' element={<Update></Update>}></Route>
<Route path='/add' element={<Add></Add>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
