<template>
  <div class="content">
    <button @click="SetStoreData">修改Store</button>
    <h1>
      <StoreData />
    </h1>
  </div>
</template>

<script>
//引入组件 StoreData
import StoreData from '@/components/StoreData/index.vue'

import store from '@/store/index';

export default {
  name: 'AboutPage',
  // 数据初始化
  data() {
    return {
      NewStoreArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    };
  },

  components: {
    //在当前模板注册组件 StoreData
    StoreData
  },

  // 过滤器
  filters: {},

  // 计算属性
  computed: {

  },

  // 监听组件内部事件
  watch: {

  },

  // 实例创建后
  created() {
    console.log("created 钩子被调用");
  },

  // 数据已加载到页面上，DOM渲染完成
  mounted() {
    console.log("mounted 钩子被调用");
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

    //修改store中的值
    SetStoreData() {
      store.commit('SetStoreData', this.NewStoreArr)
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
}
</style>
