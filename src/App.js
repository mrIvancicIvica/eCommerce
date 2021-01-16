import React from "react";
import Homepage from "./pages/HomePage/Homepage.component";
import ShopPage from "./pages/Shop/Shop.component";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
