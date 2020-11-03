<template>
  <div id="app">
    <Header />
    <test-form />
  </div>
</template>

<script>
import TestForm from './components/TestForm.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    TestForm,
    Header
  }
}
</script>

<style>

</style>
