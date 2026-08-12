import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

import Hero from "./components/Hero.js";
import Teacher from "./components/Teacher.js";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-emerald-100">
      <Navbar />

      <main>
        <Hero />
        <Teacher />
      </main>

      <Footer />
    </div>
  );
}

export default App;
