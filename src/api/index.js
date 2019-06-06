// 只展示数据接口
import axios from './axios'
import jsonp from 'jsonp'

export const LOGIN =  async (data) => {
  const res = await axios.post('/login', data)
  
  return res.data

}

// 获取天气接口
export const api_get_weather = async data => {
  return new Promise( (resolve,reject) => {
    try {
      jsonp(
        `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(data)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`,
        'callback',(err, res)=>{
        if(res.status === 'success') {
          resolve(res)
        }else{
          reject(err)
        }
      })
    } catch (error) {
      console.log(error)
    }
    
  })
  
}