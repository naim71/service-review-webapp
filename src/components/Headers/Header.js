import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              id="WindUI"
              aria-label="Brad's law Firm"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              to="/"
            >
              <img src='https://i.ibb.co/FhSNbDP/tax-icon-15116.png'
                width="300"
                height="300"
                className="h-12 w-12"
                alt=''
              />
              Brad's Law
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
                }`}
            >
              {user?.uid ?
                <>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/home"
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/services"
                    >
                      <span>Services</span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/myreviews"
                    >
                      <span>My Reviews</span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/addService"
                    >
                      <span>Add Service</span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/blogs"
                    >
                      <span>Blogs</span>
                    </Link>
                  </li>
                </>
                :
                <>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/home"
                    >
                      <span>Home</span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/services"
                    >
                      <span>Services</span>
                    </Link>
                  </li>
                  <li role="none" className="flex items-stretch">
                    <Link
                      role="menuitem"
                      aria-haspopup="false"
                      tabIndex="0"
                      className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                      to="/blogs"
                    >
                      <span>Blogs</span>
                    </Link>
                  </li>
                </>

              }
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              {user?.uid ?
                <>
                  <button className='relative overflow-hidden cursor-pointer group hover:overflow-visible focus-visible:outline-none ' aria-describedby="tooltip-05">
                  <img src={user.photoURL} className="relative inline-flex items-center justify-center w-10 h-10 text-lg text-white rounded-lg mr-3"
                    alt='' />
                    <span
                      role="tooltip"
                      id="tooltip-05"
                      className="invisible absolute rounded bg-emerald-700 p-2 text-xs text-white opacity-0 transition-all before:invisible before:absolute before:border-t-4 before:border-x-transparent before:border-t-slate-700 before:opacity-0 before:transition-all before:content-[''] group-hover:visible group-hover:block group-hover:opacity-100 group-hover:before:visible group-hover:before:opacity-100"
                    >
                      {user.displayName}
                    </span></button>

                  <Link onClick={logOut} className="border-2 border-emerald-800 px-3 py-1 rounded-lg hover:bg-emerald-500 hover:text-white hover:border-none mr-4">Sign Out</Link>
                </>
                :
                <Link to="/login" className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                  <span>Sign In</span>
                </Link>

              }

            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;