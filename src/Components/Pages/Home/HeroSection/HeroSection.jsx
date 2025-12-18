import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { NavLink } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative max-h-[1200px] md:h-[calc(100vh+80px)] overflow-hidden z-30 bg-gradient-to-br from-red-900 via-red-800 to-rose-900 text-white">

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-10 w-3 h-3 bg-red-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-red-300/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-red-500/20 rounded-full animate-pulse delay-300"></div>
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative max-h-[1200px] z-10 container mx-auto px-6 lg:px-12 py-24 lg:h-[90vh] flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-sm font-medium">Saving Lives Together</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Donate Blood,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-300 to-rose-400 animate-gradient">
                Save Lives
              </span>
            </h1>

            <p className="text-lg text-gray-200 max-w-xl leading-relaxed">
              Bloodbank connects donors and patients instantly. One donation can
              bring hope, strength, and life to someone in need.
            </p>

            <div className="flex gap-8 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300">10K+</div>
                <div className="text-sm text-gray-300">Donors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300">5K+</div>
                <div className="text-sm text-gray-300">Lives Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-300">24/7</div>
                <div className="text-sm text-gray-300">Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink to={'/register'} className="group px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-red-500/50 hover:scale-105 flex items-center justify-center gap-2">
                Join as a donor
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </NavLink>
              <NavLink to={'/search-donor'} className="px-8 py-4 rounded-xl border-2 text-center border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Search Donors
              </NavLink>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="relative animate-float">
                <div className="w-64 h-80 bg-gradient-to-b from-red-400 to-red-600 rounded-t-full rounded-b-full transform rotate-45 shadow-2xl shadow-red-500/50">
                  <div className="absolute inset-0 bg-white/20 rounded-t-full rounded-b-full blur-xl"></div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45">
                  <svg className="w-24 h-24 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-red-400 rounded-full -translate-x-1/2"></div>
              </div>
              <div className="absolute inset-0 animate-spin-slow-reverse">
                <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-rose-400 rounded-full -translate-x-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z"
            fill="#fef7f7"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;