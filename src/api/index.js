// 只展示数据接口
import { Post, Jsonp, Get } from "./helper";
// 登录
const apiLogin = Post('/login')

// 获取天气接口
const apiGetWeather = (city)=> Jsonp(`http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`)


const apiGetTableList = Get('/table/list')





export {
  apiLogin,
  apiGetWeather,
  apiGetTableList
}