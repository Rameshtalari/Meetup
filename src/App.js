import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import Register from './Components/Register'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
