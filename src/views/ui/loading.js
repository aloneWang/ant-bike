import React, { Component } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'

class Loading extends Component {
  render() {
    const antIcon = <Icon type="loading" spin />
    return (
      <div>
        <Card title='Spin用法' className='card-wrap' >
          <Spin size='small' />
          <Spin style={{ margin: '0 10px' }} />
          <Spin size='large' />
          <Spin indicator={antIcon} size='large' style={{ margin: '0 10px' }} />
        </Card>
        <Card title='内容遮罩' className='card-wrap' >
          <Alert
            message='React'
            type='info'
            description='欢迎学习React课程'
          />
          <Spin>
            <Alert
              message='React'
              type='success'
              description='欢迎学习React课程2'
            />
          </Spin>
          <Spin tip='加载中...' indicator={antIcon}>
            <Alert
              message='React'
              type='error'
              description='欢迎学习React课程3'
            />
          </Spin>
        </Card>
      </div>
    )
  }

}

export default Loading