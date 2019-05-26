import React,{ Component } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

import { Login } from '@/asyncLoading'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path='/login' component={ Login } />
        </Switch>  
      </BrowserRouter>
    )
  }
}

export default Router