import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Loginp from './components/Loginp'
import Forgotpassword from './components/Forgotpassword'
import Createnewaco from './components/Createnewaco'
function App() {
  return (

    <Router>
      <Switch>
        <Route excat path="/login" component={Loginp}/>
        <Route excat path="/forgotpassword" component={Forgotpassword}/>
        <Route excat path="/createnewaccount" component={Createnewaco}/>
      </Switch>
    </Router>
  )
}

export default App
