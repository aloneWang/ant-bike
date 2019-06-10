import React, { Component, Fragment } from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import MenuConfig from '@/resource/menu'
import { selctMenu } from '@/store/actionCreate'

import './index.less'


class NavLeft extends Component {
  state = {
    menuNode:'',
    // currentKey:window.location.pathname
  }
  componentWillMount(){
    const menuNode = this.renderMenu(MenuConfig)
    this.setState({
      menuNode,
    })
  }
  // componentWillUpdate(){
  //   console.log(111222)
  //   this.state.currentKey = window.location.pathname
    
  // }
  renderMenu(node) {

    return node.map( item => {
      if(item.children) {
        return (
          <Menu.SubMenu key={ item.key } title={ item.title }>
            {this.renderMenu(item.children)}
          </Menu.SubMenu>
        )
      }
      return (<Menu.Item key={ item.key } title={ item.title }>
          <NavLink to={ item.key }>
            { item.title }
          </NavLink>
         </Menu.Item>)
    })
  }
  _selectMenu(item){
    const { dispatch } = this.props
    console.log(item)
    dispatch(selctMenu({
      title:item.item.props.title,
      key: item.keyPath
    }))

  }
  render() {
    const { currentKey } = this.props
    console.log(currentKey)
    return (
      <Fragment>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>Imooc MS</h1>
        </div>
        <Menu 
          selectedKeys={currentKey}
          onSelect={ item => this._selectMenu(item)}
          theme='dark'>
          {this.state.menuNode}
        </Menu>
      </Fragment>
    )
  }
}
const mapState = state =>({
  currentKey: state.key || [window.location.pathname]
})

export default connect(mapState,null)(NavLeft)