import React,{ Component } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'

import Admin from '@/admin'
import { Login } from '@/asyncLoading'
import Loading from '@/components/loading'
import Home from '@/views/home'
import { connect } from 'react-redux';

class Router extends Component {
  render() {
    const isLoading = this.props.isLoading
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component= { Login }/>
          <Route path="/" render= { () =>  (
            <Admin>
              <Switch>
                <Route path="/home" component= { Home } />
                <Redirect to='/home' />
              </Switch>
            </Admin>
          )} />

        </Switch>   
      </BrowserRouter>
    )
  }
}

const mapState = (state) => ({
  isLoading: state.isLoading
})
export default connect(mapState,null)(Router)