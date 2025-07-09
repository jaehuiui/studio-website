import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Blog from './pages/Blog'
import Clivy from './pages/Clivy'
import Home from './pages/Home'
import Resume from './pages/Resume'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Resume />} path="/resume" />
        <Route element={<Clivy />} path="/clivy" />
      </Routes>
    </Router>
  )
}

export default App
