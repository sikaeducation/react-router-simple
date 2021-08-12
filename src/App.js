import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import AppHeader from "./components/AppHeader"
import AppFooter from "./components/AppFooter"
import AboutView from "./views/AboutView"
import ProductView from "./views/ProductView"

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route path="/about">
            <AboutView />
          </Route>
          <Route path="/products">
            <ProductView />
          </Route>
          <Route path="/">
            <ProductView />
          </Route>
        </Switch>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
