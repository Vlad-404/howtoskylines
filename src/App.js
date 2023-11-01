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
      <div className="flex flex-col min-h-screen dark:bg-slate-800 dark:text-white bg-white text-black">
        <Navbar />

        <main className="w-screen pb-12">
          <Routes>
            {/* route rendering: https://reactrouter.com/en/main/start/concepts#index-routes */}
              <Route path="/" element={<Home />} />
            
              <Route exact path="/tips" element={<Tips/>} />
              <Route path="/tips/*" element={<Tips/>} />
              {/* <Route path="/tips/cityentry" element={<Cityentry />} />
              <Route path="/tips/startingbudget" element={<StartingBudget />} /> */}

              <Route path="/*" element={<NotFound />}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
