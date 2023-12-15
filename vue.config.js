const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  devServer: {
    open: true,  // 自动打开浏览器
  },

  // 是否将指定的依赖项进行转译
  transpileDependencies: true,
});
