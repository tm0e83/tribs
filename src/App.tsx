import styles from './App.module.css'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import StartPage from './pages/StartPage';
const Imprint = lazy(() => import('./pages/Imprint'));
const Privacy = lazy(() => import('./pages/Privacy'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>   
      <footer>
        <div className={styles.footerContent}>
          <span><Link to="/privacy">Datenschutz</Link></span>
          <span><Link to="/imprint">Impressum</Link></span>
        </div>
      </footer>         
    </>
  )
}

export default App
