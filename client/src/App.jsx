import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/home/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Trails from './pages/trails/Trails'
import TrailDetail from './pages/trails/TrailDetail'

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
            <Route path="/trails" element={<Trails />} />
            <Route path="/trails/:slug" element={<TrailDetail />} />
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}