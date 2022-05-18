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
      <div class="flex-1">
        <p class="btn btn-ghost normal-case text-xl">To-do list</p>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
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
            <li>
              <Link to="/add">Add a task</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
