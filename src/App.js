import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './assets/css/style.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path='/About' component={About} />
            <Route exact path='/react-powered-portfolio' component={Projects} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/contact' component={Contact} />
            <Route component={Projects}  />
          </Switch>
          <Footer />
        </>
      </Router>
    </div>
  );
}


export default App;
