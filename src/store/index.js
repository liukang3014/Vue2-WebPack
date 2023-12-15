// store/index.js

import { createStore } from 'vuex';

const store = createStore({
  state: {

    StoreData: ['a', 'b', 'c', 'd', 'e']

  },

  mutations: {

    SetStoreData(state, data) {
      state.StoreData = data;
    }
    
  },

  // 可以添加 getters、actions 等其他属性
});

export default store;
