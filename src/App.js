
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './component/Contact';
import Cv from './component/Cv';
import About from './component/About';
import Service from './component/Service';

// import Footer from './component/Footer';



function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element= {<Home/>}/>
      <Route exact path="/contacts" element= {< Contact/>}/>
      <Route exact path="/cv" element= {<Cv/>}/>
      <Route exact path="/about" element= {<About/>}/>
      <Route exact path="/service" element= {<Service/>}/>
      {/* <Route path="/Project" element= {< Project/>}/> */}
      
     
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
    
    </>
  );
}

export default App;
