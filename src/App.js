import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Components
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/*" element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
