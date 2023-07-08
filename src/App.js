import Header from './components/Header';
import Footer from './components/Footer';
import {Container, Carousel} from 'react-bootstrap'
import {BrowserRouter as Router,Routes,  Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import {useEffect, useState} from 'react'
import Loader from './components/Loader';
import Apply from './Pages/Apply';
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);


  }, []);


  return (
    <Container fluid>

      
      {loading ? (
        <Loader />
      ) : (
       
        <Router>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/about" element={<About />} />
              <Route
               
                path="/services"
                element={<Services />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply" element={<Apply />} />
            </Routes>
         
          <Footer />
          <a
              href="https://wa.me/2348082328425"
              target="_blank"
              rel="noreferrer"
            >
          <div className="whatsapp text-center">
            
             <i class="fa-brands fa-2x fa-square-whatsapp fa-whatsapp2"></i>
           
            <br />
            <b className='chat'>Live Chat</b>
          </div>
          </a>
        </Router>
        
      )}
    </Container>
  );
}

export default App;
