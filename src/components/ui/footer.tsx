const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top - Navigation Links */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6 mb-6">
          <div className="text-xl font-semibold text-[#D4AF37]">
            See Jane Cook
          </div>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <a href="/" className="hover:text-[#D4AF37] transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-[#D4AF37] transition-colors">
              About
            </a>
            <a
              href="/contact"
              className="hover:text-[#D4AF37] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom - Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="space-y-1 text-center md:text-left">
            <p>
              Email:{" "}
              <a href="mailto:chef@email.com" className="hover:text-[#FA8072]">
                chefjane@seejanecook.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:(520)360-2299" className="hover:text-[#FA8072]">
                (520) 360-2299
              </a>
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-gray-500 text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} Chef Jane. All rights reserved.
            </p>
            <p>
              Site by{" "}
              <a
                href="https://addairdesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37]"
              >
                AddairDesign
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
