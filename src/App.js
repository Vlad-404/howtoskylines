import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tips from './pages/Tips';

// Components
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />

        <main className="container w-screen pb-12">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/*" element={<NotFound />}/>
            <Route path="/tips" element={<Tips />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
