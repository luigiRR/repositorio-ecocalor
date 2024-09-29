import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Notfound from './pages/NotFound/Notfound';
import Services from './pages/Servicios/Services';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/services">
          <Services/>
        </Route>
        <Route exact path="/blog">
          <Blog/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route component={Notfound}/>
      </Switch>
    </Router>

  );
}

export default App;