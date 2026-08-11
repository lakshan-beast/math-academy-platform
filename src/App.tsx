import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Teacher from "./components/Teacher";

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
