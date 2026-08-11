import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Hero from "./components/Hero.jsx";
import Teacher from "./components/Teacher.jsx";

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
