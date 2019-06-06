import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd' 
import Router from './router'
import { Redirect, withRouter } from 'react-router-dom'

import Header from '@/components/header'
import NavLeft from '@/components/navLeft'
import Footer from '@/components/footer'
import '@/assets/css/common.less'





class Admin extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const token = this.props.token
    if(token){
      return (
        <Row className='container'>
          <Col span={4} className='nav-left'>
              <NavLeft />
          </Col>
          <Col span={20} className='main'>
              <Header />
              <Row className='content'>
                  {this.props.children}
              </Row>
              <Footer />
          </Col>
      </Row>
      )
    }else{
      return(
        <Redirect to="/login"/>
      )
      
    }
      
  }
}

const mapState = (state) => ({
  token: state.token
})
export default connect(mapState,null)(Admin)