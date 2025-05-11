// import { useState } from "react";
// import {
//   Menu,
//   X,
//   Phone,
//   Mail,
//   Facebook,
//   Instagram,
//   Twitter,
//   Send,
// } from "lucide-react";
// import logo from "./../assets/img/logo.png";

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   // Navigation items with submenus
//   const navItems = [
//     {
//       name: "Home",
//       submenu: ["Home Factory", "Home Industry", "Header Styles"],
//     },
//     {
//       name: "Page",
//       submenu: ["About Us", "Team", "FAQ"],
//     },
//     {
//       name: "Case Studies",
//       submenu: ["Case Study 1", "Case Study 2"],
//     },
//     {
//       name: "Blog",
//       submenu: ["Latest Posts", "Categories"],
//     },
//     {
//       name: "Contact",
//       submenu: ["Contact Info", "Support"],
//     },
//   ];

//   return (
//     <>
//       {/* Top Navbar */}
//       <div className="bg-[#A5238F] text-white py-4 px-6">
//         <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
//           <div className="flex items-center gap-6 text-sm">
//             <span className="flex items-center gap-1">
//               <Phone size={16} />
//               +1 (800) 123-4567
//             </span>
//             <span className="flex items-center gap-1">
//               <Mail size={16} />
//               info@greatyuemei.com
//             </span>
//           </div>
//           <div className="flex items-center gap-4 text-lg animate-bounce">
//             <a href="#">
//               <Facebook />
//             </a>
//             <a href="#">
//               <Instagram />
//             </a>
//             <a href="#">
//               <Twitter />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Second Navbar */}
//       <header className="bg-white shadow sticky top-0 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Desktop Navbar */}
//           <nav className="hidden lg:flex items-center justify-between h-16">
//             <div className="flex items-center gap-8">
//               <img src={logo} alt="Logo" className="h-10 w-auto" />
//               <span className="text-xl font-bold text-[#A5238F]">
//                 Great Yuemei Textile
//               </span>
//               {navItems.map((item) => (
//                 <div key={item.name} className="relative group">
//                   <button className="text-[#A5238F] font-medium hover:text-[#003366] transition">
//                     {item.name}
//                   </button>

//                   <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-200 z-40">
//                     <ul className="py-2">
//                       {item.submenu.map((sub, index) => (
//                         <li
//                           key={index}
//                           className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
//                         >
//                           {sub}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Get a Quote Button */}
//             <div className="hidden lg:block">
//               <button
//                 onClick={() => setShowModal(true)}
//                 className="ml-6 flex items-center gap-2 bg-gradient-to-r from-[#A5238F] to-[#004C97] text-white px-5 py-2 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
//               >
//                 <Send size={16} />
//                 Get Quote
//               </button>
//             </div>
//           </nav>

//           {/* Mobile Navbar */}
//           <nav className="lg:hidden flex items-center justify-between h-16">
//             <div className="flex items-center gap-2">
//               <img src={logo} alt="Logo" className="h-10 w-auto" />
//               <span className="text-xl font-bold text-[#A5238F]">
//                 Great Yuemei
//               </span>
//             </div>
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="text-[#004C97]"
//             >
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </nav>

