<template>
  <div class="content">
    <div>
      <span>这里展示Store中值</span>
    </div>
    <div>
      <span v-for="(option, index) in storeData" :key="index">{{ option }}</span>
    </div>
  </div>
</template>

<script>

import store from '@/store/index';

export default {
  // 组件名称
  name: 'StoreData',

  // 使用computed属性获取store中的数据
  computed: {
    storeData() {
      return store.state.StoreData;
    }
  },

  // 使用beforeCreate钩子修改store中的数据
  beforeCreate() {
    store.commit('SetStoreData', ['a', 'b', 'c', 'd', 'e', '55555']);
  }
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
}
</style>
