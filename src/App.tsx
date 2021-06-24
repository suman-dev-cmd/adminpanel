import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Siderbar from './components/layouts/Sidebar';
import Header from "./components/layouts/Header";
import Home from "./views/Home";
import Product from "./views/Product";
const App:React.FC = () => {
  return(
  <>
    <Router>
        <Siderbar />
        <Header />
        <Route path='/'  component={Home} exact/>
        <Route path='/product'  component={Product} exact/>
    </Router>
  </>
  );
}

export default App;