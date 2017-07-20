<template>
  <div class="container" id="container">
    <div class="img-one today-story">
      <h2 class="title">{{ todayStory.title }}</h2>
      <div class="img-wraper">
        <img :src="todayStory.imgUrl" alt="">
      </div>
      <div class="description">
        <p class="title">{{ todayStory.description.title }}</p>
        <p class="sub-title">{{ todayStory.description.subTitle }}</p>
      </div>
    </div>
    <div class="img-list new-cookbook">
      <h2 class="title">{{ newCookBook.title }}</h2>
      <span class="search-all">查看全部</span>
      <div class="img-wraper-content">
        <div class="imgs-wraper">

          <div class="img-s" 
            v-for="(item, index) in newCookBook.imgList"
          >
            <img :src="item.imgUrl" alt="">
            <div class="total-time">{{ item.time }}</div>
            <div class="title-wraper">
              <p class="title">{{ item.title }}</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    <div class="img-one easy-fast">
      <h2 class="title">简单快捷</h2>
      <div class="img-wraper">
        <img src="../../assets/images/index/RP16_02_69_Brigadeiro_4x3-medium-landscape-200.jpg" alt="">
      </div>
      <div class="description">
        <p class="title">巴西巧克力球</p>
        <p class="sub-title">意想不到的美味~</p>
      </div>
    </div>
    <div class="img-list week-dinner">
      <h2 class="title">本周晚餐</h2>
      <span class="search-all">查看全部</span>
      <div class="img-wraper-content">
        <div class="imgs-wraper">
          <div class="img-s">
            <img src="../../assets/images/index/R787-photo-final-4x3-medium-landscape-200.jpg" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">周日晚餐</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/R787-photo-final-4x3-medium-landscape-200.jpg" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">周日晚餐</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/R787-photo-final-4x3-medium-landscape-200.jpg" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">周日晚餐</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/R787-photo-final-4x3-medium-landscape-200.jpg" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">周日晚餐</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/R787-photo-final-4x3-medium-landscape-200.jpg" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">周日晚餐</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/R787-photo-final-4x3-medium-landscape-200.jpg" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">周日晚餐</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/R787-photo-final-4x3-medium-landscape-200.jpg" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">周日晚餐</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
    <div class="img-one no-meat-no-happy">
      <h2 class="title">无肉也欢</h2>
      <div class="img-wraper">
        <img src="../../assets/images/index/16_01_101_Final-medium-landscape-200.jpg" alt="">
      </div>
      <div class="description">
        <p class="title">甜菜沙拉佐柑橘汁</p>
        <!--<p class="sub-title">房故事草莓周!</p>-->
      </div>
    </div>
    <div class="img-list new-article">
      <h2 class="title">最新文章</h2>
      <span class="search-all">查看全部</span>
      <div class="img-wraper-content">
        <div class="imgs-wraper">
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img src="../../assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

import './index.less'
import serviceData from './data'

// var todayStory = {
  
// }
// todayStory.description.title

export default {
  
  mixins: [],

  props: {

  },
  
  components: {
    
  },

  data () {
    return {
      // ...serviceData
      todayStory: {
        description: {}
      },
      newCookBook: {
        imgList: []
      }
    }
  },

  watch: {

  },

  computed: {

  },

  methods: {

  },

  filters: {

  },

  created () {
    // 异步
    // ajax((data) => {

    // })

    setTimeout(() => {
      // var obj1 = {}
      // for (var key in obj2) {
      //   obj1[key] = obj2[key]
      // }
      Object.assign(this, serviceData)
    })
    Vue.http.get('http://www.tngou.net/api/cook/list?id=1&rows=10').then((data) => {
      console.log(data)
    }, () => {
    
    });
  },

  mounted () {

  },

  render (h) {

  }
}

</script>