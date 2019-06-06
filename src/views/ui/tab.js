import React, { Component } from 'react'
import { Card, Tabs, message, Icon } from 'antd'

const TabPane = Tabs.TabPane
class Tab extends Component {
  componentWillMount(){
    this.tabIndex = 0 ;
    const panes = [
      {
        title: 'Tab 1',
        content: '欢迎学习React',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: '欢迎学习Antd',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'React是MV*框架之一',
        key: '3'
      }
    ]
    this.setState({
      panes
    })
  }
  handleCallback(key) {
    message['info'](`您选择第${key}个标签`)
  }
  
  Edit = (targetKey, action) => {
    // console.log(targetKey,action)
    this[action](targetKey)
  }
  remove(targetKey) {
    const panes = this.state.panes
    let index = panes.findIndex( item => {
      return  item.key == targetKey
    })
    panes.splice(index,1)
    this.setState({
      panes
    })
  }
  add(){
    const panes = this.state.panes
    const activeKey = `新标签Tab ${this.tabIndex++}`
    panes.push({
      title: activeKey ,
      content:'欢迎学习Antd',
      key: activeKey
    })
    this.setState({
      panes
    })
  }
  render() {
    return (
      <div>
        <Card title="Tab标签页" className='card-wrap'>
          <Tabs defaultActiveKey="1" onChange={(key) => this.handleCallback(key)}>
            <TabPane tab='Tab 1' key='1'>欢迎学习React</TabPane>
            <TabPane tab='Tab 2' key='2' disabled>欢迎学习Antd</TabPane>
            <TabPane tab='Tab 3' key='3'>React是MV*框架之一</TabPane>
            <TabPane tab='Tab 4' key='4'><div>nice 啊 大大大萨德</div></TabPane>
          </Tabs>
        </Card>

        <Card
          title='Tab带图标的页签'
          className='card-wrap'>
          <Tabs defaultActiveKey="1" onChange={(key) => this.handleCallback(key)}>
            <TabPane tab={<span><Icon type='plus' />Tab 1</span>} key='1'>欢迎学习React</TabPane>
            <TabPane tab={<span><Icon type='edit' />Tab 2</span>} key='2'>欢迎学习Antd</TabPane>
            <TabPane tab={<span><Icon type='delete' />Tab 3</span>} key='3'>React是MV*框架之一</TabPane>
          </Tabs>
        </Card>

        <Card
          title='Tab可编辑的页签'
          className='card-wrap'>
          <Tabs 
            defaultActiveKey="1" 
            type="editable-card"
            onEdit={ this.Edit }
            onChange={(key) => this.handleCallback(key)}>
            {
              this.state.panes.map( item => {
                return(
                  <TabPane tab={ item.title} key={ item.key}>{ item.content}</TabPane>
                )
              })
            }
          </Tabs>
        </Card>
      </div>
    )
  }
}

export default Tab