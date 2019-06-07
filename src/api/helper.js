
import axios from './axios'
import jsonp from 'jsonp'

export function  Get(url) {  
  return async (params = {} )=>{
    try {
      const res = await axios({
        url,
        params,
        method:'get',
      })
      return res.data
    } catch (error) {
      console.error(error);
    }
   
  }
}

export function Post(url) {
  return async (params = {} ) => {
    try {
      const res = await axios.post(url,params)
      return res.data
    } catch (error) {
      console.error(error)
    }
  }

}

export function Jsonp(url) {
  
 return new Promise( (resolve,reject) => {

  jsonp(url,'callback',(err,res)=>{
    if(res.status === 'success') {
      resolve(res)
    }else{
      reject(err)
    }
  })
 })

}