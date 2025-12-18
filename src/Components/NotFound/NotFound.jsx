import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, User, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029')"
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 via-red-700/85 to-rose-900/90" />
        
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-bounce delay-500" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping delay-700" />
          <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-white/30 rounded-full animate-pulse delay-1000" />
        </div>

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full pt-20 text-center space-y-8 animate-fade-in">
          
          <div className="relative h-48 sm:h-56 md:h-64 flex items-center justify-center">
            <h1 className="absolute font-black text-[140px] sm:text-[180px] md:text-[220px] lg:text-[280px] text-white/5 tracking-[10px] sm:tracking-[15px] animate-pulse select-none">
              404
            </h1>
            <h1 className="absolute font-black text-[140px] sm:text-[180px] md:text-[220px] lg:text-[280px] text-red-300/20 tracking-[10px] sm:tracking-[15px] animate-glitch-1 select-none">
              404
            </h1>
            <h1 className="relative font-black text-[140px] sm:text-[180px] md:text-[220px] lg:text-[280px] text-white tracking-[10px] sm:tracking-[15px] drop-shadow-2xl animate-float select-none">
              404
            </h1>
          </div>

          <div className="space-y-4 animate-slide-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white uppercase tracking-wide px-4">
              Oops! Page Not Found
            </h2>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto px-4 leading-relaxed">
              We're sorry, but the page you requested was not found. It might have been moved, deleted, or never existed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 animate-slide-up delay-200">
            <NavLink
              to="/"
              className="group relative w-full sm:w-auto px-8 py-4 bg-white text-red-600 font-bold text-base sm:text-lg uppercase rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-2"
            >
              <span className="relative z-10 text-xs flex items-center gap-2">
                <Home className="w-5 h-5" />
                Go Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </NavLink>

            <NavLink
              to="/login"
              className="group relative text-xs! w-full sm:w-auto px-8 py-4 bg-transparent text-white font-bold sm:text-lg uppercase rounded-full border-2 border-white/90 overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-2xl hover:shadow-white/10 flex items-center justify-center gap-2"
            >
              <User className="w-5 h-5" />
              Create Account
            </NavLink>
          </div>

          <div className="flex items-center justify-center gap-4 pt-6 animate-slide-up delay-300">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center text-white/90 transition-all duration-300 hover:text-red-600 hover:bg-white hover:rounded-full hover:scale-110 hover:shadow-lg"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center text-white/90 transition-all duration-300 hover:text-red-600 hover:bg-white hover:rounded-full hover:scale-110 hover:shadow-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center text-white/90 transition-all duration-300 hover:text-red-600 hover:bg-white hover:rounded-full hover:scale-110 hover:shadow-lg"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center text-white/90 transition-all duration-300 hover:text-red-600 hover:bg-white hover:rounded-full hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-white/5 rounded-full animate-spin-very-slow pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-white/5 rounded-full animate-spin-very-slow-reverse pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;