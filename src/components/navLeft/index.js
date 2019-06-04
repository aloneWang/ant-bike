import React, { Component, Fragment } from 'react'
import { Menu, Icon } from 'antd'
import MenuConfig from '@/resource/menu'

import './index.less'


class NavLeft extends Component {
  state = {
    menuNode:''
  }
  componentDidMount(){
    const menuNode = this.renderMenu(MenuConfig)
    this.setState({
      menuNode
    })
  }
  renderMenu(node) {

    return node.map( item => {
      if(item.children) {
        return (
          <Menu.SubMenu key={ item.key } title={ item.title }>
            {this.renderMenu(item.children)}
          </Menu.SubMenu>
        )
      }
      return (<Menu.Item key={ item.key } title={ item.title }> { item.title }</Menu.Item>)
    })
  }
  handleSelectedMenuItem(){}
  handleChangeMenu(){}
  render() {
    return (
      <Fragment>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu 
           onSelect={this.handleSelectedMenuItem}
           onClick={this.handleChangeMenu}
           theme='dark'>
          {this.state.menuNode}
        </Menu>
      </Fragment>
    )
  }
}

export default NavLeft