<template>
  <div id="app">
    <app-header></app-header>
    <event-guide></event-guide>
    <event-list></event-list>
    <event-detail></event-detail>
  </div>
</template>

<script>
export default {
  name: "main",
  data () {
    return {
      events: [],
    }
  },
  created(){
    fetch("./api.json").then((response)=>{
      return response.json()
    }).then((json)=>{
      this.events = json.events
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 480px;
  margin: 2em auto;
  /*margin-top: 60px;*/
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: .5em 1em;
}

a {
  color: #42b983;
  cursor: pointer;
}
</style>
