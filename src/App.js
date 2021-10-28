import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route } from "react-router-dom";
import ScrollToTop from './scrollToTop';
import WorldCitizen from './Components/World-Citizen';
import Examinar from './Components/Examinar';
import Recreations from './Components/Recreations';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Route path="/" exact component={Home} />
      <Route path="/world-citizen" component={WorldCitizen} />
      <Route path="/examinar" component={Examinar} />
      <Route path="/recreations" component={Recreations} />
    </BrowserRouter>
  );
}

export default App;