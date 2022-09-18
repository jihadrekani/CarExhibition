/* This example requires Tailwind CSS v2.0+ */
import { useState, Fragment, useEffect } from 'react';

import { Disclosure } from '@headlessui/react';
import {  MenuIcon, XIcon } from '@heroicons/react/outline';
import { useLocation, NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../app/slices/authSlice';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/', current: true },
    // { name: 'Products', href: '/products', current: false },
    { name: 'Categories', href: '/categories', current: false },
    { name: 'AddProduct', href: '/addproduct', current: false },
    { name: 'About', href: '/about', current: false },

  ]);

  useEffect(() => {
    console.log('the state of auth is:', auth);
  }, []);
  return (
    <Disclosure as="nav"  className="bg-black bg-img  right-0 top-0   " >
      {({ open }) => (
        <>
          <div className="max-w-7xl  mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center  sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* buttons parent */}
              <div className="flex-1 flex items-center  justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex  items-center">
                  <img 
                    className="block lg:hidden h-8 w-auto "
                    src="https://img.icons8.com/dusk/64/000000/car--v1.png"
                    alt="Jihad Cars"
                  />
                   {/* <img
                    className="hidden lg:block h-8 w-auto "
                    src="https://img.icons8.com/dusk/64/000000/car--v1.png"
                    alt="Jihad Cars"
                  />  */}
                  <Link to='/'>
                  <h2 className='text-white ml-2 font-bold text-xl '>JR Cars</h2></Link>
                </div>
                <div className="hidden sm:block sm:ml-2 ">
                  <div className="flex space-x-4 ">
                    {navigation.map((item, index) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          isActive
                            ? 'bg-sky-800 text-white px-3 py-2 rounded-md text-sm font-medium'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        }
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {auth.isAuthenticated ? (
                  <>
                    {/* <p className="text-gray-400 mr-4 ">
                       {auth.username}
                    </p> */}
                    <Link
                      to="/login"
                      className="bg-sky-800 p-1 rounded-full text-white px-4 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      onClick={() => dispatch(logout())}
                    >
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      Logout 

                    </Link>
                  </>
                ) : 

                 
                // the correct one
                ( 
                  <Link
                    to="/login"
                   
                    className="bg-sky-800 p-1 rounded-full text-white px-4 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                    Login
                    
                  </Link>
                )}
                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}



                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-gray-300 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'block px-3 py-2 rounded-md text-base font-medium bg-gray-900 '
                      : 'block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-500'
                  }
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
