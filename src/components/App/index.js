import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>404 :(</p>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
