<!--
  组件功能
  开发人名字 时间

-->
<template>
  <div class="container" id="container">
    <div class="detail">
      <div class="recipe-header">
        <div class="recipe-img">
          <img :src="require('assets/images/index/A392-photo-final-4x3-medium-landscape-200.jpg')" alt="">
        </div>
        <h1>你好，我是冰淇淋</h1>
        <div class="share-links">
          <ul>
            <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan" target="_blank"><img src="https://kitchenstories.io/images/icon_facebook.svg" alt="Facebook" ></a></li>
            <li><a href="https://twitter.com/intent/tweet?text=%E7%AE%80%E6%98%93%E6%B5%B7%E9%B2%9C%E9%A5%AD&amp;url=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan&amp;hashtags=kitchenstories" target="_blank"><img src="https://kitchenstories.io/images/icon_twitter.svg" alt="Twitter" ></a></li>
            <li><a href="https://pinterest.com/pin/create/button/?url=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan&amp;media=https://images.kitchenstories.de/recipeImages/R704-photo-final.jpg&amp;description=%E6%88%91%E8%BF%87%E5%8E%BB%E6%80%BB%E8%A7%89%E5%BE%97%EF%BC%8C%E5%9C%A8%E5%AE%B6%E5%81%9A%E6%B5%B7%E9%B2%9C%E9%A5%AD%E5%A4%AA%E9%9A%BE%E4%BA%86%EF%BC%8C%E4%BD%86%E6%98%AF%E6%9C%89%E4%BA%86%E8%BF%99%E9%81%93%E9%A3%9F%E8%B0%B1%EF%BC%8C%E5%B0%B1%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%8D%E5%87%BA%E9%94%99%E4%BA%86%E3%80%82%E6%88%91%E5%BE%88%E5%96%9C%E6%AC%A2%E4%B8%BA%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%B6%E4%BD%9C%E8%BF%99%E6%AC%BE%E6%B5%B7%E9%B2%9C%E9%A5%AD%EF%BC%81" target="_blank"><img src="https://kitchenstories.io/images/icon_pinterest.svg" alt="Pinterest"></a></li>
            <li><a href="mailto:?&amp;subject=%E6%83%B3%E5%90%83%EF%BC%81%F0%9F%98%8B&amp;body=%E5%97%A8%EF%BC%8C%E6%88%91%E6%89%BE%E5%88%B0%E4%BA%86%E4%B8%80%E4%BB%BD%E9%A3%9F%E8%B0%B1%20%E7%AE%80%E6%98%93%E6%B5%B7%E9%B2%9C%E9%A5%AD%EF%BC%81%E6%88%91%E4%BB%AC%E8%AF%95%E8%AF%95%E5%90%A7%EF%BC%9F%20https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan"><img src="https://kitchenstories.io/images/icon_mail.svg" alt="Mail"></a></li>
            <li><a href="http://service.weibo.com/share/share.php?url=https://kitchenstories.io/zh/shi-pu/jian-yi-hai-xian-fan&amp;appkey=&amp;title=%E6%88%91%E8%BF%87%E5%8E%BB%E6%80%BB%E8%A7%89%E5%BE%97%EF%BC%8C%E5%9C%A8%E5%AE%B6%E5%81%9A%E6%B5%B7%E9%B2%9C%E9%A5%AD%E5%A4%AA%E9%9A%BE%E4%BA%86%EF%BC%8C%E4%BD%86%E6%98%AF%E6%9C%89%E4%BA%86%E8%BF%99%E9%81%93%E9%A3%9F%E8%B0%B1%EF%BC%8C%E5%B0%B1%E8%83%BD%E4%BF%9D%E8%AF%81%E4%B8%8D%E5%87%BA%E9%94%99%E4%BA%86%E3%80%82%E6%88%91%E5%BE%88%E5%96%9C%E6%AC%A2%E4%B8%BA%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%B6%E4%BD%9C%E8%BF%99%E6%AC%BE%E6%B5%B7%E9%B2%9C%E9%A5%AD%EF%BC%81&amp;pic=https://images.kitchenstories.de/recipeImages/R704-photo-final.jpg&amp;ralateUid=&amp;language=zh" target="_blank"><img src="https://kitchenstories.io/images/icon_weibo.svg" alt="Weibo"></a></li>
            <li><a href="javascript:window.print()"><img src="https://kitchenstories.io/images/icon_print.svg" alt="print" ></a></li>
          </ul>
        </div>
      </div>
      <div class="article-subtitle">
        <p>关于冰淇淋的一切（以及是否需要冰淇淋机）</p>
      </div>
      <div class="recipe-author">
        <img class="author-image" :src="require('assets/images/today/testimonial_Julia@2x_cf6643b3.png')">
        <h3 class="author-title">Julia</h3>
        <span class="author-text">美食编辑</span>
      </div>
      <div class="article">
        <div class="article-title">
          <p><b>就从这一普遍的事实开始吧：每个人都喜欢冰淇淋！</b></p>
        </div>
        <div class="article-text">
          <p>在儿童时期，我们常常不能想吃多少就吃多少冰淇淋。现在，长大成人了，我们更加开放了——不止是对口味的包容性更强，制作技巧也十足多样。你有制作过自己的专属冰淇淋吗？</p>
        </div>
        <div class="article-image-collection">
          <div class="article-image">
            <img :src="require('assets/images/today/A392-photo-content-4-medium-original-200.jpg')" alt="">
          </div>
        </div>
        <div class="article-text">
          <p>在厨房故事，我们已经开发出好几个冰淇淋食谱了。但是，当我们拿着Dana Cree的食谱书《你好，我是冰淇淋》时，我们还是情不自禁地陷了进去——还有好多我们需要去学习的（而且这本书真是怎么看都看不够）。而且谁还能比这位两次詹姆斯·彼尔德大奖提名的糕点师更有资格当你的冰淇淋老师呢？更不用说，人家自己的精美冰淇淋品牌早已在芝加哥售卖多年了。</p>
        </div>
        <div class="article-text">
          <p>如果你想更深入地了解冰淇淋这一话题，那这本书可以称得上是冰淇淋圣经了。从化学成分的基础知识、质感和加工处理，到食谱和自制冰淇淋的解说，Dana老师为你提供了十分全面的信息。</p>
        </div>
        <div class="article-text">
          <p><i>你是否也有自制冰淇淋的小窍门？在评论中与我们分享吧，也欢迎发来你最爱冰淇淋食谱！</i></p>
        </div>
        <div class="article-image-collection">
          <div class="article-image">
            <img :src="require('assets/images/today/A392-photo-content-1-medium-original-200.jpg')" alt="">
          </div>
        </div>
        <div class="article-headline">
          <h2>1. 冰淇淋加工</h2>
        </div>
        <div class="article-text">
          <p>&nbsp;从哪里开始讲起呢？首先，让我们来看一看制作冰淇淋的5个步骤吧。以下是根据书中内容进行整理的精简版：</p>
        </div>
        <div class="article-text">
          <p>制作冰淇淋基底，要用上奶制品、糖和些许鸡蛋，作出液态基底。加热这一混合物以溶解糖、让蛋白质变性并让风味浸透。</p>
        </div>
        <div class="article-text">
          <p>之后，你需要将其迅速放凉，以免滋生细菌。只需用上冰浴和冰箱即可。</p>
        </div>
        <div class="article-text">
          <p>接着，就是固化冰淇淋基底了。这是最难的一步，因为你必须得冷冻冰淇淋至少四小时（不过最好是隔夜）。这可以提升质感和口味，千万不可跳过。</p>
        </div>
        <div class="article-text">
          <p>将冰淇淋基底搅拌成冰淇淋，这时才是见证奇迹的时刻。通过冷冻和搅拌液态基底，将其变成完美柔滑的冰淇淋。</p>
        </div>
        <div class="article-text">
          <p>如果你想要做出经典的硬装风格冰淇淋，那就得将冰淇淋放到冰箱中再次冷冻。不过，跳过这一步也是可以的。意大利式冰淇淋就不是硬的，而是刚搅拌好就新鲜食用（顺便说一句，这就是意式冰淇淋和普通冰淇淋的差别所在）。</p>
        </div>
        <div class="article-image-collection">
          <div class="article-image">
            <img :src="require('assets/images/today/A392-photo-content-3-medium-original-200.jpg')" alt="">
          </div>
        </div>
        <div class="article-headline">
          <h2>2. 最大的问题：你真的需要在家备一个冰淇淋机吗？</h2>
        </div>    
        <div class="article-quote">
          <p class="article-quote-text">« 如果你想制作冰淇淋，那就得买一个冰淇淋机。没有别的方法。 »</p>
          <p class="article-quote-p">Dana Cree, Hello My Name Is Ice Cream</p>
        </div> 
        <div class="article-text">
          <p>当然，这里允许出现其它的意见。经典的用牛奶、奶油和鸡蛋制作的冰淇淋，很难在没有冰淇淋机的情况下做好。机器种类也有不同，有需要预先冷冻的，也有内置压缩机的。好消息是：有这么一台冰淇淋机，适用于任何预算价位——从基础到高级和专业。</p>
        </div>  
        <div class="article-text">
          <p>但是，如果你没有冰淇淋机，你还可以制作美味的雪葩和无需搅拌的冰淇淋！</p>
        </div>  
        <router-link :to="{path: '/detail', query: {id: 17080}}">
          <div class="article-recipe">
            <h2>紫薯冰淇淋</h2>
            <img src="http://api.jisuapi.com/recipe/upload/20160719/154639_20082.jpg" alt="">
            <p>→ 查看食谱</p>
          </div>
        </router-link>
        <div class="article-image-collection">
          <div class="article-image">
            <img :src="require('assets/images/today/A392-photo-content-2-medium-original-200.jpg')" alt="">
          </div>
        </div>
        <div class="article-headline">
          <h2>3. 不同类型的冰淇淋</h2>
        </div>    
        <div class="article-text">
          <p>蛋奶冻冰淇淋是用蛋黄制作的冰淇淋（也被称为法式冰淇淋）。这种冰淇淋口味醇厚，质地柔滑，有点嚼劲，味道的散发很慢，但很持久。因此，它们很适合做成浓郁的口味，比如这款杏仁肉桂冰淇淋或抹茶冰淇淋。</p>
        </div>  
        <div class="article-text">
          <p>费城冰淇淋是无蛋黄冰淇淋。你可能没听说过，但它其实是最普遍的冰淇淋种类，也是我们嘴里常说的那种“冰淇淋”。它很适合柔和的口味，作为基底也很美味。你可以搭配马斯卡帕尼乳酪、法式酸奶油或罗勒和薰衣草，风味完全没有界限！</p>
        </div>  
        <div class="article-text">
          <p>冰冻果子露就像奶油质感的水果雪葩，口感介于雪葩和冰淇淋之间。其口味还是有点浓厚，而且包含牛奶和奶油，但你也可以加入一些果泥。</p>
        </div>  
        <div class="article-text">
          <p>冰冻酸奶并不是你在超市里看到的那种低脂冰淇淋，而是“有着普通冰淇淋般黏着质地的酸奶”。你可以用希腊酸奶打底，搭配各种各样的香料、草本和口味。或者制作我们的早餐冰棒。</p>
        </div>  
      </div>
      <!-- 更多美味创意 -->
      <div class="recipes-container">
      <h1 class="headline">
        更多美味创意
      </h1>
      <ul class="tiles">
        <li class="tile-container-s" v-for="item in searchList">
          <router-link :to="{path: '/detail', query: {id: item.id}}">
            <div class="tile-feeditem">
              <a href="" class="tile-link">
                <div class="tile-image-container">
                  <img :src="item.pic" alt="" class="tile-image">
                </div>
                <div class="tile-text">
                  <p class="title">{{ item.name.substr(0,7) }}</p>
                </div>
              </a>
            </div>
          </router-link>
        </li>
      </ul>
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
      searchList: [],
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
    this.$http.jsonp(`${this.API_ROOT}recipe/search?num=10&appkey=d72db5a4b83925b1&keyword=冰淇淋`).then((response) => {    
      // 响应成功回调
      // console.log(response)
      this.searchList = response.body.result.list
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

          img {
            height: 40px;
            width: auto;
          }
        }

      }
    }

    .article-subtitle {
      font-size: 32px;
      background: url('~assets/images/detail/dot.png');
      background-position: bottom;
      background-size: 12px 6px;
      background-repeat: repeat-x;
      text-align: center;
      padding-bottom: 42px;
      padding-top: 42px;
    }

    .recipe-author {
      background: url('~assets/images/detail/dot.png');
      background-position: bottom;
      background-size: 12px 6px;
      background-repeat: repeat-x;
      padding-bottom: 80px;
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
        font-size: 28px;
        font-weight: normal;
        margin-bottom: 20px;
      }

      .author-text {
        font-size: 32px;
        font-weight: normal;
        line-height: 42px;
        clear: both;
      }


    }

    .article {
      font-size: 32px;
      line-height: 21 * 2px;
      

      .article-title {
        padding-top: 15 * 2px;
      }

      .article-text {
        padding-top: 16 * 2px;
        padding-bottom: 16 * 2px;
        font-weight: normal;
      }

      .article-image-collection {
        padding-top: 15 * 2px;
      }

      .article-headline {
        font-size: 20 * 2px;
        padding-top: 30 * 2px;
      }

      .article-quote {
        padding-top: 40 * 2px;
        text-align: center;

        .article-quote-p {
          font-weight: normal;
        }
      }

      .article-recipe {

        h2 {
          font-size: 20 * 2px;
        }

        img {
          height: 280 * 2px;
          padding-top: 20 * 2px;
        }

        p {
          padding-top: 3 * 2px;
          padding-bottom: 7 * 2px;
          float: right;
          font-family: #8e8e8e;
        }
      }
    }


    .recipes-container {
      padding-top: 20px;
      overflow: hidden;

      h1 {
        font-size: 20 * 2px;
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


}
</style>