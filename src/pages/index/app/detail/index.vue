<!--
  组件功能
  开发人名字 时间

-->
<template>
  <div class="container" id="container">
    <div class="detail">
      <div class="recipe-header">
        <div class="recipe-img">
          <img v-if="menuDetail.pic" :src="menuDetail.pic" alt="">
        </div>
        <h1>{{ menuDetail.name }}</h1>
        <div class="rating">
          <div class="rating-stars">
            <img src="https://kitchenstories.io/images/icon_star_filled.svg" alt="">
            <img src="https://kitchenstories.io/images/icon_star_filled.svg" alt="">
            <img src="https://kitchenstories.io/images/icon_star_filled.svg" alt="">
            <img src="https://kitchenstories.io/images/icon_star_filled.svg" alt="">
            <img src="https://kitchenstories.io/images/icon_star_halffilled.svg" alt="">
          </div>
          <div class="rating-text">6 评分</div>
        </div>
        <div class="share-links">
          <ul>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan" target="_blank"><img src="https://kitchenstories.io/images/icon_facebook.svg" alt="Facebook" style="width: 20px; height: 40px;"></a></li>
            <li><a href="https://twitter.com/intent/tweet?text=%E7%AE%80%E6%98%93%E6%B5%B7%E9%B2%9C%E9%A5%AD&amp;url=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan&amp;hashtags=kitchenstories" target="_blank"><img src="https://kitchenstories.io/images/icon_twitter.svg" alt="Twitter" style="width: 48px; height: 40px;"></a></li>
            <li><a href="https://pinterest.com/pin/create/button/?url=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan&amp;media=https://images.kitchenstories.de/recipeImages/R704-photo-final.jpg&amp;description=%E6%88%91%E8%BF%87%E5%8E%BB%E6%80%BB%E8%A7%89%E5%BE%97%EF%BC%8C%E5%9C%A8%E5%AE%B6%E5%81%9A%E6%B5%B7%E9%B2%9C%E9%A5%AD%E5%A4%AA%E9%9A%BE%E4%BA%86%EF%BC%8C%E4%BD%86%E6%98%AF%E6%9C%89%E4%BA%86%E8%BF%99%E9%81%93%E9%A3%9F%E8%B0%B1%EF%BC%8C%E5%B0%B1%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%8D%E5%87%BA%E9%94%99%E4%BA%86%E3%80%82%E6%88%91%E5%BE%88%E5%96%9C%E6%AC%A2%E4%B8%BA%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%B6%E4%BD%9C%E8%BF%99%E6%AC%BE%E6%B5%B7%E9%B2%9C%E9%A5%AD%EF%BC%81" target="_blank"><img src="https://kitchenstories.io/images/icon_pinterest.svg" alt="Pinterest" style="width: 31px; height: 40px;"></a></li>
            <li><a href="mailto:?&amp;subject=%E6%83%B3%E5%90%83%EF%BC%81%F0%9F%98%8B&amp;body=%E5%97%A8%EF%BC%8C%E6%88%91%E6%89%BE%E5%88%B0%E4%BA%86%E4%B8%80%E4%BB%BD%E9%A3%9F%E8%B0%B1%20%E7%AE%80%E6%98%93%E6%B5%B7%E9%B2%9C%E9%A5%AD%EF%BC%81%E6%88%91%E4%BB%AC%E8%AF%95%E8%AF%95%E5%90%A7%EF%BC%9F%20https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan"><img src="https://kitchenstories.io/images/icon_mail.svg" alt="Mail" style="width: 55px; height: 40px;"></a></li>
            <li><a href="http://service.weibo.com/share/share.php?url=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan&amp;appkey=&amp;title=%E6%88%91%E8%BF%87%E5%8E%BB%E6%80%BB%E8%A7%89%E5%BE%97%EF%BC%8C%E5%9C%A8%E5%AE%B6%E5%81%9A%E6%B5%B7%E9%B2%9C%E9%A5%AD%E5%A4%AA%E9%9A%BE%E4%BA%86%EF%BC%8C%E4%BD%86%E6%98%AF%E6%9C%89%E4%BA%86%E8%BF%99%E9%81%93%E9%A3%9F%E8%B0%B1%EF%BC%8C%E5%B0%B1%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%8D%E5%87%BA%E9%94%99%E4%BA%86%E3%80%82%E6%88%91%E5%BE%88%E5%96%9C%E6%AC%A2%E4%B8%BA%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%B6%E4%BD%9C%E8%BF%99%E6%AC%BE%E6%B5%B7%E9%B2%9C%E9%A5%AD%EF%BC%81&amp;pic=https://images.kitchenstories.de/recipeImages/R704-photo-final.jpg&amp;ralateUid=&amp;language=zh" target="_blank"><img src="https://kitchenstories.io/images/icon_weibo.svg" alt="Weibo" style="width: 46px; height: 40px;"></a></li>
            <li><a href="javascript:window.print()"><img src="https://kitchenstories.io/images/icon_print.svg" alt="print" style="width: 46px; height: 40px;"></a></li>
          </ul>
        </div>
      </div>
      <div class="recipe-author">
        <img class="author-image" :src="require('assets/images/detail/author01.png')">
        <h2 class="author-title">Antoine,摄影师</h2><br>
        <p class="author-text">„我过去总觉得，在家做海鲜饭太难了，但是有了这道食谱，就能保证不出错了。我很喜欢为朋友们制作这款海鲜饭！“</p>
      </div>
      <div class="recipe-difficulty">
        <h2>难度</h2>
        <span>易 👌</span>
      </div>
      <div class="recipe-ingredients">
        <h2>食材</h2>
        <ul class="recipe-ingredients-list">
          <li v-for="item in menuDetail.material">
            <p>{{ item.mname }}</p>
            <span>{{ item.amount }}</span>
          </li>
        </ul>
      </div>
      <div class="recipe-steps">
        <div class="step" v-for="(item, index) in menuDetail.process">
          <h2>烹饪步骤 {{ (index+1) }}/{{ menuDetail.process.length }}</h2>
          <div class="step-image">
            <img :src="item.pic" alt="">
          </div>
          <p class="text">{{ item.pcontent }}</p>
        </div>
      </div>
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
      menuDetail: {message: ''},
      menuFood: [],
      API_ROOT: srcConfig.API_ROOT
    }
  },

  watch: {

  },

  computed: {
    messageRender () {
      // var str = '</h2>'
      // var matched = this.menuDetail.message.split(str)

      // return matched && (matched[2])
    }
  },

  methods: {

  },

  filters: {

  },

  created () {
    let id = this.$route.query.id
      this.$http.get(`${this.API_ROOT}recipe/detail?appkey=d72db5a4b83925b1&id=${id}`).then((response) => {    
          // 响应成功回调
          // console.log(response)
          this.menuDetail = response.body.result
          // this.menuFood = response.body.food.split(',')
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

  .detail {
    padding-top: 95 * 2px;
    padding-left: 9 * 2px;
    padding-right: 9 * 2px;

    .recipe-header {
      padding-bottom: 64px;
      background: url('~assets/images/detail/dot.png');
      background-position: bottom;
      background-size: 12px 6px;
      background-repeat: repeat-x;

      .recipe-img {
        img {
          width: 356 * 2px;
          height: 267 * 2px;
          border-radius: 25px;
        }
      }

      h1 {
        margin-top: 32px;
        margin-bottom: 32px;
        text-align: center;
        font-size: 48px;
        font-weight: @theme-font-weight;
        font-family: @theme-font-family;
        color: @theme-font-color-deep-minus;
      }

      .rating {
        margin-top: 32px;
        margin-bottom: 32px;
        box-sizing: border-box;

        .rating-stars {
          box-sizing: border-box;
          text-align: center;
          padding-top: 16px;

          img {
            width: 14 * 2px;
            height: 13 * 2px;
            padding-left: 6px;
            padding-right: 6px;
          }
        }

        .rating-text {
          text-align: center;
          font-size: 24px;
          font-weight: normal;
          font-family: @theme-font-family;
          color: @theme-font-color-deep-minus;
          padding-top: 8px;
          line-height: 16.2 * 2px;
        }
      }

      .share-links {
        height: 22 * 2px;
        margin-left: 72 * 2px;
        margin-right: 72 * 2px;
        text-align: center;

        ul {
          text-align: center;
        }

        li {
          float: left;
          padding-left: 14px;
          padding-right: 14px;
        }

      }
    }

    .recipe-author {
      background: url('~assets/images/detail/dot.png');
      background-position: bottom;
      background-size: 12px 6px;
      background-repeat: repeat-x;
      padding-bottom: 42px;
      padding-top: 42px;

      .author-image {
        width: 68 * 2px;
        height: 68 * 2px;
        margin-right: 32px;
        margin-bottom: 17px;
        float: left;
      }

      .author-title {
        line-height: 44px;
      }

      .author-text {
        font-size: 32px;
        font-weight: normal;
        line-height: 42px;
        clear: both;
      }


    }
    .recipe-difficulty {
      background: url('~assets/images/detail/dot.png');
      background-position: bottom;
      background-size: 12px 6px;
      background-repeat: repeat-x;
      padding-top: 42px;
      padding-bottom: 42px;

      h2 {
        line-height: 42px;
        display: inline;
        margin-right: 32 * 2px;
      }

      span {
        font-size: 32px;
        font-weight: normal;
      }
    }

    .recipe-time {
      background: url('~assets/images/detail/dot.png');
      background-position: bottom;
      background-size: 12px 6px;
      background-repeat: repeat-x;
      padding-top: 42px;
      padding-bottom: 42px;
    }

    .recipe-ingredients {
      padding-top: 42px;
      padding-bottom: 42px;
      border-bottom: #8e8e8e solid 2px;

      h2 {
        margin-bottom: 26px;
      }

      .recipe-ingredients-list {
        font-size: 32px;
        font-weight: normal;
      }

      li {
        line-height: 42px;
      }
      
      p {
        display: inline-block;
        width: 100px;
      }

      span {
        margin-left: 130px;
      }
    }

    .recipe-steps {
      padding-top: 32px;
      padding-bottom: 32px;
      
      h2 {
        margin-bottom: 26px;
      }

      .step-image {
        margin-bottom: 32px;

        img {
          border-radius: 25px;
        }
      }

      p {
        font-size: 32px;
        font-weight: normal;
        line-height: 42px;
        padding-top: 32px;
        padding-bottom: 32px;
      }
    }
  }


}
</style>

