import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Home from './components/home'
import StudentDetails from './container/studentDetails'
import NotFound from './components/notFound'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reducers from './reducers'
import promiseMW from 'redux-promise'
import { Navbar, Nav } from 'react-bootstrap'

const createStoreWithMW = applyMiddleware(promiseMW)(createStore)
const App = () => {
  return (
    <Provider store={createStoreWithMW(reducers)}>
      <BrowserRouter>
        <Navbar expand="lg">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-2 ml-2">
              <Link className="text-light ml-3 " to="/">
                Home
              </Link>
              <Link className="text-light ml-3" to="/students/1">
                StudentDetails
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/students/:id" component={StudentDetails} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}
export default App
