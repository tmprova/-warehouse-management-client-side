import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../../firebase/firebase.init";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <Link
          to={"/Home"}
          aria-label="VinBike"
          title="VinBike"
          className="inline-flex items-center"
        >
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            VinBike
          </span>
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          {user && (
            <>
              <li>
                <CustomLink
                  to={"/Inventory"}
                  aria-label="Our Storage"
                  title="Our Storage"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Inventory
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to={"/AddItem"}
                  aria-label="Added item"
                  title="Add Item"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Add Item
                </CustomLink>
              </li>
              <li>
                <CustomLink
                  to={"/MyItem"}
                  aria-label="My Item"
                  title="My Item"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  My Item
                </CustomLink>
              </li>
            </>
          )}
          <li>
            <CustomLink
              to={"/About"}
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              About us
            </CustomLink>
          </li>
        </ul>
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            {user ? (
              <CustomLink
                onClick={handleSignOut}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-300 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Log out
              </CustomLink>
            ) : (
              <CustomLink
                to={"/SignUp"}
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </CustomLink>
            )}
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CustomLink
                      to={"/Home"}
                      aria-label="VinBike"
                      title="VinBike"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        VinBike
                      </span>
                    </CustomLink>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {user && (
                      <>
                        <li>
                          <CustomLink
                            to={"/Inventory"}
                            aria-label="Our Storage"
                            title="Our Storage"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Inventory
                          </CustomLink>
                        </li>
                        <li>
                          <CustomLink
                            to={"/AddItem"}
                            aria-label="Added item"
                            title="Add Item"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Add Item
                          </CustomLink>
                        </li>
                        <li>
                          <CustomLink
                            to={"/MyItem"}
                            aria-label="My Item"
                            title="My Item"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            My Item
                          </CustomLink>
                        </li>
                      </>
                    )}
                    <li>
                      <CustomLink
                        to={"/About"}
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        About us
                      </CustomLink>
                    </li>
                    <li>
                      {user ? (
                        <CustomLink
                          onClick={handleSignOut}
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Log out
                        </CustomLink>
                      ) : (
                        <CustomLink
                          to={"/SignUp"}
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </CustomLink>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
