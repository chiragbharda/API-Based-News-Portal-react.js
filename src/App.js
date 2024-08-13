import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const Homepage = lazy(() => import('./components/Homepage'));
const Business = lazy(() => import('./components/Business'));
const Categories = lazy(() => import('./components/Categories'));
const Notfound = lazy(() => import('./components/notfound'));
const Technology = lazy(() => import('./components/Technology'));
const World = lazy(() => import('./components/World'));
const Movies = lazy(() => import('./components/Movies'));
const Sport = lazy(() => import('./components/Sport'));
const Miscellaneous = lazy(() => import('./components/Miscellaneous'));
const Startup = lazy(() => import('./components/Startup'));
const Automobile = lazy(() => import('./components/Automobile'));
const Politics = lazy(() => import('./components/Politics'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/services' element={<Business />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/world' element={<World />} />
            <Route path='/technology' element={<Technology />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/automobile" element={<Automobile />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/sport" element={<Sport />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/miscellaneous" element={<Miscellaneous />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
