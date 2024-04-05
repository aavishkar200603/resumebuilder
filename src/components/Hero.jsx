import React from "react";

const Hero = () => {
  return (
    <section
      className="text-green-400 body-font mt-0" // Adjusted margin here
      style={{
        background:
         'url("https://th.bing.com/th/id/R.c1bedb22a175ada744c1842fc246b80e?rik=MiVVa6ZV2x5hSA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fUiNmBwn.jpg&ehk=4zv34RkzPNJIV4tHuZtUoTVpDaBo6YPizl9QS9EMcdw%3d&risl=&pid=ImgRaw&r=0") center/cover',
      }}
    >
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300">
            Build your professional identity
            <br className="hidden lg:inline-block" />
            with our Resume Builder
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Unlock your career potential with our intuitive resume builder
            application. Explore a range of modern templates, tailor them to
            showcase your skills and experience, and take the next step in your
            professional journey.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">
              Click to know more
            </button>
            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-1/3 md:w-1/2 w-5/6 lg:ml-auto">
          <img
            className="object-cover object-center rounded w-2/3 h-2/3 lg:h-full ml-auto"
            alt="hero"
            src="https://th.bing.com/th/id/OIP.hrP0A1-Hm966pGJGdlbggAAAAA?rs=1&pid=ImgDetMain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
