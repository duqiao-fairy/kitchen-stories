<template>
  <div class="mint-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="mint-msgbox" v-show="value">
        <div class="mint-msgbox-header" v-if="title !== ''">
          <div class="mint-msgbox-title">{{ title }}</div>
        </div>
        <div class="mint-msgbox-content" v-if="message !== ''">
          <div class="mint-msgbox-message" v-html="message"></div>
          <div class="mint-msgbox-input" v-show="showInput">
            <input v-model="inputValue" :placeholder="inputPlaceholder" ref="input">
            <div class="mint-msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{ editorErrorMessage }}</div>
          </div>
        </div>
        <div class="mint-msgbox-btns">
          <button :class="[ cancelButtonClasses ]" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
          <button :class="[ confirmButtonClasses ]" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
  @import "../../../src/style/var.css";

  @component-namespace mint {
    @component msgbox {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: #fff;
      width: 85%;
      border-radius: calc(2 *3)px;
      font-size: calc(2 *16)px; /*px*/
      -webkit-user-select: none;
      overflow: hidden;
      backface-visibility: hidden;
      transition: .2s;

      @descendent header {
        padding: calc(2 *15)px 0 0; /*px*/
      }

      @descendent content {
        padding: calc(2 *10)px calc(2 *20)px calc(2 *15)px;
        border-bottom: 1px solid #ddd; /*no*/
        min-height: calc(2 *36)px;/*px*/
        position: relative;
      }

      @descendent input {
        padding-top: calc(2 *15)px;
        & input {
          border: 1px solid #dedede; /*no*/
          border-radius: calc(2 *5)px; /*px*/
          padding: calc(2 *4)px calc(2 *5)px;
          width: 100%;
          appearance: none;
          outline: none;
        }
        & input.invalid {
          border-color: #ff4949;
          &:focus {
            border-color: #ff4949;
          }
        }
      }

      @descendent errormsg {
        color: red;
        font-size: calc(2 *12)px; /*px*/
        min-height: calc(2 *18)px;/*px*/
        margin-top: calc(2 *2)px;
      }

      @descendent title {
        text-align: center;
        padding-left: 0;
        margin-bottom: 0;
        font-size: calc(2 *16)px; /*px*/
        font-weight: bold;
        color: #333;
      }

      @descendent message {
        color: #999;
        margin: 0;
        text-align: center;
        line-height: calc(2 *36)px;/*px*/
      }

      @descendent btns {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: calc(2 *40)px;/*px*/
        line-height: calc(2 *40)px;/*px*/
      }

      @descendent btn {
        line-height: calc(2 *35)px;/*px*/
        display: block;
        background-color: #fff;
        flex: 1;
        margin: 0;
        border: 0;
        font-size: calc(16 * 2)px; /*px*/

        &:focus {
          outline: none;
        }

        &:active {
          background-color: #fff;
        }
      }

      @descendent cancel {
        width: 50%;
        border-right: 1px solid #ddd; /*no*/
        &:active {
          color: #000;
        }
      }

      @descendent confirm {
        color: $color-theme;
        width: 50%;
        &:active {
         color: $color-theme;
        }
      }
    }
  }

  .msgbox-bounce-enter {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.7);
  }
  .msgbox-bounce-leave-active {
    opacity: 0;
    transform: translate3d(-50%, -50%, 0) scale(0.9);
  }
</style>
<style src="mint-ui/src/style/popup.css"></style>

<script type="text/babel">
  let CONFIRM_TEXT = '确定';
  let CANCEL_TEXT = '取消';

  import Popup from 'mint-ui/src/utils/popup';

  export default {
    mixins: [ Popup ],

    props: {
      modal: {
        default: true
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: false
      },
      closeOnClickModal: {
        default: true
      },
      closeOnPressEscape: {
        default: true
      },
      inputType: {
        type: String,
        default: 'text'
      }
    },

    computed: {
      confirmButtonClasses() {
        let classes = 'mint-msgbox-btn mint-msgbox-confirm ' + this.confirmButtonClass;
        if (this.confirmButtonHighlight) {
          classes += ' mint-msgbox-confirm-highlight';
        }
        return classes;
      },
      cancelButtonClasses() {
        let classes = 'mint-msgbox-btn mint-msgbox-cancel ' + this.cancelButtonClass;
        if (this.cancelButtonHighlight) {
          classes += ' mint-msgbox-cancel-highlight';
        }
        return classes;
      }
    },

    methods: {
      doClose() {
        this.value = false;
        this._closing = true;

        this.onClose && this.onClose();

        setTimeout(() => {
          if (this.modal && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
          }
          this.bodyOverflow = null;
          this.bodyPaddingRight = null;
        }, 200);
        this.opened = false;

        if (!this.transition) {
          this.doAfterClose();
        }
      },

      handleAction(action) {
        if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
          return;
        }
        var callback = this.callback;
        this.value = false;
        callback(action);
      },

      validate() {
        if (this.$type === 'prompt') {
          var inputPattern = this.inputPattern;
          if (inputPattern && !inputPattern.test(this.inputValue || '')) {
            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
            this.$refs.input.classList.add('invalid');
            return false;
          }
          var inputValidator = this.inputValidator;
          if (typeof inputValidator === 'function') {
            var validateResult = inputValidator(this.inputValue);
            if (validateResult === false) {
              this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
              this.$refs.input.classList.add('invalid');
              return false;
            }
            if (typeof validateResult === 'string') {
              this.editorErrorMessage = validateResult;
              return false;
            }
          }
        }
        this.editorErrorMessage = '';
        this.$refs.input.classList.remove('invalid');
        return true;
      },

      handleInputType(val) {
        if (val === 'range' || !this.$refs.input) return;
        this.$refs.input.type = val;
      }
    },

    watch: {
      inputValue() {
        if (this.$type === 'prompt') {
          this.validate();
        }
      },

      value(val) {
        this.handleInputType(this.inputType);
        if (val && this.$type === 'prompt') {
          setTimeout(() => {
            if (this.$refs.input) {
              this.$refs.input.focus();
            }
          }, 500);
        }
      },

      inputType(val) {
        this.handleInputType(val);
      }
    },

    data() {
      return {
        title: '',
        message: '',
        type: '',
        showInput: false,
        inputValue: null,
        inputPlaceholder: '',
        inputPattern: null,
        inputValidator: null,
        inputErrorMessage: '',
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: CONFIRM_TEXT,
        cancelButtonText: CANCEL_TEXT,
        confirmButtonClass: '',
        confirmButtonDisabled: false,
        cancelButtonClass: '',
        editorErrorMessage: null,
        callback: null
      };
    }
  };
</script>
