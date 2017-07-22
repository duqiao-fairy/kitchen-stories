<template>
  <div class="container" id="container">
  <router-link :to="{path: '/today'}">
    <div class="img-one today-story">
      <h2 class="title">今日故事</h2>
      <div class="img-wraper">
        <img :src="require('assets/images/index/A392-photo-final-4x3-medium-landscape-200.jpg')" alt="">
      </div>
      <div class="description">
        <p class="title">你好， 我是冰淇淋</p>
        <p class="sub-title">一起来做冰淇淋吧!</p>
      </div>
    </div>
  </router-link>
    <div class="img-list new-cookbook">
      <h2 class="title">新食谱</h2>
      <router-link :to="{path: '/search', query: {type: '新食谱', id: 109}}">
        <span class="search-all">查看全部</span>
      </router-link>
      <div class="img-wraper-content">
        <div class="imgs-wraper">
          <div class="img-s" v-for="item in menuList">
            <router-link :to="{path: '/detail', query: {id: item.id}}">
              <img :src="item.pic" alt="">
              <div class="title-wraper">
                <p class="title">{{ item.name.substr(0,7) }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
    <div class="img-one easy-fast">
      <h2 class="title">简单快捷</h2>
      <router-link :to="{path: '/detail', query: {id: 9416}}">
      <div class="img-wraper">
        <img :src="require('assets/images/index/PerfectSteak_Final-medium-landscape-200.jpg')" alt="">
      </div>
      <div class="description">
        <p class="title">煎牛排</p>
        <p class="sub-title">意想不到的美味~</p>
      </div>
      </router-link>
    </div>
    <div class="img-list week-dinner">
      <h2 class="title">本周晚餐</h2>
      <router-link :to="{path: '/search', query: {type: '本周晚餐', id: 108}}">
        <span class="search-all">查看全部</span>
      </router-link>
      <div class="img-wraper-content">
        <div class="imgs-wraper">
          <div class="img-s" v-for="(item, index) in weekMenuList">
            <router-link :to="{path: '/detail', query: {id: item.id}}">
              <img :src="item.pic" alt="">
              <div class="total-time">55分钟</div>
              <div class="title-wraper">
                <p class="title">{{ weekDays[index] }}</p>
                <p class="title">{{ item.name.substr(0,7) }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      
    </div>
    <div class="img-one no-meat-no-happy">
      <h2 class="title">无肉也欢</h2>
      <router-link :to="{path: '/detail', query: {id: 407}}">
      <div class="img-wraper">
        <img :src="require('assets/images/index/22_17_WildRiceSalad_final-large-landscape-200.jpg')" alt="">
      </div>
      <div class="description">
        <p class="title">牛油果蔬菜沙拉</p>
      </div>
      </router-link>
    </div>
    <div class="img-list new-article">
      <h2 class="title">食谱预览</h2>
      <div class="img-wraper-content">
        <div class="imgs-wraper">
          <router-link :to="{path: '/search', query: {type: '低碳水化合物', id: 10}}">
            <div class="img-s">
              <div class="img-s-inner">
                <img :src="require('assets/images/index/R622-photo-final-4x3-large-landscape-200-small-portrait-200.jpg')" alt="">
                <div class="gradient"></div>
                <div class="tile-text">低碳水化合物</div>
              </div>
            </div>
          </router-link>
          <router-link :to="{path: '/search', query: {type: '亚洲风味', name: '面'}}">
            <div class="img-s">
              <div class="img-s-inner">
                <img :src="require('assets/images/index/Asian_6c5a466f-small-portrait-200.jpg')" alt="">
                <div class="gradient"></div>
                <div class="tile-text">亚洲风味</div>
              </div>
            </div>
          </router-link>
          <router-link :to="{path: '/search', query: {type: '草莓', name: '草莓'}}">
            <div class="img-s">
              <div class="img-s-inner">
                <img :src="require('assets/images/index/16_01_30_BiscuitrolleMitErdbeersahnefuellung_Final-medium-landscape-200-small-portrait-200.jpg')" alt="">
                <div class="gradient"></div>
                <div class="tile-text">草莓</div>
              </div>
            </div>
          </router-link>
          <router-link :to="{path: '/search', query: {type: '工作日晚餐', id: 108}}">
            <div class="img-s">
              <div class="img-s-inner">
                <img :src="require('assets/images/index/R622-photo-final-4x3-large-landscape-200-small-portrait-200.jpg')" alt="">
                <div class="gradient"></div>
                <div class="tile-text">工作日晚餐</div>
              </div>
            </div>
          </router-link>
          <router-link :to="{path: '/search', query: {type: '酒精饮品', name: '酒'}}">
            <div class="img-s">
              <div class="img-s-inner">
                <img :src="require('assets/images/index/32_07_Cosmopolitan_TitlePicture-medium-landscape-200-small-portrait-200.jpg')" alt="">
                <div class="gradient"></div>
                <div class="tile-text">酒精饮品</div>
              </div>
            </div>
          </router-link>
          <router-link :to="{path: '/search', query: {type: '烘焙', name: '面包'}}">
            <div class="img-s">
              <div class="img-s-inner">
                <img :src="require('assets/images/index/r340-picture-title-small-portrait-200.jpg')" alt="">
                <div class="gradient"></div>
                <div class="tile-text">烘焙</div>
              </div>
            </div>
          </router-link>
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
      // 天云狗接口
      // this.$http.jsonp(`${this.API_ROOT}api/cook/list?rows=7`).then((response) => {    
      //     // 响应成功回调
      //     // console.log(response)
      //     this.menuList = response.body.tngou
      // }, (response) => {    
      //     // 响应错误回调
      // });

      // this.$http.jsonp(`${this.API_ROOT}api/cook/list?id=9&rows=7`).then((response) => {    
      //     // 响应成功回调
      //     // console.log(response)
      //     this.weekMenuList = response.body.tngou
      // }, (response) => {    
      //     // 响应错误回调
      // });
      // 天云狗接口结束
      // 极速数据接口
      this.$http.jsonp(`${this.API_ROOT}recipe/byclass?start=0&num=8&appkey=d72db5a4b83925b1&classid=109`).then((response) => {    
          // 响应成功回调
          // console.log(response)
          this.menuList = response.body.result.list
          // console.log(this.menuList)
      }, (response) => {    
          // 响应错误回调
      });
      this.$http.jsonp(`${this.API_ROOT}recipe/byclass?start=0&num=7&appkey=d72db5a4b83925b1&classid=108`).then((response) => {    
          // 响应成功回调
          // console.log(response)
          this.weekMenuList = response.body.result.list
      }, (response) => {    
          // 响应错误回调
      });
      // 极速数据接口结束
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
      overflow: hidden;
      // padding-bottom: 30 * 2px;
      

      .img-s {
        width: 165 * 2px;
        // padding-left: 16px;
        // padding-right: 16px;
        float: left;
        position: relative;
        box-sizing: border-box;

        .img-s-inner {
          position: relative;
          width: 149 * 2px;
        }

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

        .gradient{
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5) 100%);
          border-radius: 20px;
        }

        .tile-text {
          font-size: 20 * 2px;
          color: #fff;
          position: absolute;
          bottom: 20 * 2px;
          text-align: center;
          width: 100%;
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

  .new-article .imgs-wraper {
    padding-bottom: 50 * 2px;
  }

}
</style>
