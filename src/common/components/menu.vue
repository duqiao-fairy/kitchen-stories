<!--
  组件功能
  开发人名字 时间

-->
<template>
  <div class="container" id="container">
    <nav 
      v-clickoutside="navClickOutSideHandler"
    >
      <ul @click="hideMenuHandler" v-for="item in classifyList">
        <li><router-link :to="{path: '/search', query: {type: item.name, id: item.classid} }" class="recipes"  @click="hideMenuHandler">{{ item.name }}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import srcConfig from 'src/config'
export default {
  
  mixins: [],

  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  },
  
  components: {

  },

  data () {
    return {
      shown: false,
      classifyList: [],
      API_ROOT: srcConfig.API_ROOT
    }
  },

  watch: {
    showMenu (newVal) {
      setTimeout(() => {
        this.shown = newVal
      }, 16)
    }
  },

  computed: {

  },

  methods: {
    hideMenuHandler: function () {
      // debugger
      // hideMenu: 事件名称
      this.$emit('hide-menu', '参数')
    },

    navClickOutSideHandler () {
      if (this.shown) {
        this.hideMenuHandler()
      }
    }
  },

  filters: {

  },

  created () {
    this.$http.jsonp(`${this.API_ROOT}recipe/class?appkey=d72db5a4b83925b1`).then((response) => {    
      // 响应成功回调
      this.classifyList = response.body.result[0].list
      // console.log(this.classifyList)
    }, (response) => {    
      // 响应错误回调
    });
  },

  mounted () {

  },

  updated (e) {
  },

  render (h) {

  }
}

</script>


<style lang="less" scoped>
.container {
  @theme-font-color-deep: #222;
  @theme-font-color-deep-minus: #464646;
  @theme-font-color-shallow: #979797;
  @theme-font-family: Brandon,Helvetica,sans-serif,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
  @theme-font-weight: 600;

  font-size: 40px;
  font-weight: @theme-font-weight;
  font-family: @theme-font-family;
  
  padding-top: 35px;
  top: 101px;
  padding-left: 10 * 2px;
  padding-right: 10 * 2px;

  background: #fff;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;

  nav {
    padding-bottom: 95 * 2px;
    ul {
      margin-left: 24 * 2px;
      margin-right: 24 * 2px;

      li {
        line-height: 27 * 2px;

      }
      .recipes {
        text-align: left;
        display: block;
        color: #8e8e8e;
        margin-top: 16 * 2px;
        margin-bottom: 16 * 2px;
      }
    }
  }

  
}

</style>