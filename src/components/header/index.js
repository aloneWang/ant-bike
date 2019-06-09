import React, { Component } from 'react'
import { Row, Col } from 'antd'
import moment from 'moment'
import { apiGetWeather } from '@/api'
import './index.less'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:'aloneWang',
      city:'合肥',
      weather_data:{},
      timer: null
    }
  }
  handleLogout() {
    console.log("111111")
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
                djskjdksdsd
            </Col>
            <Col span={20} className='weather'>
                <span className='date'>{ this.state.timeNow }</span>
                <span className='weather-detail'>
                    { this.state.city }
                </span>
                <span className='weather-img'>
                    <img src={ this.state.weather_data.dayPictureUrl } alt='天气图片' />
                </span>
                <span className='weather-detail'>
                    { this.state.weather_data.weather+'/'+ this.state.weather_data.temperature} 
                </span>
            </Col>
        </Row>
      </div>
    )
  }
}

export default Header