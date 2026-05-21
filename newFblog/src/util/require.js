import axios from 'axios';
// import Config from '../settings'
// import router from '../router/index';
// import {Message} from 'element-ui'
// let projectName = process.env.PROJECT_NAME
const service = axios.create({
    baseURL: 'http://106.15.109.72:8090',
    timeout:  1200000
});
// service.interceptors.request.use(
//     config => {
//         const data = localStorage.getItem("user");
//         const user = JSON.parse(data)
//         if (null != user) {
//             config.headers.token = 'sdsdsd';
//         }
//         config.headers['Content-Type'] = 'application/json'    
//         return config;
//     },
   
// );

// service.interceptors.response.use(
//     response => {
//         if (response.status === 200) {
//             if (response.data.code === '9001') {
//                 // router.push('/login')
//                 // router.currentRoute.meta.type = 1
//             } else {
//                 return response.data
//             }
//         } else {
//             Promise.reject();
//         }
//     },
  

// );
export default service;
