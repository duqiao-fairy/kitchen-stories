<template>
  <div class="container" id="container">
    <div class="img-one today-story">
      <h2 class="title">今日故事</h2>
      <div class="img-wraper">
        <img src="../../assets/images/index/A385-photo-final-4x3-medium-landscape-200.jpg" alt="">
      </div>
      <div class="description">
        <p class="title">草莓: 你不知道的4个真相</p>
        <p class="sub-title">房故事草莓周!</p>
      </div>
    </div>
    <div class="img-list new-cookbook">
      <h2 class="title">新食谱</h2>
      <span class="search-all">查看全部</span>
      <div class="img-wraper-content">
        <div class="imgs-wraper">
          <div class="img-s" v-for="item in menuList">
            <img :src="'http://tnfs.tngou.net/img' + item.img" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">{{ item.name }}</p>
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
  
  export default {
    data () {
      return {
        menuList: []
      }
    },
    created () {
      // console.log(this.constructor)
      // this.$http.jsonp('http://www.tngou.net/api/cook/list?cb=').then((response) => {    
      //     // 响应成功回调
      //     console.log(response)
      // }, (response) => {    
      //     // 响应错误回调
      // });

      // this.$http.get('http://www.tngou.net/api/cook/list').then((response) => {    
      //     // 响应成功回调
      //     console.log(response)
      // }, (response) => {    
      //     // 响应错误回调
      // });
      this.$http.get('/api/cook/list').then((response) => {    
          // 响应成功回调
          console.log(response)
          this.menuList = response.body.tngou
      }, (response) => {    
          // 响应错误回调
      });

    }
  }

</script>