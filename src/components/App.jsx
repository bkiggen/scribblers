import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ArticleContainer from './ArticleContainer';
import Politics from './Politics';
import Originals from './Originals';
import Technology from './Technology';
import Identity from './Identity';
import Culture from './Culture';
import Arts from './Arts';
import Interviews from './Interviews';
import Sports from './Sports';
import Editorial from './Editorial';
import Header from './Header';


function App(){

  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={ArticleContainer} />
        <Route exact path="/Politics" component={Politics} />
        <Route exact path="/Originals" component={Originals} />
        <Route exact path="/Technology" component={Technology} />
        <Route exact path="/Identity" component={Identity} />
        <Route exact path="/Culture" component={Culture} />
        <Route exact path="/Arts" component={Arts} />
        <Route exact path="/Interviews" component={Interviews} />
        <Route exact path="/Sports" component={Sports} />
        <Route exact path="/Editorial" component={Editorial} />
      </Switch>
    </div>
  );

}

export default App;
