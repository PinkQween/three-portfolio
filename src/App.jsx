import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Hanna Skairipa - Full Stack Web and Mobile Developer Portfolio" />
      <meta name="keywords" content="web development, mobile development, full stack developer, portfolio" />
      <meta name="author" content="Hanna Skairipa" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hannaskairipa.com" />
      <meta property="og:title" content="Hanna Skairipa | Developer Portfolio" />
      <meta property="og:description" content="Explore the portfolio of Hanna Skairipa, a full-stack web and mobile developer." />
      <meta property="og:image" content="https://hannaskairipa.com/full-logo.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hannaskairipa.com" />
      <meta property="twitter:title" content="Hanna Skairipa - Developer Portfolio" />
      <meta property="twitter:description" content="Explore the portfolio of Hanna Skairipa, a full-stack web and mobile developer." />
      <meta property="twitter:image" content="https://hannaskairipa.com/full-logo.jpg" />
    </Helmet>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
