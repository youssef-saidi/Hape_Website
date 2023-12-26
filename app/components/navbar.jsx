"use client"
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';

const Navbar = () => {
  const currentRoute = usePathname();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed w-full'>
    <nav className="bg-purple flex items-center justify-between p-4 lg:px-10 mx-16 mt-16 shadow-md rounded-md">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
         <Logo />
        </div>
      </div>

      {/* Responsive Menu */}
      <div className="lg:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

      
      </div>

      {/* Regular Menu for larger screens */}
      <div className={`hidden lg:flex lg:ml-auto`}>
        <div className="lg:grid grid-cols-3 items-center justify-items-center space-x-4">
          <Link className={currentRoute == "/" ? "font-bold text-orange-500" : "font-bold"} href="/" passHref>
            Home
          </Link>
          <Link className={currentRoute == "/services" ? "font-bold text-orange-500" : "font-bold"} href="/services" passHref>
            Services
          </Link>
          <Link className={currentRoute == "/about" ? "font-bold text-orange-500" : "font-bold"} href="/about" passHref>
            AboutUs
          </Link>
        </div>
        <Link href="/" className='mx-7'>
          <button className="bg-pink text-white font-bold py-2 px-4 rounded-md hover:bg-pink-500 focus:outline-none focus:shadow-outline-teal active:bg-pink-400" type="submit">
            Contact us
          </button>
        </Link>
      </div>
    </nav>
      {/* Conditionally render menu items based on isMenuOpen */}
      {isMenuOpen && (
        <div className="lg:hidden bg-purple p-4 mx-16 shadow-md rounded-md">
          <Link className={currentRoute == "/" ? "block font-bold text-orange-500 my-2" : "block font-bold my-2"} href="/" passHref>
            Home
          </Link>
          <Link className={currentRoute == "/services" ? "block font-bold text-orange-500 my-2" : "block font-bold my-2"} href="/services" passHref>
            Services
          </Link>
          <Link className={currentRoute == "/about" ? "block font-bold text-orange-500 my-2" : "block font-bold my-2"} href="/about" passHref>
            AboutUs
          </Link>
        </div>
      )}
      </header>
  );
};

export default Navbar;
