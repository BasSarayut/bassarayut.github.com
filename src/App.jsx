import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import WIPBadge from './components/WIPBadge'
import Home from './pages/Home'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <WIPBadge />
        <BackToTop />
      </Router>
    </HelmetProvider>
  )
}

export default App