//           {/* Mobile Dropdown Menu */}
//           {mobileOpen && (
//             <div className="lg:hidden bg-white shadow-md py-4 space-y-3">
//               {navItems.map((item, idx) => (
//                 <div key={idx}>
//                   <p className="font-semibold px-4 py-2 text-[#A5238F]">
//                     {item.name}
//                   </p>
//                   {item.submenu.map((sub, i) => (
//                     <a
//                       key={i}
//                       href="#"
//                       className="block px-6 py-1 text-sm text-gray-700 hover:text-[#003366]"
//                     >
//                       {sub}
//                     </a>
//                   ))}
//                 </div>
//               ))}
// <button
//   onClick={() => setShowModal(true)}
//   className="mt-2 w-full text-center bg-[#004C97] text-white py-2 rounded hover:bg-[#003366] transition"
// >
//   Get a Quote
// </button>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 relative animate-slide-in-up">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//             >
//               <X size={20} />
//             </button>
//             <h2 className="text-xl font-bold mb-4 text-[#A5238F]">
//               Get a Quote
//             </h2>
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <textarea
//                 placeholder="Your Message"
//                 className="w-full border px-3 py-2 rounded"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#A5238F] text-white px-4 py-2 rounded hover:bg-[#861d6f] transition w-full"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";
import logo from "./../assets/img/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Navigation items with submenus
  const navItems = [
    {
      name: "Home",
      submenu: ["Home Factory", "Home Industry", "Header Styles"],
    },
    {
      name: "Page",
      submenu: ["About Us", "Team", "FAQ"],
    },
    {
      name: "Case Studies",
      submenu: ["Case Study 1", "Case Study 2"],
    },
    {
      name: "Blog",
      submenu: ["Latest Posts", "Categories"],
    },
    {
      name: "Contact",
      submenu: ["Contact Info", "Support"],
    },
  ];

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-[#A5238F] text-white py-4 px-6 animate-fadeIn">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-1">
              <Phone size={16} />
              +1 (800) 123-4567
            </span>
            <span className="flex items-center gap-1">
              <Mail size={16} />
              info@greatyuemei.com
            </span>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <a
              href="#"
              className="hover:text-gray-200 transition-transform duration-300 hover:scale-110"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-transform duration-300 hover:scale-110"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-transform duration-300 hover:scale-110"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>

      {/* Second Navbar */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Navbar */}
          <nav className="hidden lg:flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-[#A5238F]">
                Great Yuemei Textile
              </span>
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button className="text-[#A5238F] font-medium hover:text-[#003366] transition-all duration-300 transform hover:translate-y-[-2px]">
                    {item.name}
                  </button>

                  {/* Submenu dropdown */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50"
                      >
                        <ul className="py-2">
                          {item.submenu.map((sub, i) => (
                            <li
                              key={i}
                              className="px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Get a Quote Button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#004C97] text-white px-4 py-2 rounded-lg hover:bg-[#003366] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Send size={16} />
              Get a Quote
            </button>
          </nav>

          {/* Mobile Navbar */}
          <nav className="lg:hidden flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-[#A5238F]">
                Great Yuemei
              </span>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#004C97]"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-white shadow-md overflow-hidden py-4 space-y-3"
              >
                {navItems.map((item, idx) => (
                  <div key={idx}>
                    <p className="font-semibold px-4 py-2 text-[#A5238F]">
                      {item.name}
                    </p>
                    {item.submenu.map((sub, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-6 py-1 text-sm text-gray-700 hover:text-[#003366]"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                ))}
                {/* <button
                  onClick={() => setShowModal(true)}
                  className="mt-2 w-full text-center bg-[#004C97] text-white py-2 rounded hover:bg-[#003366] transition-all duration-300"
                >
                  Get a Quote
                </button> */}
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-2 w-full text-center bg-[#004C97] text-white py-2 rounded hover:bg-[#003366] transition"
                >
                  Get a Quote
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Sidebar Drawer with Framer Motion */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 flex"
          >
            {/* Sidebar */}
            <div className="w-80 bg-white h-full p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <img src={logo} alt="Logo" className="h-10" />
                <button onClick={() => setSidebarOpen(false)}>
                  <X size={28} className="text-[#004C97]" />
                </button>
              </div>

              {/* Sidebar content */}
              <h2 className="text-lg font-bold mb-2 text-[#A5238F]">
                About Us
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                We are a leading textile manufacturing company committed to
                quality and innovation.
              </p>
              <button className="bg-[#A5238F] text-white px-4 py-2 rounded mb-6 transition-transform duration-300 hover:scale-105">
                EXPLORE
              </button>

              <h2 className="text-md font-bold mb-2 text-[#A5238F]">
                Contact Info
              </h2>
              <p className="text-sm mb-1">Melbourne, USA</p>
              <p className="text-sm mb-1">+88 01682648101</p>
              <p className="text-sm mb-4">info@example.com</p>

              <div className="flex space-x-3 mt-4">
                {["facebook", "twitter", "linkedin", "instagram"].map(
                  (icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="bg-gray-200 p-2 rounded-full hover:bg-[#004C97] hover:text-white transition duration-300"
                    >
                      <i className={`fab fa-${icon}`} />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Click outside to close */}
            <div
              className="flex-1 bg-black bg-opacity-50"
              onClick={() => setSidebarOpen(false)}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal with Framer Motion */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-lg p-6 w-96 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
              <h2 className="text-xl font-bold mb-4 text-[#A5238F]">
                Get a Quote
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded"
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full border px-3 py-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-[#A5238F] text-white px-4 py-2 rounded hover:bg-[#861d6f] transition w-full"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
