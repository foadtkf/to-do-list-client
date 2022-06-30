import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddService from "./Components/AddService/AddService";
import { MyApp } from "./Components/Calendar/Calendar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Signup from "./Components/Signup/Signup";
import Update from "./Components/Update/Update";
import UpdateProduct from "./Components/UpdateProduct/UpdateProduct";

function App() {
  return (
    <div className="App font-mono">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/update"
          element={
            <RequireAuth>
              <Update></Update>
            </RequireAuth>
          }
        ></Route>
        <Route path="/add" element={<AddService />}></Route>
        <Route
          path="update/:id"
          element={
            <RequireAuth>
              <UpdateProduct></UpdateProduct>
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/calendar" element={<MyApp/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
