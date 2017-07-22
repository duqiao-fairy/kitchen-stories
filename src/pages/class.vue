<!--
  组件功能
  姓名 时间
-->
<template>
  
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

const classPrefix = 'hello-vue'

@Component({
  mixins: [],

  props: {

  },

  components: {

  },

  computed: {

  },

  watch: {

  },

  filters: {

  },

  methods: {

  }
})

export default class VueComponent extends Vue {
  classPrefix = classPrefix

  data = {}

  get computedName () {

  }

  created () {

  }

  mounted () {
  
  }

  render (h) {
    return <div class={classPrefix}>

    </div>
  }
}

</script>

<style lang="less" scoped>
@class-prefix: ~'hello-vue';

.@{class-prefix} {

}

</style>