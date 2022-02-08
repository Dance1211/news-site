import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../pages/Home';
import Article from '../pages/Article';
import Error from '../Error';
import Footer from '../Footer';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/t/:slug/:article_id" element={<Article />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
