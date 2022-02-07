import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Article from '../Article';
import Header from '../Header';
import Home from '../Home';
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/t/:slug/:article_id" element={<Article />} />
          <Route path="*" element={<p>404 :(</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
