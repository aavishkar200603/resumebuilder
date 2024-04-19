

// import { FaCog, FaSpinner } from 'react-icons/fa'; // Import icons from react-icons library
// import { useAuth0 } from "@auth0/auth0-react";

// const Front = () => {
    
//     const { user,loginWithRedirect,isAuthenticated,logout } = useAuth0();

//   return (
//     // Flex container
//     <div className="flex justify-between items-center px-16 py-8 h-full gap-0 relative">

//       {/* Content on the left side */}
//       <div className="text-black max-w-md z-10">
//       <h1 className="text-3xl font-bold mb-4">Craft Your Resume with The Best CV Maker Online.</h1>
//       <h3 className="text-xl mb-4">Fast. Easy. Effective.</h3>
//       <p>If a sheet of paper represents your entire work life, personality, and skills, it better be a pretty amazing piece of paper — Let the builder do the heavy lifting.</p>
//       <button
//   className="bg-blue-700 hover:bg-blue-900 text-white font-bold  mt-4 py-2 px-2 rounded-full w-1/3"
//   onClick={() => loginWithRedirect()} >
//   Get Started
// </button>

//     </div>

//       {/* Image on the right side with icons */}
//       <div className="relative overflow-hidden z-10">
//         {/* Image */}
//         <img
//           src="https://assets.zety.com/lp/_next/image?url=/lp/images/hero-image.png&w=1920&h=undefined&q=100" // Replace "YOUR_IMAGE_URL_HERE" with the actual URL of your image
//           alt="Header Image"
//           className="object-cover rounded-lg"
//           style={{ width: "700px", height: "500px" }} // Adjust the width and height of the image as needed
//         />
//         {/* Icons */}
//         <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
//           {/* Rotating icon */}
//           <div className="absolute top-4 left-4">
//             <FaCog className="text-blue-500 text-4xl animate-spin" />
//           </div>
//           {/* Slightly moving icon */}
//           <div className="absolute top-4 right-4">
//             <FaSpinner className="text-white text-4xl animate-pulse" />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// // Export the component
// export default Front;


import { FaCog, FaSpinner } from 'react-icons/fa'; // Import icons from react-icons library
import { useAuth0 } from "@auth0/auth0-react";

const Front = () => {
    const { user, loginWithRedirect } = useAuth0();

    return (
        // Flex container with background color
        <div className="flex justify-between items-center px-16 py-8 h-full gap-0 relative rounded-sm bg-gray-100">

            {/* Content on the left side */}
            <div className="text-black max-w-md z-10">
                <h1 className="text-3xl font-bold mb-4">Craft Your Resume with The Best CV Maker Online.</h1>
                <h3 className="text-xl mb-4">Fast. Easy. Effective.</h3>
                <p>If a sheet of paper represents your entire work life, personality, and skills, it better be a pretty amazing piece of paper — Let the builder do the heavy lifting.</p>
                <button
                    className="bg-blue-700 hover:bg-blue-900 text-white font-bold mt-4 py-2 px-2 rounded-full w-1/3"
                    onClick={() => loginWithRedirect()} >
                    Get Started
                </button>
            </div>

            {/* Image on the right side with icons */}
            <div className="relative overflow-hidden z-10">
                {/* Image */}
                <img
                    src="https://assets.zety.com/lp/_next/image?url=/lp/images/hero-image.png&w=1920&h=undefined&q=100" // Replace "YOUR_IMAGE_URL_HERE" with the actual URL of your image
                    alt="Header Image"
                    className="object-cover rounded-lg"
                    style={{ width: "700px", height: "500px" }} // Adjust the width and height of the image as needed
                />
                {/* Icons */}
                <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full">
                    {/* Slightly moving icon */}
                    <div className="absolute top-4 right-4">
                        <FaSpinner className="text-white text-4xl animate-pulse" />
                    </div>
                </div>
            </div>

        </div>
    );
};

// Export the component
export default Front;
