<template>
  <div id="app">
    <div>
      <input  type='radio' name='status' checked="checked" @change='toAll'>すべて
      <input  type='radio' name='status' @change='toWorking'>作業中
      <input  type='radio' name='status' @change='toDone'>完了
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    toAll() {
      this.$router.push({name: 'Main'})
    },
    toWorking() {
      this.$router.push({name: 'Working'})
    },
    toDone() {
      this.$router.push({name: 'Done'})
    },
  }
}
</script>
