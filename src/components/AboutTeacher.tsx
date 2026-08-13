// import React from "react";
import { MdPhone } from "react-icons/md";
import { FaMapLocation } from "react-icons/fa6";

export default function AboutTeacher() {
  const teacherStats = [
    { value: "10+", label: "Years Experience" },
    { value: "50,000+", label: "Students Mentored" },
    { value: "95%", label: "O/L A-Pass Rate" },
  ];

  const teachingSpecialties = [
    {
      title: "Short Methods & Hacks",
      desc: "Unique mathematical strategies designed to solve complex algebraic and geometric problems in seconds.",
    },
    {
      title: "Targeted Paper Analytics",
      desc: "Rigorous training focusing on structuring answers precisely to match the official O/L examination marking schemes.",
    },
  ];
  const contactInfo = [
    { type: "Hotline", value: "+94 77 123 4567", icon: <MdPhone /> },
    {
      type: "Office Address",
      value: "No. 45, Highlevel Road, Colombo, Sri Lanka",
      icon: <FaMapLocation />,
    },
  ];

  return (
    <section
      id="about"
      className="font-baloo py-20 px-6 max-w-7xl mx-auto border-t border-gray-100 ">
      {/* title segment */}
      <div className="mb-12 text-center lg:text-left">
        <span className="font-exo text-xs font-black text-purple-500 uppercase tracking-widest bg-purple-950/40 border border-purple-500/20 px-3 py-1 rounded-md"></span>
        <h2 className="font-exo text-3xl sm:text-5xl font-black text-gray-900 mt-3 tracking-tight uppercase">
          Know Your Instructor
        </h2>
      </div>

      {/* bento grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* left big card: profile & bio */}
        <div className="bg-white border boder-gray-200/60 p-8 rounded-3xl flex flex-col justify-between shadow-sm lg:row-span-2">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center text-white font-exo font-black text-2xl shadow-lg shadow-purple-500/10">
                AI
              </div>
              <div>
                <h3 className="font-exo text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                  Asanka Nayanajith
                </h3>
                <p className="font-exo text-xs font-bold text-purple-500 uppercase tracking-wider mt-0.5">
                  B.Sc. (Mathematics) Special
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
              A leading Ordinary Level Mathematics educator in Sri Lanka,
              renowned for transforming complex theoretical core structures into
              logical, engaging paradigms. Over the years, consistently
              engineering the highest percentage of distinction (A) passes
              island-wide.
            </p>
          </div>

          <div className="font-exo pt-6 border-t border-gray-100 dark:border-slate-800 mt-6 flex justify-between items-center text-xs font-bold text-gray-400 tracking-widest">
            <span>PROFESSIONAL ACADEMY</span>
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
          {teacherStats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-900 text-white p-5 rounded-3xl border border-slate-800 flex flex-col justify-center items-center lg:items-start transition-transform duration-300 hover:scale-[1.01]">
              <span className="font-exo text-3xl font-black text-purple-400 tracking-tight">
                {stat.value}
              </span>
              <span className="font-exo text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
          {/* </div> */}
        </div>

        {/* Right Card: Teaching Specialties */}
        <div className="bg-white dark:bg-slate-900 border border-gray-200/60 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6">
          <h4 className="font-exo text-xs font-black text-gray-400 uppercase tracking-wider">
            // WHY CHOOSE THIS CLASS
          </h4>

          <div className="space-y-4">
            {teachingSpecialties.map((spec, i) => (
              <div key={i} className="flex items-start space-x-3">
                <span className="text-purple-500 font-extrabold text-base mt-0.5">
                  ✓
                </span>
                <div>
                  <h5 className="font-exo font-black text-gray-900 dark:text-white text-base">
                    {spec.title}
                  </h5>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lower Full-Width Contact Matrix Block */}
        <div className="lg:col-span-2 bg-purple-950/10 border border-purple-500/20 p-6 rounded-3xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-4 p-2 bg-white/40 dark:bg-slate-900/40 rounded-2xl border border-white/50 dark:border-slate-800/60">
              <span className="text-2xl p-2 bg-purple-500/10 text-purple-500 rounded-xl">
                {info.icon}
              </span>
              <div>
                <span className="font-exo block text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  {info.type}
                </span>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  {info.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
