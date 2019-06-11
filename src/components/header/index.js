import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Modal } from 'antd'
import moment from 'moment'
import { setToken } from '@/store/actionCreate'
import MenuConfig from '@/resource/menu'
import { apiGetWeather } from '@/api'
import './index.less'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:'aloneWang',
      city:'合肥',
      weather_data:'',
      timer: null,
      title: ''
    }
  }
  handleLogout(type) {
    const { dispatch } = this.props
    Modal[type]({
      title:'提示',
      content:'你确定要退出吗',
      onOk:()=>{
        // localStorage.removeItem('token');
        // localStorage存的值得类型都是string类型
        dispatch(setToken(''))
      }
    })
  }
  componentWillUpdate(){
    this.checkTitle(MenuConfig)
  }
  checkTitle(menu){
    const pathname = window.location.pathname

    return menu.forEach(item => {
     if(item.children){
       return this.checkTitle(item.children)
     }else{
      //  item.key === pathname && this.setState({title:item.title}) 
      item.key === pathname && ( this.state.title = item.title)
      
     }
    })
  }
  async getWeather() {
    let city = this.state.city
    const res =   await apiGetWeather(city)
    this.setState({
      weather_data: res.results[0].weather_data[0]
    })
  }

  componentWillMount() {
    this.state.timer = setInterval(() => {
      let timeNow = moment().format('YYYY MM Do, h:mm:ss a')
      this.setState({
        timeNow
      })
    }, 1000);
    this.checkTitle(MenuConfig)
    this.getWeather()
  }
  componentWillUnmount(){
    //组件销毁后
    // this.state = null
    console.log("即将销毁")
    clearInterval(this.state.timer)
  }
  render(){

    return(
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
              <span>欢迎，{this.state.userName}</span>
              <a onClick={() => { this.handleLogout('confirm') }}>
                  退出
              </a>
          </Col>
        </Row>
        <Row className='breadcrumb'>
            <Col span={4} className='breadcrumb-title'>
                { this.state.title}
            </Col>
            <Col span={20} className='weather'>
                <span className='date'>{ this.state.timeNow }</span>
                <span className='weather-detail'>
                    { this.state.city }
                </span>
                {
                  this.state.weather_data && (
                    <div>
                      <span className='weather-img'>
                        <img src={ this.state.weather_data.dayPictureUrl } alt='天气图片' />
                      </span>
                      <span className='weather-detail'>
                          { this.state.weather_data.weather+'/'+ this.state.weather_data.temperature} 
                      </span>
                  </div>
                  )
                }
                
            </Col>
        </Row>
      </div>
    )
  }
}

const mapState = state => ({
  title: state.title
})
export default connect(mapState,null)(Header)