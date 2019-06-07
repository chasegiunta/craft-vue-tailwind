<template>
  <div class="hello">
    <img src="/assets/logo.png" />
    <h1 class="mb-4">{{ msg }}</h1>
    <p class="mb-3">
      You're viewing the <code>&#060;HelloWorld&#062;</code> component!
    </p>
    <p class="mb-3">
      If this text is white, you've successfully installed Tailwind!
    </p>

    <p class="mb-3">Passing in some data from twig:</p>

    <div
      class="mt-3 p-4 inline-block rounded-lg leading-loose bg-black text-left"
    >
      <code class="text-grey">
        <span class="text-white">Craft Version: </span>
        <span class="text-green-light">{{ info.craftVersion }}</span> (passed in
        as prop)<br />

        <span class="text-white">Environment: </span>
        <span class="text-green-light">{{ info.environment }}</span> (passed in
        as prop)<br />

        <span class="text-white">DB Name: </span>
        <span class="text-green-light"><slot></slot></span> (passed in through
        slot)
      </code>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["info"],
  data() {
    return {
      msg: "Hello World"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  @apply text-white;
}
h1,
h2 {
  font-weight: normal;
}
</style>