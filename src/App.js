import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import VideoDes from './pages/VideoDes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<VideoDes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
