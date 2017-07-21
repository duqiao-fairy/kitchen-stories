<!--
  vue的header 组件
  开发人名字 时间

-->
<template>
  <div class="header">
    <div class="menu-button" @click="showMenu = !showMenu">
      <img src="../../../assets/images/header/menu-button.png" alt="">
    </div>
    <router-link :to="{path: '/home'}">
      <div class="logo">
        <img src="../../../assets/images/header/logo_kitchen_stories.svg" alt="">
      </div>
    </router-link>
    <router-link :to="{path: '/search'}">
      <div class="search-buttom">
        <img src="../../../assets/images/header/icon_quick_action_search.svg" alt="">
      </div>
    </router-link>
    <c-menu v-show="showMenu" v-on:hide-menu="hideMenuHander" :show-menu="showMenu">
    </c-menu>
  </div>

</template>

<script>

import cMenu from 'components/menu'

const app = {
  
  mixins: [],

  props: {

  },
  
  components: {
    cMenu
  },

  data () {
    return {
      showMenu: false
    }
  },

  watch: {

  },

  computed: {

  },

  methods: {
    hideMenuHander () {
      this.showMenu = false
    }

  },

  filters: {

  },

  created () {

  },

  mounted () {

  },

  render (h) {

  }
}

export default app
</script>


<style lang="less" scoped>
.header {
  @super-height: 100px;

  width: 100%;
  height: @super-height;
  position: fixed;
  text-align: center;
  border-bottom: 1px solid #d8d8d8; /*no*/
  z-index: 10;
  background-color: #fff;

  .menu-button {
    width: 32px;
    height: 24px;
    position: absolute;
    top: (@super-height - 24) / 2;
    left: 20px;
  }

  .logo {
    @img-height: 40px;

    display: inline-block;
    padding-top: (@super-height - @img-height) / 2;

    img {
      width: 400px;
      height: @img-height;
    }
  }

  .search-buttom {
    width: 18 * 2px;
    height: 18 * 2px;
    position: absolute;
    top: (@super-height - 36px) / 2;
    right: 30px;
  }
}


</style>