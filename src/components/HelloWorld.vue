<template>
  <div class="hello">
    <img src="@/assets/logo.png">
    <h1 class="mb-4">{{ msg }}</h1>
    <p>You're viewing the <code>&#060;HelloWorld&#062;</code> component!</p>
    <p>If this text is white, you've successfully installed Tailwind!</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<!-- You can add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@tailwind utilities;
.hello {
  @apply .text-white
}
h1, h2 {
  font-weight: normal;
}
</style>
