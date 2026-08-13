// import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const classesData = [
  {
    id: "g11",
    name: "Grade 11 - Mathematics",
    desc: "Key class guiding students toward a guaranteed 'A' pass at O/Ls.",
    active: true,
  }, // Active 🔥
  {
    id: "paper",
    name: "O/L Paper Class 2026",
    desc: "Over 50 question papers and analysis of past exam questions.",
    active: true,
  }, // Active 🔥
  {
    id: "g10",
    name: "Grade 10 - Mathematics",
    desc: "The right start to the O/L syllabus.",
    active: false,
  },
  {
    id: "g9",
    name: "Grade 09 - Mathematics",
    desc: "Discussion of specialized, exam-level problems.",
    active: false,
  },
  {
    id: "g8",
    name: "Grade 08 - Mathematics",
    desc: "Theory combined with structured question papers.",
    active: false,
  },

  {
    id: "g7",
    name: "Grade 07 - Mathematics",
    desc: "Special training to strengthen the foundation.",
    active: false,
  },
  {
    id: "g6",
    name: "Grade 06 - Mathematics",
    desc: "Theory and shortcuts explained simply from the basics.",
    active: false,
  },
];

export default function ClassCategories() {
  //   const navigate = useNavigate();

  return (
    <section id="classes" className="font-baloo py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <span className="font-exo text-xs font-black text-emarald-500 uppercase tracking-widest bg-emerald-950/40 border border-emerald-500/20 px-3 py-1 rounded-md"></span>
        <h2 className="font-exo text-3xl sm:text-5xl font-black text-gray-900 uppercase dark:text-white mt-3 tracking-tight ">
          Select Your Class
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl mx-auto">
          Access all the classes needed to succeed in 2026 O/L Mathematics
          below.
        </p>
      </div>

      {/* bento grid matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classesData.map((clss) => (
          <div
            key={clss.id}
            className={`relative group bg-white dark:bg-slate-900 border p-6 rounded-3xl transition-all duratioan-300 shadow-sm ${clss.active ? "border-emerald-500/30 dark:border-emerald-500/20 shadow-emerald-500/5 hover:-translate-y-1 hover:shadow-md hover:border-emerald-500 cursor-pointer" : "border-gray-200 dark:border-slate-800 opacity-40 pointer-events-none"}`}
            onClick={() =>
              clss.active && alert(`${clss.name} Welcome to the class!.`)
            }>
            {/* top tow indicators */}
            <div className="flex justify-between items-start mb-4">
              <span
                className={`font-exo text-xs font-bold px-2.5 py-1 rounded-lg tracking-wide ${clss.active ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400" : "bg-gray-100 text-gray-400 dark:bg-slate-800"}`}>
                {clss.id.toUpperCase()}
              </span>

              {!clss.active && (
                <span className="font-exo text-[10px] font-black tracking-wider text-amber-600 bg-amber-100 dark:bg-amber-950/40 dark:text-amber-400 px-2 py-0.5 rounded-md uppercase">
                  Cooming Soon
                </span>
              )}
            </div>

            <h3 className="font-exo text-xl font-black text-gray-900 group-hover:text-emerald-500 transition-colors">
              {clss.name}
            </h3>

            <p className="text-gra-600 text-sm mt-2 leading-relaxed">
              {clss.desc}
            </p>

            {/* bottom arrow */}
            {clss.active && (
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center text-xs font-bold text-emerald-500 tracking-wider font-exo uppercase">
                <span>Login</span>
                <span className="transform group-hover:translate-x-1 transition-transform font-extrabold">
                  <MdOutlineKeyboardDoubleArrowRight />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
