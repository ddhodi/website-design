import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white ${
        hasScrolled ? "shadow-md" : ""
      } sticky top-0 w-full z-10 transition-shadow`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10 w-[175px]" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">Services</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">Portofolio</a></li>
            <li><a href="#" className="text-gray-700 hover:text-blue-600 font-semibold">Contact</a></li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2">
            <li><a href="#" className="block text-gray-700 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
