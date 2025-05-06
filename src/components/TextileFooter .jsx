import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const TextileFooter = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Textilify</h3>
            <p className="text-sm leading-relaxed">
              Premium textile solutions with a legacy of quality and innovation.
              We supply global brands with sustainable fabrics and services.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact Us</h4>
            <ul className="text-sm space-y-2">
              <li>Email: info@textilify.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Location: 123 Textile Park, NY</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter className="text-gray-400 hover:text-white" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <Youtube className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Textilify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default TextileFooter;
