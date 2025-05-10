import React from "react";

const Logo =
  "https://ik.imagekit.io/zh57cbpyz/images/Logo-1-nobg_ZTjfuandY.png?updatedAt=1746886125402";
const Footer: React.FC = () => {
  return (
    <footer className="bg-music-dark py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a
              href="#"
              className="text-2xl font-bold text-white tracking-tight"
            >
              {/* BEAT<span className="text-music-purple">LIFE</span> */}
              {Logo ? (
                <img src={Logo} alt="Symphony Beats" className="h-16" />
              ) : (
                <div>
                  Symphony<span className="text-music-purple"> Beats</span>
                </div>
              )}
            </a>
            {/* <p className="text-gray-400 mt-4">
              Creating unforgettable live music experiences.
            </p> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  About
                </a>
              </li>
              {/* <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Testimonials
                </a>
              </li> */}
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Event Production
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Artist Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Sound & Lighting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Venue Booking
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Marketing
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  YouTube
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-music-purple transition-colors"
                >
                  LinkedIn
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Symphony Beats. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {/* <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-300 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-300 text-sm"
                >
                  Terms of Service
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.malhar.fun/"
                  target="_blank"
                  className="text-gray-500 hover:text-gray-300 text-sm"
                >
                  by Malhar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
