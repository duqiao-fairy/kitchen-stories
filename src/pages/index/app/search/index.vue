<!--
  组件功能
  开发人名字 时间

-->
<template>
  <div class="container" id="container">
    <!-- 搜索区域 -->
    <div class="search-widget">
      <form class="search-form" id="recipes-search-form">
        <input class="search-input live-search-active" id="search-input" type="text" name="search" value="" v-model="searchValue"/>
        <div class="emojis">
          <a class="emoji" id="emoji01" v-for="item in emoji[emojiIndex]" @click="emojiSearchHandler(item.search)">{{ item.html }}</a>
        </div>
      </form>
      <button class="button-xl search-button" form="recipes-search-form" type="button" @click="getCooks">查找</button>
    </div>
    <!-- 无结果显示图 -->
    <div class="no-result-img" v-show="imgStatus">
      <img src="https://kitchenstories.io/images/Banana_no_results_zh.svg" alt="">
    </div>
    <div class="recipes-container">
      <h1 class="headline">
        {{ type }}
      </h1>
      <ul class="tiles">
        <li class="tile-container-s" v-for="item in searchList">
          <router-link :to="{path: '/detail', query: {id: item.id}}">
            <div class="tile-feeditem">
              <a href="" class="tile-link">
                <div class="tile-image-container">
                  <img :src="'http://tnfs.tngou.net/img' + item.img" alt="" class="tile-image">
                </div>
                <div class="tile-text">
                  <p class="title">{{ item.name }}</p>
                </div>
              </a>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import srcConfig from 'src/config'
export default {
  
  mixins: [],

  props: {

  },
  
  components: {

  },

  data () {
    return {
      imgStatus: false,
      emojiIndex: 0,
      emoji: [
        [{
          html: '🍚',
          search: '炒饭'
        },
        {
          html: '🍤',
          search: '油焖大虾'
        },
        {
          html: '🍸',
          search: '鸡尾酒'
        }],
        [{
          html: '🍰',
          search: '蛋糕'
        },
        {
          html: '🍓',
          search: '草莓'
        },
        {
          html: '🍳',
          search: '煎蛋'
        }],
        [{
          html: '🍆',
          search: '茄子'
        },
        {
          html: '🍗',
          search: '鸡腿'
        },
        {
          html: '🍕',
          search: '披萨'
        }]
      ],
      type: this.$route.query.type,
      id: this.$route.query.id,
      searchValue: '',
      searchList: [],
      API_ROOT: srcConfig.API_ROOT
    }
  },

  watch: {
    '$route.query.type' (newval) {
      this.type = newval
      this.searchValue = ''
    },
    '$route.query.id' (newval) {
      this.id = newval
      // console.log(11111111)
      this.$http.jsonp(`${this.API_ROOT}api/cook/list?id=` + this.id).then((response) => {    
      // 响应成功回调
      // console.log(response)
      this.searchList = response.body.tngou
      // console.log(this.searchList)
    }, (response) => {    
      // 响应错误回调
    });
    }
  },

  computed: {

  },

  methods: {
    getCooks () {
      this.type = '食谱'
      // debugger
      this.$http.jsonp(`${this.API_ROOT}api/cook/name?name=` + this.searchValue).then((response) => {    
        // 响应成功回调
        this.searchList = response.body.tngou
        console.log(this.searchList)
        if (this.searchList.length === 0) {
          this.imgStatus = true
        } else {
          this.imgStatus = false
        }
      }, (response) => {    
        // 响应错误回调
      });
    },

    changeEmijiIndex () {
      if (this.emojiIndex >= this.emoji.length - 1) {
        this.emojiIndex = 0
      } else {
        this.emojiIndex ++
      }
    },

    emojiSearchHandler (emojiName) {
      this.searchValue = emojiName
      this.changeEmijiIndex()
      this.getCooks()
    }
  },

  filters: {

  },

  created () {
    console.log(this.id)

    this.id || (this.id = 1)
    this.$http.jsonp(`${this.API_ROOT}api/cook/list?id=` + this.id).then((response) => {    
      // 响应成功回调
      // console.log(response)
      this.searchList = response.body.tngou
      // console.log(this.searchList)
    }, (response) => {    
      // 响应错误回调
    });
  },

  mounted () {

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
  color: @theme-font-color-deep-minus;
  padding-left: 9 * 2px;
  padding-right: 9 * 2px;
  padding-top: 95px;
  box-sizing: border-box;

  .no-result-img {
    padding-top: 70 * 2px;
    padding-bottom: 50 * 2px;
  }

  .search-widget {
    margin-top: 34 * 2px;
    margin-bottom: 26px;

    .search-form {
      position: relative;
      display: inline-block;
      height: 48 * 2px;
    }

    .search-input {
      width: 226 * 2px;
      height: 48 * 2px;
      border-radius: 10px;
      background: url('https://kitchenstories.io/images/icon_quick_action_search.svg') no-repeat 20px 30px;
      background-color: #f2f2f2;
      background-size: 40px;
      color: @theme-font-color-deep-minus;
      font-size: 40px;
      padding-left: 75px;
      box-sizing: border-box;
    }

    .emojis {
      position: absolute;
      left: 280px;
      top: -26px;
    }

    .emoji {
      display: inline-block;
      width: 16 * 2px;
      height: 22 * 2px;
      font-size: 32px;
      margin-right: 14px;
    }

    .search-button {
      width: 120 * 2px;
      height: 48 * 2px;
      background-color: #ffcd02;
      color: #fff;
      font-size: 40px;
      border-radius: 10px;
      display: inline-block;
      margin-left: 10px;
      position: relative;
      top: 8px;
    }
  }

  .recipes-container {
    padding-top: 20px;
    overflow: hidden;

    h1 {
      font-size: 24 * 2px;
      margin-bottom: 32px;
    }
  }

  .tile-container-s {
    float: left;

    .tile-image-container {
      width: 173 * 2px;
    }

    .tile-image {
      width: 173 * 2px;
      height: 231 * 2px;
      border-radius: 25px;
    }

    .tile-text {
      height: 96 * 2px;
      font-size: 32px;
      padding-top: 16px;
    }
  }

  li:nth-child(2n + 1) {
    margin-right: 10 * 2px;
  }
}


</style>