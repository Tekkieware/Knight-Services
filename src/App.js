import Header from './components/Header';
import Footer from './components/Footer';
import {Container, Image} from 'react-bootstrap'
import {BrowserRouter as Router,Routes,  Route} from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import {useEffect, useState} from 'react'
import logo from './Logosmall.png'
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
    {loading ? (
      <div className="loader-container">
        <Image width={40} src={logo} />
      </div>
    ) : (
    <Router>
    <Container>
 
      <Header />
      <main>
        <Routes>
      <Route title={'Home'} path="/" element={<Home />} exact />
      <Route title={'About Us'} path="/about" element={<About />} />
      <Route title={'Out Services'} path="/services" element={<Services />} />
      <Route title={'Contact'} path="/contact" element={<Contact />} />
      </Routes>
      </main>
      <Footer />

    </Container>
    
    </Router>
    )}
    </div>
  );
}

export default App;
