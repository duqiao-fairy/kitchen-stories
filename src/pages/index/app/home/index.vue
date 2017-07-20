<template>
  <div class="container" id="container">
    <div class="img-one today-story">
      <h2 class="title">今日故事</h2>
      <div class="img-wraper">
        <img :src="require('assets/images/index/A385-photo-final-4x3-medium-landscape-200.jpg')" alt="">
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
          <!-- <a href="/vueindex.html#/detail" class="img-s" v-for="item in menuList">
            <img :src="'http://tnfs.tngou.net/img' + item.img" alt="">
            <div class="total-time">55分钟</div>
            <div class="title-wraper">
              <p class="title">{{ item.name }}</p>
            </div>
          </a> -->
          <div class="img-s" v-for="item in menuList">
            <router-link :to="{path: '/detail', query: {id: item.id}}">
              <img :src="'http://tnfs.tngou.net/img' + item.img" alt="">
              <div class="total-time">55分钟</div>
              <div class="title-wraper">
                <p class="title">{{ item.name }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
    <div class="img-one easy-fast">
      <h2 class="title">简单快捷</h2>
      <div class="img-wraper">
        <img :src="require('assets/images/index/RP16_02_69_Brigadeiro_4x3-medium-landscape-200.jpg')" alt="">
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
          <div class="img-s" v-for="(item, index) in weekMenuList">
            <router-link :to="{path: '/detail', query: {id: item.id}}">
              <img :src="'http://tnfs.tngou.net/img' + item.img" alt="">
              <div class="total-time">55分钟</div>
              <div class="title-wraper">
                <p class="title">{{ weekDays[index] }}</p>
                <p class="title">{{ item.name }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
    <div class="img-one no-meat-no-happy">
      <h2 class="title">无肉也欢</h2>
      <div class="img-wraper">
        <img :src="require('assets/images/index/16_01_101_Final-medium-landscape-200.jpg')" alt="">
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
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
            <div class="title-wraper">
              <p class="title">初学者教程：如何布置西式餐桌</p>
            </div>
          </div>
          <div class="img-s">
            <img :src="require('assets/images/index/A342-photo-final-4x3-small-portrait-200.jpg')" alt="">
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

  // import './index.less'
  import srcConfig from 'src/config'
  export default {
    name: 'PHome',
    data () {
      return {
        menuList: [],
        weekMenuList: [],
        noMeetMenu: {},
        weekDays: ['周日晚餐', '周一晚餐', '周二晚餐', '周三晚餐', '周四晚餐', '周五晚餐', '周六晚餐'],
        API_ROOT: srcConfig.API_ROOT
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

      this.$http.jsonp(`${this.API_ROOT}api/cook/list?rows=7`).then((response) => {    
          // 响应成功回调
          // console.log(response)
          this.menuList = response.body.tngou
      }, (response) => {    
          // 响应错误回调
      });

      this.$http.jsonp(`${this.API_ROOT}api/cook/list?id=9&rows=7`).then((response) => {    
          // 响应成功回调
          // console.log(response)
          this.weekMenuList = response.body.tngou
      }, (response) => {    
          // 响应错误回调
      });

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

  padding-top: 95 * 2px;
  padding-left: 10 * 2px;
  padding-right: 10 * 2px;

  .img-one {
    padding-bottom: 95px;

    .title {
      font-size: 40px;
      color: @theme-font-color-deep-minus;
      font-weight:@theme-font-weight;
      font-family: @theme-font-family;
    }

    .img-wraper {
      padding-top: 20 * 2px;

      img {
        width: 356 * 2px;
        height: 200 * 2px;
        border-radius: 25px;
      }
    }

    .description {
      padding-top: 16px;
      line-height: 48px;

      .title {
        font-size: 32px;
        color: @theme-font-color-deep;
        font-weight:@theme-font-weight;
        font-family: @theme-font-family;
      }

      .sub-title {
        font-size: 32px;
        color: @theme-font-color-shallow;
        font-weight:@theme-font-weight;
        font-family: @theme-font-family;
      }
    }
  }

  .img-list {
    // padding-bottom: 95px;
    /* 
      add by duqiao 
      margin 负值 来补充 父级的右侧padding-right的空隙
    */
    margin-right: -20px;
    overflow: hidden;

    .title {
      font-size: 40px;
      color: @theme-font-color-deep-minus;
      font-weight:@theme-font-weight;
      font-family: @theme-font-family;
    }

    .search-all {
      padding-right: 20px;
      font-size: 32px;
      color: @theme-font-color-shallow;
      font-weight:@theme-font-weight;
      font-family: @theme-font-family;
      float: right;
      display: block;
      margin-top: -32px;
    }

    .img-wraper-content {
      overflow-x: scroll;
      padding-top: 20 * 2px;
    }

    .imgs-wraper {
      width: 10000%;
      border-radius: 5px;

      .img-s {
        width: 165 * 2px;
        // padding-left: 16px;
        // padding-right: 16px;
        float: left;
        position: relative;
        box-sizing: border-box;

        img {
          width: 149 * 2px;
          height: 198 * 2px;
          border-radius: 20px;
        }

        .total-time {
          font-size: 12.8 * 2px;
          color: #fff;
          position: absolute;
          bottom: 60px;
          right: 60px;
        }

        .title-wraper {
          width: 149 * 2px; 
          height: 96 * 2px;
          padding-top: 16px;
        }

        .title {
          font-size: 32px;
          color: @theme-font-color-deep-minus;
          font-weight:@theme-font-weight;
          font-family: @theme-font-family;
          width: 149 * 2px;
          height: 21 * 2px;
        }
      }


    }
  }

  .week-dinner {
    .img-wraper-content {
      overflow-x: scroll;
      padding-top: 20 * 2px;
    }

    .imgs-wraper {
      width: 10000%;
      border-radius: 5px;

      .img-s {
        width: 255 * 2px;
        // padding-left: 16px;
        // padding-right: 16px;
        float: left;
        position: relative;
        box-sizing: border-box;

        img {
          width: 239 * 2px;
          height: 179 * 2px;
          border-radius: 20px;
        }

        .total-time {
          font-size: 12.8 * 2px;
          color: #fff;
          position: absolute;
          bottom: 60px;
          right: 60px;
        }

        .title-wraper {
          width: 149 * 2px; 
          height: 96 * 2px;
          padding-top: 16px;
        }

        .title {
          font-size: 32px;
          color: @theme-font-color-deep-minus;
          font-weight:@theme-font-weight;
          font-family: @theme-font-family;
          width: 149 * 2px;
          height: 21 * 2px;
        }
      }


    }

  }

}
</style>
