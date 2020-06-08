import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Home,About,Contact} from './Routing/route-component';
import {BrowserRouter,Route} from 'react-router-dom';
import Navigator from './Routing/navigator';



const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BrowserRouter>
                    <Navigator />
                    <Route path="/" exact component={Home} />
                    <Route path="/aboutus" component={About} />
                    <Route path="/contactus" component={Contact} />
        </BrowserRouter>
      </header>
      {/* <form onSubmit={this.handleSubmit}>
      
      </form> */}
    </div>
  );
}

export default App;
