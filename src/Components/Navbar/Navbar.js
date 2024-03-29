import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    

    <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          
          {user ? (
            <button
              className="btn btn-link text-decoration-none"
              style={{ color: "gray" }}
              onClick={handleSignOut}
            >
              sign out
            </button>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <>
              <li>
                <Link to="/add">Add a task</Link>
              </li>
              <li>
            <Link to="/completed">Completed Tasks</Link>
          </li>
          <li>
            <Link to="/todo">To-do</Link>
          </li>
            </>
          )}
       
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">To-Dos</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          
          {user ? (
            <button
              className="btn btn-link text-decoration-none"
              style={{ color: "gray" }}
              onClick={handleSignOut}
            >
              sign out
            </button>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <>
              <li>
                <Link to="/add">Add a task</Link>
              </li>
              <li>
            <Link to="/completed">Completed Tasks</Link>
          </li>
          <li>
            <Link to="/todo">To-do</Link>
          </li>
            </>
          )}
        
        </ul>
      
  </div>
  <div class="navbar-end">
  </div>
</div>
  );
};

export default Navbar;
