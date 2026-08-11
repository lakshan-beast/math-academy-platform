export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-emerald-50 via-white to-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left column */}
        <div className="space-y-6 text-center lg:text-left py-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-s font-semibold bg-emerald-100 text-emerald-800">
            Grades 6 - 11 Mathematics Specailist
          </span>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-gray-900 leading-tight">
            Master Mathematics <br />
            Step-by-Step
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto  lg:mx-0">
            Access structured monthly lessons, clear theory breakdowns, &
            intensive O/L model paper discussions explicity mapped out to
            guarantee your "A" Grade.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 font-bold text-white bg-emerald-600 hover:bg-emerald-700  rounded-xl shadow-lg hover:shadow-emerald-200 transition-all cursor-pointer">
              Explore Monthly Packs
            </button>
            <button
              type="button"
              className="w-full sm:w-auto px-8 py-4 font-bold text-gray-700 bg-gray-100 hover:bg-gray-200  rounded-xl transition-all cursor-pointer">
              Watch Free Intro
            </button>
          </div>
        </div>

        {/* right column */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-emerald-600/10 rounded-full absolute blur-3xl -z-10 animate-pulse"></div>
          <div className="border-4 border-gray-100 bg-white shadow-2xl p-8 rounded-3xl max-w-md space-y-6 transform hover:rotate-1 transition-transform">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <span className="text-sm font-bold text-gray-400">
                MATH DASHBOARD
              </span>
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  Active Subscription
                </p>
                <p className="text-lg font-extrabold text-gray-900">
                  Grade 11 Theory Pack
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">
                    Next Live Class
                  </p>
                  <p className="text-sm font-bold text-gray-800">
                    Paper Discussion
                  </p>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-amber-100 text-amber-800 rounded-md">
                  Tonight
                </span>
              </div>
            </div>
            <div className="pt-2 text-center">
              <span className="text-3xl font-black text-gray-900">
                Σ (x² + 2x)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
