import axios from 'axios'

const service =axios.create({
  // https://github.com/Hacker-C/mall.git
  baseURL:'http://152.136.185.210:7878/api/hy66',
  timeout:5000
})

service.interceptors.request.use(config=>{
  return config
},err=>{
  console.log(err);
  return new Promise.reject(err)
})

service.interceptors.response.use(response=>{
  return response.data
},err=>{
  console.log(err);
  return new Promise.reject(err)
})

export default service
