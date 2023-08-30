import { BrowserRouter as Router} from "react-router-dom";
import store from './store'
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import Category from "containers/pages/category";
import Search from "containers/pages/search";
import Postdetail from "containers/pages/postdetail";
import Contact from "containers/pages/contact";
import Blog from "containers/pages/blog";
import Careers from "containers/pages/carrers";
import About from "containers/pages/about";
import Services from "containers/pages/services";
import Cases from "containers/pages/cases";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/home";
import OptIn from "containers/pages/optIn";
import OptInCTA from "containers/pages/optInCTA";
import Ecommerce from "containers/pages/cases/Ecommerce";
import JavascriptDev from "containers/pages/services/development/JavascriptDev";


function App() {
  // const location = useLocation();
  return (
    <HelmetProvider>
      <Helmet>
        <title>MEPER | Software Agency</title>
        <meta name="description" content="Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones." />
        <meta name="keywords" content='agencia de software, agencia de marketing, creacion de pagina web' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://www.meper.com/" />
        <meta name="author" content='Matias Pereiro' />
        <meta name="publisher" content='Matias Pereiro' />

        {/* Social Media Tags */}
        <meta property="og:title" content='MEPER | Software Agency' />
        <meta property="og:description" content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.' />
        <meta property="og:url" content="https://www.meper.com/" />
        <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

        <meta name="twitter:title" content='MEPER | Software Agency' />
        <meta
            name="twitter:description"
            content='Agencia de software y marketing digital. Servicios de creacion de pagina web y desarrollo de aplicaciones.'
        />
        <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Provider store={store}>
        <Router>
          <AnimatePresence initial={false}>
            <Routes>
                {/* Error display */}
                <Route path="*" element={<Error404/>}/>

                {/* Home display */}
                <Route path="/" element={<Home />} />
                <Route path="/cases" exact element={<Cases />}/>
                <Route path="/cases/ecommerce" element={<Ecommerce />} />
                <Route path="/services" element={<Services />}/>
                <Route path="/services/javascript" element={<JavascriptDev />} />
                <Route path="/about" element={<About />}/>
                <Route path="/careers" element={<Careers />}/>
                <Route path="/blog" element={<Blog />}/>
                <Route path="/blog/:slug" element={<Postdetail />} />
                <Route path="/s/:term" element={<Search />} />
                <Route path="/category/:slug" element={<Category />}/>
                <Route path="/contact" element={<Contact />} />
                <Route path="/ebook" element={<OptIn />} />
                <Route path="/ebook/training" element={<OptInCTA />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </Provider>
    </HelmetProvider>

  );
}

export default App;
