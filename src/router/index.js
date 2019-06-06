import React,{ Component } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Admin from '@/admin'
import { Login } from '@/asyncLoading'
import Home from '@/views/home'
import FormLogin from '@/views/form/login'
import FormRegister from '@/views/form/register'
// import Buttons from '@/views/ui/buttons'
// import Modals from '@/views/ui/modals'
import UI from '@/views/ui/'
const { Buttons, Modals, Loading, Notification, Message, Tab, Gallery,Carousels } = UI

class Router extends Component {
  render() {
    // const isLoading = this.props.isLoading
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component= { Login }/>
          <Route path="/" render= { () =>  (
            <Admin>
              <Switch>
                <Route path="/home" component= { Home } />
                <Route path="/ui/buttons" component={ Buttons }/>
                <Route path= "/ui/modals" component={ Modals } />
                <Route path="/ui/loading" component = {Loading} />
                <Route path="/ui/notification" component= { Notification} />
                <Route path="/ui/messages" component = { Message } />
                <Route path="/ui/tabs" component = { Tab } />
                <Route path= "/ui/gallery" component={Gallery} />
                <Route path="/ui/carousel" component={ Carousels } />
                <Route path= "/form/login" component={ FormLogin } />
                <Route path= "/form/reg" component={ FormRegister } />
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