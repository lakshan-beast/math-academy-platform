// 1. File eka top-level import karanna
// import introVideo from "../assets/Dummy-Videos-For-Demo-Use.mp4";
// import ReactPlayer from "react-player";
import { mathTeacher } from "./Mockdata";

export default function Teacher() {
  return (
    <section className="py-16 px-8 max-w-7xl mx-auto">
      {/* structural title component */}
      <div className="mb-10 text-center lg:text-left">
        <span className="text-xs font-bold text-emerald-600 uppercase tracking-widset bg-emerald-50 px-3 py-1 rounded-md">
          Meet Your Instructor
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 tracking-tight">
          Learn From The Specialist
        </h2>
      </div>

      {/* 2026 Bento Box Layout Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Card: Teacher Bio Profile (Occupies 2 columns) */}
        <div className="lg:col-span-2 bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col justify-between shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={mathTeacher.avatarUrl}
                alt={mathTeacher.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500 shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {mathTeacher.name}
                </h3>
                <p className="text-xs font-medium text-emerald-600 uppercase tracking-wider mt-0.5">
                  Academy Principal
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              {mathTeacher.bio}
            </p>

            {/* Qualifications Visual Stack */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Credentials
              </h4>
              {mathTeacher.qualifications.map((qual, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 text-sm text-gray-800">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>{qual}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200/60 mt-6 flex justify-between items-center text-xs font-mono text-gray-400">
            <span>VERIFIED INSTRUCTOR</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
        </div>

        {/* Right Card: Custom Clean Video Viewport (Occupies 3 columns) */}
        <div className="lg:col-span-3 bg-black rounded-3xl overflow-hidden shadow-2xl relative border-4 border-white aspect-video lg:h-full">
          {/* <video */}
          {/* // <ReactPlayer
            // url={mathTeacher.introVideoUrl}
            url="../assets/Dummy-Videos-For-Demo-Use.mp4"
            width="100%"
            height="100%"
            controls={true}
            // config={{
            //   youtube: {
            //     playerVars: {
            //       modestbranding: 1, // Hides the YouTube logo
            //       rel: 0, // Prevents related videos showing from other channels
            //       showinfo: 0, // Prevents top title bars showing
            //     },
            //   },
            // }}
            autoPlay="on"
          /> */}

          {/* <ReactPlayer
            url={introVideo} //  2. Import karapu variable eka pass karanna
            width="100%"
            height="100%"
            controls={true}
            playing={true} // ReactPlayer eke autoplay weddi 'playing' use karanna
          /> */}

          {/* <ReactPlayer
            url="/Dummy-Videos-For-Demo-Use.mp4" //  Public folder eke thiyena nisama direct '/' danna puluwan
            width="100%"
            height="100%"
            controls={true}
          /> */}

          <video
            src="/intro.mp4" //  Meka absolute path ekak (root eke thiyena nisa direct file name eka)
            controls
            controls={true}
            muted={true}
            autoPlay="on"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
