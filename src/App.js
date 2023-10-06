import './App.css';
import Skills from './compounent/Skills'; 
import About from './compounent/About'; 
import Education from './compounent/Eductation'; 
import WorkExperience from './compounent/WorkExprance'; 
import Home from './compounent/Home'; 
import FileList from './compounent/FileList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/" element={<Home />} />
          <Route path='/FileList' element={<FileList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;