import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  // For now, we'll use a simple check. This should be replaced with proper auth later
  const isLoggedIn = window.location.pathname === "/dashboard";

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-bold text-primary">FitPro</Link>
          <div className="flex items-center gap-6">
            {!isLoggedIn ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
                <div className="flex items-center gap-2">
                  <Link to="/register">
                    <Button variant="outline">Sign Up</Button>
                  </Link>
                  <Link to="/login">
                    <Button>Sign In</Button>
                  </Link>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-gray-700">Welcome, Admin</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};