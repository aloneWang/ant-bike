import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Card, Form, Input, Button, message, Icon, Checkbox, } from 'antd'
import { setToken } from '@/store/actionCreate'
import * as actionType from '@/store/actionType'
import { apiLogin } from '@/api'

import './login.scss'
class Login extends Component {
  checkLogin(e) {
    e.preventDefault()
    const dispatch = this.props.dispatch
    const userInfo = this.props.form.getFieldsValue()

    this.props.form.validateFields(async (err) => {
      if (!err) {
          const res = await apiLogin()

          dispatch(setToken(res.result.data.token))
      }
    })

  }
  render() {
    const { getFieldDecorator } = this.props.form
    const token = this.props.token
    // const token = localStorage.getItem('token')
    if (token) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className='login-page'>
        <header className='login-header'>
          <div className='login-logo'>
            <img src="/assets/logo-ant.svg" alt="共享单车后台管理系统" />
            React+AntD后台管理系统
              </div>
        </header>
        <div className='login-content-wrap'>
          <div className='login-content'>
            <div className='word'>
              共享出行
                  <br></br>
              引领城市新经济
                </div>
            <div className='login-box' >
              <div className='title'>
                欢迎你，请先登录
                  </div>
              <Card>
                <Form>
                  <Form.Item>
                    {
                      getFieldDecorator('userName', {
                        rules: [
                          { required: true, message: '用户名不能为空' },
                          { min: 6, max: 16, message: '字符长度要在6-16位' },
                          {/*  
                                new RegExp(pattern,modifiers); 
                                var patt=/pattern/modifiers;
                              */},
                          { pattern: new RegExp('^\\w+$', 'g'), message: '用户名必须为字母或者数字' }
                        ]
                      })(<Input prefix={<Icon type='user' />} placeholder='请输入用户名' />)
                    }
                  </Form.Item>
                  <Form.Item>
                    {
                      getFieldDecorator('paw', {
                        rules: [
                          { required: true, message: '密码不能空' },
                        ]
                      })(<Input type='password' prefix={<Icon type="lock" />} placeholder="请输入你的密码" />)
                    }
                  </Form.Item>
                  <Form.Item>
                    {
                      getFieldDecorator('rember', {
                        valuePropName: 'checked',
                        initialValue: false
                      })(<Checkbox>记住密码</Checkbox>)
                    }
                    <a href="#/login" style={{ float: 'right' }}>忘记密码</a>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" block onClick={(e) => { this.checkLogin(e) }}>登陆</Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  token: state.token
})
export default connect(mapState, null)(Form.create()(Login))