
import './App.css';
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom"
import Home from './Pages/Home';
import Cursos from './Pages/Cursos';
import About from './Pages/About';

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/cursos"> Cursos </Link>
          <Link to="/about"> About </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cursos/:idCurso" element={<Cursos/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
