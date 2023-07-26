import './index.css'
import "aos/dist/aos.css";
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Videos from './pages/Videos.jsx'
import IndividualBlog from './components/IndividualBlog.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div style={{ width: '100%' }}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element = {<Home/>}/>
          <Route path = "/blog/*" element = {<Blog/>}/>
          <Route path="/blog/:slug" element={<IndividualBlog />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}                       

export default App
