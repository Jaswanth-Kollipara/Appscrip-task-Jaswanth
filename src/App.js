import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Appscrip-task-Jaswanth.io/" component={Home} />
    <Route exact path="/Appscrip-task-Jaswanth.io/Appscrip-task-Jaswanth/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App