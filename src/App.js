import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './Components/AddService/AddService';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
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
<Route path='/update' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
<Route path='/add' element={<AddService/>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
