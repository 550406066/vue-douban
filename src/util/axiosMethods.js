import axios from 'axios'
import {Toast} from 'vant'
axios.defaults.timeout = 5000
// http请求拦截器


export function Get(url, data) {
      return new Promise((resolve, reject) => {
        axios.get(url, {
          params: data
        }).then((res) => {
          if (res) {
            //成功回调
            resolve(res);
          }
        }).catch((error) => {
          reject(error);
        })
      })
    }
    export function  Post(url, data) {
      return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        }).then((res) => {
          if (res) {
            //成功回调
            resolve(res);
          }
        }).catch((error) => {
          reject(error);
        })
      })
    }
