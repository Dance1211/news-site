import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from '@context/User';

import Header from '@components/Header';
import Home from '@components/pages/Home';
import Topics from '@components/pages/Topics';
import SingleTopic from '@components/pages/SingleTopic';
import Article from '@components/pages/Article';
import Error from '@components/Error';
import Footer from '@components/Footer';
import './styles.css';

function App() {

  // REMEMBER TO CHANGE THIS TO NULL. ONLY FOR TESTING
  const [user, setUser] = useState({
    username: "tickle122",
    avatar_url: "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    name: "Tom Tickle"
  });

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
