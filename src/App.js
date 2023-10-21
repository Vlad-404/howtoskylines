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
// import Tipwindow from './components/layout/Tipwindow';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen dark:bg-slate-800 dark:text-white bg-white text-black">
        <Navbar />

        <main className="w-screen pb-12">
          <Routes>
            {/* route rendering: https://reactrouter.com/en/main/start/concepts#index-routes */}
              {/* <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="tips" element={<Tips/>} >
                      <Route path="cityentry" element={<Cityentry />} />
                      <Route path="startingbudget" element={<StartingBudget />} />
                      <Route index element={<Tipwindow />} />
                  </Route>
              </Route> */}
                
              {/* conditional rendering*/}
              <Route index element={<Home />} />
                <Route path="tips" element={<Tips />}/>
                <Route path="tips/*" element={<Tips />}/>
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
