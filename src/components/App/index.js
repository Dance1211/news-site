import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../../context/User';
import Header from '../Header';
import Home from '../pages/Home';
import Article from '../pages/Article';
import Error from '../Error';
import Footer from '../Footer';
import './styles.css';
import { useState } from 'react';
import SingleTopic from '../pages/SingleTopic';
import Topics from '../pages/Topics';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/t" element={<Topics />} />
            <Route path="/t/:slug" element={<SingleTopic />} />
            <Route path="/t/:slug/:article_id" element={<Article />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
