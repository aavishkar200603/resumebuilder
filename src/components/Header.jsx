// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [theme, setTheme] = useState("light");
//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <header className="text-gray-600 bg-blue-900 body-font">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <Link
//           to={"/"}
//           className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//           </svg>
//           <span className="ml-3 text-xl text-white">Resume Builder</span>
//         </Link>
//         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
//           <Link to={"/"} className="mr-5 hover:text-yellow-500 ">
//             Home
//           </Link>
//           <a href="#card" className="mr-5 hover:text-yellow-500">
//             Templates
//           </a>
//           <Link to={"/About"} className="mr-5 hover:text-yellow-500 ">
//             About
//           </Link>
//           <Link to={"/Context"} className="mr-5 hover:text-yellow-500 ">
//             Contact
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const { user,loginWithRedirect,isAuthenticated } = useAuth0();
  const { logout } = useAuth0();


  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className="text-gray-600 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl text-white">Resume Builder</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-white">
          {isAuthenticated?(
            <Link to={"/"} className="mr-5 hover:text-yellow-500 ">
            User
          </Link>
          ):(
            <Link to={"/"} className="mr-5 hover:text-yellow-500 ">
            Home
          </Link>
            
          )
        }
          
          <a href="#card" className="mr-5 hover:text-yellow-500">
            Templates
           </a>
           
          <Link to={"/About"} className="mr-5 hover:text-yellow-500 ">
            About
          </Link>
          <Link to={"/Context"} className="mr-5 hover:text-yellow-500 ">
          Contact Us
          </Link>
            <div>
              
            {isAuthenticated && (
  <p className="text-blue-500">{user.name}</p>
)}

              
            </div>
            <div className="flex justify-between items-center p-4">

      {isAuthenticated ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
        >
          Log Out
        </button>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
      <div>
        {/* Here goes your Gmail icon or link */}
      </div>
    </div>
        
     
        </nav>  
      
      </div>
    </header>
  );
};

export default Header;