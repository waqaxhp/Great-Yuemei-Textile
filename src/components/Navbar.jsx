

import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "./../assets/img/logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
            <span
              className="text-xl font-bold"
              style={{ color: "rgb(165, 35, 143)" }}
            >
              Great Yuemei Textile
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=" hover:text-[#003366] font-medium transition"
                style={{ color: "rgb(165, 35, 143)" }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex">
            <a
              href="#quote"
              className="ml-6 bg-[#004C97] text-white px-4 py-2 rounded-lg hover:bg-[#003366] transition"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[#004C97] focus:outline-none"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#004C97] hover:text-[#003366] font-medium transition"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#quote"
              className="mt-2 bg-[#004C97] text-white px-4 py-2 rounded-lg text-center hover:bg-[#003366] transition"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
