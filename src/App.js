import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import HiraganaLayout from './components/HiraganaLayout';
import KatakanaLayout from './components/KatakanaLayout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          
          <Route
            path='hira-chars/:groupId'
            element={<HiraganaLayout />}
          />
          
          <Route 
            path='kata-chars/:groupId'
            element={<KatakanaLayout />}
          />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
