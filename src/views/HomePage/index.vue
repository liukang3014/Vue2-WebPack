<template>
  <div class="content">
    <h1 :data="message">{{ data }}</h1>
    <p class="teital">Vue.js 2 演示</p>
    <div v-for="(option, index) in messageArr" :key="index">
      <!-- 使用v-if只展示数字 -->
      <p v-if="isNumeric(option)">{{ uppercase(option) }}</p>
      <p v-else>{{ option }}</p>
    </div>
  </div>
</template>

<script>


import { PostRequest, GetRequest } from "@/api/index"


import {
  getCookie,
  setCookie,
  // removeCookie

} from '@/utils/Storage'

import {
  getStorage,
  setStorage,
  // removeStorage 

} from '@/utils/Storage'



import {
  setSessionStorage,
  getSessionStorage,
  // removeSessionStorage
} from '@/utils/Storage'



import {
  md5,
  sha256
} from '@/utils/Encrypt'


export default {
  name: 'HomePage',
  // 数据初始化
  data() {
    return {
      message: "页面初始数据",
      messageArr: []

    };
  },

  // 过滤器
  filters: {},

  // 计算属性
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    }
  },

  // 监听组件内部事件
  watch: {
    message(newValue, oldValue) {
      console.log("message 属性发生变化", newValue, oldValue);
    }
  },

  // 实例创建后
  created() {
    console.log("created 钩子被调用");
    //调用当前组件 methods 中定义的方法
    this.greet();


    const GetConfig = {
      id: 0,
      name: '张三'
    }

    const PostConfig = {
      id: 1,
      name: '李四'
    }
    //请求调用示例 - Promise 写法


    GetRequest(GetConfig).then(res => console.log(res)).catch(err => console.log(err))

    PostRequest(PostConfig).then(res => console.log(res)).catch(err => console.log(err))

    //请求调用示例 - async 写法

    //  async 函数 使用 try  catch  捕捉 Promise 类型函数执行结果
    async function get() {

      // 使用 await 等待 Promise 函数 GetRequest() 执行成功后打印 res

      try {
        const res = await GetRequest(GetConfig)

        // const res = await GetRequest(GetConfig)
        // const res = await GetRequest(GetConfig)
        // const res = await GetRequest(GetConfig)

        // 使用 await 等待 Promise 函数 GetRequest() 执行成功后打印 res 

        // 一个 async 函数中可捕捉多个 Promise 类型函数  全部执行成功 才算成功

        console.log(res);

      } catch (error) {

        // 请求失败打印错误
        console.log(error);

      }
    }

    //调用
    get()


    async function post() {

      try {
        const res = await PostRequest(PostConfig)

        console.log(res);

      } catch (error) {

        console.log(error);

      }
    }

    post()






  },

  // 数据已加载到页面上，DOM渲染完成
  mounted() {
    console.log("mounted 钩子被调用");





    // 使用封装的三种存取函数 

    //Cookie

    setCookie('cookiedata', '这是本地cookie存储的值,cookie存储可设置过期时间')
    const cookie = getCookie('cookiedata')
    console.log(cookie);
    // removeCookie('token') 


    // localStorage 本地存储
    setStorage('localStorage_token', '这是本地长久存储的值，不手动清除则永久存在，如删除必须手动删除')
    const localStoragedata = getStorage('localStorage_token')
    console.log(localStoragedata);
    // removeStorage('localStorage_token')


    // SessionStorage 会话存储
    setSessionStorage('SessionStorage_data', '这是当前页面存储的值，退出页面/浏览器则删除,也可手动删除')
    const SessionStoragedata = getSessionStorage('SessionStorage_data')
    console.log(SessionStoragedata);
    // removeSessionStorage('SessionStorage_data')



    const text = 'Hello, World!';
    // 计算 MD5 哈希
    const md5Hash = md5(text);
    console.log('MD5:', md5Hash);

    // 计算 SHA-256 哈希
    const sha256Hash = sha256(text);
    console.log('SHA-256:', sha256Hash);



  },

  // 数据更新前
  beforeUpdate() {
    console.log("beforeUpdate 钩子被调用");
  },

  // 数据更新后
  updated() {
    console.log("updated 钩子被调用");
  },

  // 实例销毁前
  beforeUnmount() {
    console.log("beforeUnmount 钩子被调用");
  },

  // 实例销毁后
  unmounted() {
    console.log("unmounted 钩子被调用");
  },

  // 组件方法
  methods: {
    greet() {
      console.log("Hello!");
      this.messageArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, false, true];
    },

    uppercase(value) {
      //模板字符串语法
      return `这是${value}`;
    },

    // 判断是否为数字的辅助方法
    isNumeric(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
  }
};
</script>

<style lang="scss" scoped>
// 以下为scss写法
.content {
  width: 100%;
  height: 100%;

  .teital {
    font-size: 50px;
  }
}

//以下为常规css写法
.content {
  width: 100%;
  height: 100%;
}

.content .teital {
  font-size: 50px;
}
</style>
