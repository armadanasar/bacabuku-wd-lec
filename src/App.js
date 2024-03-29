import React from 'react'
import './App.css'
import Login from './components/Login'
import { Route, Redirect, Switch } from 'react-router-dom'
import ProtectedRoute from './components/common/ProtectedRoute'
import PageHeader from './components/common/PageHeader'
import PageFooter from './components/common/PageFooter'
import { Container } from '@material-ui/core'
import Register from './components/Register'
import Logout from './components/Logout'
import BookItem from './components/common/BookItem'
import BooksList from './components/BooksList'
import ReadBook from './components/ReadBook'

const Placeholder = ({ text }) => {
  return <h1>{text}</h1>
}

const styles = {
  marginTop: '16dp'
}

function App() {
  return (
    <div>
      <header>
        <PageHeader />
      </header>

      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute path="/books" component={BooksList} />
        <ProtectedRoute path="/book/:bookId" component={ReadBook} />
        <Route
          path="/not-found"
          component={props => <Placeholder text="not found 404" />}
        />
        <Redirect from="/" exact to="/login" />
        <Redirect to="/not-found" />
      </Switch>
      <footer>
        <PageFooter />
      </footer>
    </div>
    // <SignIn />
  )
}

export default App
