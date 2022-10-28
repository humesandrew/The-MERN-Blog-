import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import pages and components//
import Home from './pages/Home';
import NavBar from './components/navbar/NavBar';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* // everything to do with browser router needs to be inside this // */}
      <NavBar />
        <div className="pages">
          <Routes>
          <Route 
            path="/"
            element={<Home />}>
          </Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
