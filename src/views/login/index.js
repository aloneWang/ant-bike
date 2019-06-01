import React,{ Component } from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

import './login.scss'

class Login extends Component {
  
  render() {
    const { getFieldDecorator } = this.props.form
    return(
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
                    <Form style={{width:260}}>
                      <Form.Item>
                        {getFieldDecorator('userName', {
                            initiaValue:'',
                            rules:[
                              {
                                required: true,
                                message:'用户名不为空'
                              },{
                                pattern: new RegExp('^\\w+$','g'),
                                message:'用户名必须为字母或者数字'
                              }
                            ]
                          })(<Input prefix={<Icon type='user' />} placeholder='请输入用户名' />)
                        }
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

export default Form.create()(Login)