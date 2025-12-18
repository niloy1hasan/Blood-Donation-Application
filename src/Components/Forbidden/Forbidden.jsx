import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Shield, Lock, AlertTriangle, Mail, ArrowLeft } from 'lucide-react';

const Forbidden = () => {
  return (
    <div className="w-full h-auto pb-20 lg:h-full lg:pb-6 overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-rose-100">
        
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-rose-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="absolute top-20 left-10 text-red-300/20 animate-float">
          <Lock className="w-12 h-12" />
        </div>
        <div className="absolute top-40 right-20 text-orange-300/20 animate-float delay-300">
          <Shield className="w-16 h-16" />
        </div>
        <div className="absolute bottom-32 left-1/4 text-rose-300/20 animate-float delay-500">
          <Lock className="w-10 h-10" />
        </div>
        <div className="absolute bottom-40 right-1/4 text-red-300/20 animate-float delay-700">
          <Shield className="w-14 h-14" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTczMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />
      </div>

      {/* Content */}
      <div className=" flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full mt-16 text-center space-y-8">
          
          {/* Warning Badge */}
          {/* <div className="flex justify-center mt-6 animate-bounce-slow">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-red-100 border-2 border-red-300 shadow-lg">
              <AlertTriangle className="w-5 h-5 text-red-600 animate-pulse" />
              <span className="text-sm font-bold text-red-700 uppercase tracking-wide">
                Access Denied
              </span>
            </div>
          </div> */}

          <div className=" flex justify-center animate-fade-in">
            <div className="relative z-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-red-400/30 to-orange-500/30 rounded-full animate-ping-slow" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-red-500/40 to-orange-600/40 rounded-full animate-pulse" />
              </div>
              
              <div className=" w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 rotate-12 hover:rotate-0">
                <div className="absolute inset-0 bg-white/20 rounded-3xl backdrop-blur-sm" />
                <Lock className="w-16 h-16 text-white relative" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <h1 className="text-8xl sm:text-9xl md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-rose-600 tracking-tight drop-shadow-lg animate-gradient bg-[length:200%_200%]">
              403
            </h1>
          </div>

          <div className="space-y-4 animate-slide-up delay-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide">
              Forbidden
            </h2>
            <div className="max-w-2xl mx-auto space-y-3">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
                You don't have permission to access this resource. This area is restricted to authorized users only.
              </p>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Forbidden;