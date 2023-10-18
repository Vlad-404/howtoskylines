import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Tips from './pages/Tips';

// Components
import Navbar from './components/layout/Navbar';
import Cityentry from './components/tips/Cityentry';
import StartingBudget from './components/tips/StartingBudget';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen dark:bg-slate-800 dark:text-white bg-white text-black">
        <Navbar />

        <main className="w-screen pb-12">
          <Routes>
            <Route index element={<Home />} />
            <Route path="tips" element={<Tips />}/>
            <Route path="tips/cityentry" element={<Cityentry />}/>
            <Route path="tips/startingbudget" element={<StartingBudget />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
