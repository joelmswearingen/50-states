<template>
  <div id="app">
    <Header></Header>
    <RouterView></RouterView> <!-- this component is determined by VueRouter, reviewing browser URL and loading corresponding component here. Mappings in router/index.js > routes -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    Header, 
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
