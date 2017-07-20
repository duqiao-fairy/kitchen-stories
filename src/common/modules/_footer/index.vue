<!--
  vue的footer 组件
  author dq
-->

<template>
  <div class="footer">
    <h2>联络</h2>
    <section class="social-links-2">
      <h3>关注我们</h3>
      <ul>
        <li>
          <a href="https://itunes.apple.com/cn/app/chu-fang-gu-shi-mei-shi-cai/id771068291">
            <img src="https://kitchenstories.io/images/icon_facebook.svg" alt="" style="width: 14px;">
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kitchenstories_official" target="_blank">
            <img src="https://kitchenstories.io/images/icon_instagram.svg" alt="Instagram" style="width: 31px;">
          </a>
        </li>
        <li>
          <a href="https://twitter.com/1KitchenStories" target="_blank">
            <img src="https://kitchenstories.io/images/icon_twitter.svg" alt="Twitter" style="width: 32px;">
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/1kitchenstories" target="_blank">
            <img src="https://kitchenstories.io/images/icon_youtube.svg" alt="Youtube" style="width: 43px;">
          </a>
        </li>
        <li>
          <a href="http://www.pinterest.com/1kitchenstories" target="_blank">
            <img src="https://kitchenstories.io/images/icon_pinterest.svg" alt="Pinterest" style="width: 23px;">
          </a>
        </li>
        <li>
          <a href="http://weibo.com/kitchenstories" target="_blank">
            <img src="https://kitchenstories.io/images/icon_weibo.svg" alt="Weibo" style="width: 36px;">
          </a>
        </li>
      </ul>
    </section>
    <section class="get-app">
      <h3>App下载</h3>
      <a href="https://itunes.apple.com/cn/app/chu-fang-gu-shi-mei-shi-cai/id771068291">
        <img src="https://kitchenstories.io/images/badges/badge_appstore_zh.svg" alt="">
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.ajnsnewmedia.kitchenstories">
        <img src="../../../assets/images/footer/badge_google-play_zh.png" alt="">
      </a>
    </section>
    <section class="author">
      <p>
        Made by 
        <img src="https://kitchenstories.io/images/icon_heart_made_in_berlin.svg" alt="">
        du qiao
      </p>
      <span>
        AJNS New Media GmbH | Muskauer Strasse 43 | 10997 Berlin | 手机: 183 0116 6035  | 电子邮箱: <a href="mailto:hello@kitchenstories.de">393395944@qq.com</a><br>法定代表人 du qiao 
      </span>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
.footer {
  @theme-font-color-deep: #222;
  @theme-font-color-deep-minus: #464646;
  @theme-font-color-shallow: #979797;
  @theme-font-family: Brandon,Helvetica,sans-serif,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
  @theme-font-weight: 600;

  border-top: 1px solid #b9b9b9; /*no*/
  padding-top: 32 * 2px;
  padding-left: 8 * 2px;
  padding-right: 8 * 2px;

  h2 {
    font-size: 40px;
    font-weight: @theme-font-weight;
    font-family: @theme-font-family;
    color: @theme-font-color-deep-minus;
    margin-bottom: 26px;
  }
  .social-links-2 {

    margin-bottom: 32 * 2px;
    line-height: 22 * 2px;

    h3 {
      font-size: 32px;
      font-weight: @theme-font-weight;
      font-family: @theme-font-family;
      color: @theme-font-color-deep-minus;
      line-height: 18 * 2px;
    }

    ul {
      font-size: 32px;
      font-weight: @theme-font-weight;
      font-family: @theme-font-family;
      color: @theme-font-color-deep-minus;
    }

    li {
      float: left;
      list-style-position: outside;
      text-align: left;
      margin-top: 40px;
    }

    a {
      padding-right: 34px;
    }

    img {
      width: 7 * 2px;
      height: 15 * 2px;
    }
  }

  .get-app {
    padding-top: 32 * 2px;
    padding-bottom: 40 * 2px;

    h3 {
      font-size: 32px;
      font-weight: @theme-font-weight;
      font-family: @theme-font-family;
      color: @theme-font-color-deep-minus;
    }

    img {
      width: 118 * 2px;
      height: 35 * 2px;
      margin-right: 10 * 2px;
      margin-top: 15 * 2px;
    }
  }

  .author {
    border-top: 1px solid #b9b9b9; /*no*/
    padding-top: 32 * 2px;
    padding-bottom: 32 * 2px;
    text-align: center;

    p {
      font-size: 32px;
      font-weight: 300;
      font-family: Brandon,Helvetica,sans-serif,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
      color: @theme-font-color-deep-minus;
      margin-bottom: 32 * 2px;
      
      img {
        width: 20 * 2px;
        height: 16 * 2px;
      }
    }

    span {
      font-size: 12.8px * 2;
      font-weight: 300;
      font-family: Brandon,Helvetica,sans-serif,"Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
      color: #8e8e8e;
      line-height: 17.28 * 2px;
    }
  }
}
</style>