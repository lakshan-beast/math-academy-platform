
import { RiArrowRightSFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto ">
        {/* footer top container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* brand name and logo */}
          <div className="space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-purple-400">
                Edu<span className="text-white">Stream</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Premium modular mathematics platform explicitly optimized for
              Grade 6-11 school theory blocks and O/L past paper mastery.
            </p>

            {/* socail media */}
            <ul>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>

          {/* rapid resources */}
          <div className="space-y-3">
            <h4 className="text-sm text-white font-bold uppercase tracking-wider">
              Quick Categories
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors ">
                  <RiArrowRightSFill /> Grade 11 Theory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors ">
                  <RiArrowRightSFill /> Grade 10 Theory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors ">
                  <RiArrowRightSFill /> O/L Paper Class
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors ">
                  <RiArrowRightSFill /> Junior Secondary (6-9)
                </a>
              </li>
            </ul>
          </div>

          {/* platform anchor */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Student Portals
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors">
                  <RiArrowRightSFill /> Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors">
                  <RiArrowRightSFill /> My Enrolled Packs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors">
                  <RiArrowRightSFill /> Billing & Receipts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors">
                  <RiArrowRightSFill /> Support Helpline
                </a>
              </li>
            </ul>
          </div>

          {/* contact & socail */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Connect with us
            </h4>
            <p>
              Mobile : <a href="tel:+947******">+94 7 *** ** **</a>
            </p>
            <p>
              Kandy, Sri Lanka. <br />
              Email :
              <a href="mailto:support@edustream.com">support@edustream.com</a>
            </p>
          </div>
        </div>

        {/* footer bottom container */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <p>
            @copyrights <span>2026</span> Edu.stream. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
