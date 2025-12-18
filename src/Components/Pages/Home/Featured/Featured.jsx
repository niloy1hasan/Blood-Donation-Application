import React from 'react';

const Featured = () => {
    return  (
    <section className="bg-gradient-to-br from-red-50 via-white to-rose-100 dark:from-slate-900 dark:via-red-950 dark:to-slate-900 transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-4 py-15">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Why Donate with <span className="text-red-600">BloodBank</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            BloodBank connects compassionate donors with patients in need — 
            every drop saves lives.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {/* Feature 1 */}
          <div className="group rounded-2xl bg-gradient-to-br from-red-100 to-rose-50 dark:from-red-500/20 dark:to-red-600/10 border border-red-200 dark:border-red-400/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-red-200 dark:bg-red-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <svg className="w-7 h-7 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 2C12 2 5 9 5 14a7 7 0 0014 0c0-5-7-12-7-12z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Save Lives Instantly
              </h3>
              <p className="text-slate-600 dark:text-red-100/80 leading-relaxed">
                Your blood donation can help accident victims, surgical patients,
                cancer fighters, and mothers in childbirth.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group rounded-2xl bg-gradient-to-br from-red-100 to-rose-50 dark:from-red-500/20 dark:to-red-600/10 border border-red-200 dark:border-red-400/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-red-200 dark:bg-red-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <svg className="w-7 h-7 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Easy Scheduling
              </h3>
              <p className="text-slate-600 dark:text-red-100/80 leading-relaxed">
                Book donation appointments in seconds and get reminders so you
                never miss a chance to help.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group rounded-2xl bg-gradient-to-br from-red-100 to-rose-50 dark:from-red-500/20 dark:to-red-600/10 border border-red-200 dark:border-red-400/20 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
            <div className="space-y-5">
              <div className="w-14 h-14 rounded-xl bg-red-200 dark:bg-red-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <svg className="w-7 h-7 text-red-600 dark:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                Safe & Trusted
              </h3>
              <p className="text-slate-600 dark:text-red-100/80 leading-relaxed">
                BloodBank follows strict medical standards to ensure donor safety
                and proper handling of every unit of blood.
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-15 text-center">
          <button className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-2 text-lg font-semibold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:bg-red-700 hover:scale-105">
            Become a Donor
          </button>
        </div>

      </div>
    </section>
    );
};

export default Featured;