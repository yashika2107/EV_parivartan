import React from "react";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import LogoutButton from "./logout-button";
// import LoginButton from "./login-button";


export default function Navbar() {
  
  const { loginWithRedirect } = useAuth0();
  const { logout,isAuthenticated} = useAuth0();

  return (
    <header className="pt-4 pb-4 shadow-md font-medium">
      <nav className="flex text-base flex-row justify-between container w-[70%] m-auto">
        <Link to='/'>
            <p className="text-blue-500">EV parivartan</p>
        </Link>
        <ul className="flex flex-row justify-between w-[40%]">
            <Link to='/'>
                <a>
                  <li>Home</li>
                </a>
            </Link>
          
          <Link to='/fare'>
                <a>
                  <li>Fare</li>
                </a>
            </Link>
           <Link to='/route'>
                <a>
                  <li>Route</li>
                </a>
            </Link>
          <Link to='/contact'>
                <a>
                  <li>Contact us</li>
                </a>
            </Link>

            {
              isAuthenticated ?
              (
              <a>
              <button onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
              </button>
              </a>
              ):(
                <a>
                <button onClick={() => loginWithRedirect()}>Log In</button>
                </a>
              )
            }
         
        </ul>
      </nav>
    </header>
  );
}
