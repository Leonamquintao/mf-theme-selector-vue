<template>
  <div id="app">
    <ThemeSelector :data="messages"></ThemeSelector>
  </div>
</template>

<script>

  import ThemeSelector from './components/ThemeSelector'

  export default {
    props: {
      messages: {
        type: String
      }
    },
    components: { ThemeSelector },
    mounted() {
      //this.messages = {"messages":[{"sender":"Shell","message":"teste de comunicação","at":"2019-07-29T11:22:39.323Z"},{"sender":"Shell","message":"teste 2","at":"2019-07-30T13:12:47.108Z"}],"theme": "theme-gray-blue-dark" }
    }
  }
</script>
