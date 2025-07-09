import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
              Jaehuiui Studio
            </Link>
            
            <div className="flex space-x-8">
              <Link
                to="/"
                className={`hover:text-blue-400 transition-colors ${
                  isActive('/') ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Home
              </Link>
              {/* Blog and Resume hidden from navigation but routes still available */}
              {/* 
              <Link
                to="/blog"
                className={`hover:text-blue-400 transition-colors ${
                  isActive('/blog') ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/resume"
                className={`hover:text-blue-400 transition-colors ${
                  isActive('/resume') ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                Resume
              </Link>
              */}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 Jaehuiui Studio. Made with ❤️ in Seoul, Korea.
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/jaehuiui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jaehuiui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:dev.jaehuiui@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 