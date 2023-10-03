import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tips from './pages/Tips';

// Components
import Navbar from './components/layout/Navbar';
import Cityentry from './components/tips/Cityentry';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen dark:bg-slate-800 dark:text-white bg-white text-black">
        <Navbar />

        <main className="w-screen pb-12">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/*" element={<NotFound />}/>
            <Route path="/tips" element={<Tips />}/>
            <Route path="/tips/cityentry" element={<Cityentry />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
