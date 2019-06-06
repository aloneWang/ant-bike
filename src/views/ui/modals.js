import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
// import './ui.less'

class Modals extends Component {
  state = {
    showModal: false
  }
  handleOpen() {
    this.setState({
      showModal:true
    })
  }
  handleConfirm(type) {
    Modal[type]({
      title:type,
      content: '你确定你学会了React吗？',
      onCancel(){
        console.log('取消')
      }
    })
  }
  render() {
    return(
      <div>
        <Card className='card-wrap' title="基础模态框">
          <Button type='primary' onClick={() => { this.handleOpen() }}>Open</Button>
          <Button type='primary' onClick={() => { this.handleOpen() }}>自定义页脚</Button>
          <Button type='primary' onClick={() => { this.handleOpen() }}>顶部20px弹窗</Button>
          <Button type='primary' onClick={() => { this.handleOpen() }}>水平垂直居中</Button>
        </Card>
        <Card className='card-wrap' title="信息确认框">
          <Button type='primary' onClick={() => { this.handleConfirm('confirm') }}>Confirm</Button>
          <Button type='primary' onClick={() => { this.handleConfirm('info') }}>Info</Button>
          <Button type='primary' onClick={() => { this.handleConfirm('success') }}>Success</Button>
          <Button type='primary' onClick={() => { this.handleConfirm('error') }}>error</Button>
        </Card>
        <Modal 
          title="react" 
          visible={ this.state.showModal }
          onCancel = { () => this.setState({
            showModal:false
          })}
          onOk= { () => this.setState({showModal:false})}
          >
          <p>欢迎学习react</p>
        </Modal>
      </div>
    )
  }
}
export default Modals