import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Contact from './components/common/Contact';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Trails from './pages/trails/Trails'
import TrailDetail from './pages/trails/TrailDetail'
import Journal from './pages/journal/Journal';
import AddStory from './pages/journal/AddStory';
import TermsAndPolicy from './pages/TermsAndPolicy';

export default function App() {
  return (
    <BrowserRouter>
      {/* min-h-screen: Forces the container to be at least the height of the browser
        flex flex-col: Stacks Navbar, Main, and Footer vertically
      */}
      <div className="min-h-screen flex flex-col bg-stone-50">
        
        <Navbar />
        
        {/* flex-grow: Tells the main container to expand to fill all 
          available vertical space, pushing the footer to the bottom.
        */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/trails" element={<Trails />} />
            <Route path="/trails/:slug" element={<TrailDetail />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/add" element={<AddStory />} />
            <Route path="/terms-and-policy" element={<TermsAndPolicy />} />
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}