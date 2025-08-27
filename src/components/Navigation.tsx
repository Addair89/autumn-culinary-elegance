import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // <-- state for mobile menu

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="font-display text-2xl font-bold text-rusty-red-dark"
          >
            See Jane Cook
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {["/", "/about", "/contact"].map((path, i) => {
              const labels = ["Home", "About & Testimonials", "Contact"];
              return (
                <NavLink
                  key={i}
                  to={path}
                  className={({ isActive }) =>
                    cn(
                      "font-medium transition-colors duration-300 hover:text-rusty-red-dark",
                      isActive ? "text-rusty-red-dark" : "text-muted-foreground"
                    )
                  }
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-rusty-red-dark"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 flex flex-col">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block font-medium px-4 py-2 rounded-md transition-colors duration-300",
                  isActive
                    ? "bg-rusty-red-dark text-white"
                    : "text-muted-foreground hover:bg-rusty-red-dark/10"
                )
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block font-medium px-4 py-2 rounded-md transition-colors duration-300",
                  isActive
                    ? "bg-rusty-red-dark text-white"
                    : "text-muted-foreground hover:bg-rusty-red-dark/10"
                )
              }
            >
              About & Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                cn(
                  "block font-medium px-4 py-2 rounded-md transition-colors duration-300",
                  isActive
                    ? "bg-rusty-red-dark text-white"
                    : "text-muted-foreground hover:bg-rusty-red-dark/10"
                )
              }
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
