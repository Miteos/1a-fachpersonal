<template>
  <div class="banner">
    <div class="banner--text">
      <h1 v-if="$route.name !== 'index'">{{ $route.name }}</h1>
      <h1 v-if="$route.name === 'index'">Text text</h1>
    </div>
    <div class="img-container">
      <img src="@/static/images/frontpage/banner.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
.banner {
  height: 100vh;
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to right bottom,
    #003d7e 25%,
    #004888,
    #005393,
    #005f9c,
    #006aa6
  );
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  & .img-container {
    & img {
      max-height: 900px;
      border-radius: 50px;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  &--text {
    color: $secondary;
    font-size: 42px;
  }
}
</style>
