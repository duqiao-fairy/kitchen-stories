<template>
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? `${8 * dpr}px ${10 * dpr}px` : `${16 * dpr}px ${20 * dpr}px` }">
      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : `${8 * dpr} ${10 * dpr}px` }">{{ message }}</span>
    </div>
  </transition>
</template>

<style>
  /**
   * add by duqiao 
   * 组件标签中的style显示的rem, 需要跟 dpr想对应
   */
  @component-namespace mint {
    @component toast {
      position: fixed;
      max-width: 80%;
      border-radius: calc(5 * 2)px; /*px*/
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
      box-sizing: border-box;
      text-align: center;
      z-index: 1000;
      transition: opacity .3s linear;
  
      @descendent icon {
        display: block;
        text-align: center;
        font-size: calc(56 * 2)px; /*px*/
      }
      
      @descendent text {
        font-size: calc(14 * 2)px; /*px*/
        display: block;
        line-height: 1.3;
        text-align: center;
      }
      
      @when placetop {
        top: calc(50 * 2)px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      @when placemiddle {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      
      @when placebottom {
        bottom: calc(50 * 2)px;
        left: 50%;
        transform: translate(-50%, 0);
      }
      
      @descendent pop-enter, pop-leave-active {
        opacity: 0;
      }
    }
  }
</style>

<script type="text/babel">
  /**
   * add by duqiao 
   * 组件标签中的style显示的rem, 需要跟 dpr想对应
   */
  const flexible = window.lib && window.lib.flexible

  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },

    data() {

      return {
        px2rem: flexible.px2rem,
        dpr: flexible.dpr,
        visible: false
      };
    },

    computed: {
      customClass() {
        var classes = [];
        switch (this.position) {
          case 'top':
            classes.push('is-placetop');
            break;
          case 'bottom':
            classes.push('is-placebottom');
            break;
          default:
            classes.push('is-placemiddle');
        }
        classes.push(this.className);

        return classes.join(' ');
      }
    }
  };
</script>