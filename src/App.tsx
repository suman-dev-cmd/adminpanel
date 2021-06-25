import React from "react";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Siderbar from './components/layouts/Sidebar';
import Header from "./components/layouts/Header";
import Home from "./views/Home";
import Product from "./views/Product";
import AddProduct from "./components/products/AddProduct";
import Performance from "./views/Performance";
import Deleverable from "./views/Deleverable";
import Inventory from "./views/Inventory";
import Invoice from "./views/Invoice";
import Settings from "./views/Settings";
const App:React.FC = () => {
  return(
  <>
    <Router>
        <Siderbar />
        <Header />
        <Route path='/'  component={Home} exact/>
        <Route path='/product'  component={Product} exact/>
        <Route path='/addproduct'  component={AddProduct} exact/>
        <Route path='/performance'  component={Performance} exact/>
        <Route path='/deliverables'  component={Deleverable} exact/>
        <Route path='/invoice'  component={Inventory} exact/>
        <Route path='/inventory'  component={Invoice} exact/>
        <Route path='/settings'  component={Settings} exact/>
    </Router>
  </>
  );
}

export default App;