import './App.css';

// Pages
import Home from './pages/Home';

// Components
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />

      <main className="container mx-auto px-3 pb-12">
        <Home />
      </main>
    </div>
  );
}

export default App;
