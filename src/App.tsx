
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/routes/HomePage';
//import About from '../src/routes/About';
import {PhotographyPage} from '../src/routes/PhotographyPage';
import Navigation from './components/Navigation';
import Footer from "./components/Footer"
import Projects from './routes/Projects';


function App() {


  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={""} />
      </Routes>
      <section>
      <Footer/>
      </section>
    </Router>
  );
}

export default App;


