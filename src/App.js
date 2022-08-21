import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Modules/Home';
import FourOhFour from './Modules/FourOhFour';
import Skills from './Modules/Skills';
import Projects from './Modules/Projects';
import Contact from './Modules/Contact';
import { randomIntFromInterval } from './utils/commonHelpers';

const RedirectHoc = props => {
  const { location: { search } } = props;
  if (search) {
    const [,redirectPageUrl] = search.split('p=');
    if (redirectPageUrl) {
      return <Redirect to={redirectPageUrl} />;
    }
  }
  return <Route exact path="/" component={Home} />;
};

const coolColors = [
  '#F0F8FF',
  '#FAEBD7',
  '#F0FFFF', 
  '#FFEBCD',
  '#FFFFF0',
  '#FFFAFA',  
  '#F5DEB3',
  '#FFFFFF',
]

function App() {

  useEffect(() => {
    document.body.style.backgroundColor = coolColors[randomIntFromInterval(0, coolColors.length)];
  },[])
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Switch>
        <RedirectHoc exact path="/" component={Home} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={FourOhFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
