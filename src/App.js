import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

//import './App.scss';

import Home from './pages/home';
import About from './pages/about';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<p>ERROR 404</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
