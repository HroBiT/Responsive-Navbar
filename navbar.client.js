import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const variants = {
    open: { opacity: 1, x: "0%" },
    closed: { opacity: 0, x: "-100%" },
    exit: { opacity: 0, x: "-100%" },
  }

  return (
    <nav className="h-20 w-full bg-blue-400 text-white flex items-center justify-between sticky top-0 z-50">
{!isOpen && (
      <div className="flex items-center ml-4">
        <img src="/icona.png" alt="Company Logo" className="h-12 w-auto " loading="lazy" />
        <span className="text-lg font-bold">Your Name</span>
      </div>
    )}
      {!isMobile && !isOpen && (
        <div className="flex mr-24 text-white font-bold">
          <a href="./123" className="ml-2 text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">
Page 1
          </a>
          <a href="/strona1" className="ml-6 text-slate-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">Page 2</a>
          <a href="/Page 3" className="ml-6 text-slate-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">Page 3</a>
          <a href="/strona2" className="ml-6 text-slate-50 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">Page 4</a>
        </div>
      )}
      {isMobile && (
        <div className="flex justify-start mr-24">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button> 
        </div>
      )}
      <AnimatePresence>

      {isOpen && (
        <motion.div
        className="fixed top-0 left-0 h-full w-64 bg-blue-400 text-white flex flex-col items-start p-6"
        initial="closed"
        animate="open"
        exit="exit"
        variants={variants}
          transition={{ duration: 0.3 }}
          >
          <div className="flex items-center justify-between w-full">
            <img src="/icona.png" alt="Company Logo" className="ml-5 h-12 w-auto mr-2" loading="lazy" />
            <button onClick={toggleNavbar}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <a href="./123" className="mt-16 text-white font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">
            Page 1
          </a>
          <a href="/strona1" className="mt-5 text-white font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">
            Page 2
            </a>
          <a href="/strona1" className="mt-5 text-white font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">
            Page 3
            </a>
          <a href="/strona2" className="mt-5 text-white font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 hover:text-white p-2 rounded-lg hover:opacity-100">
            Page 4
          </a>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
