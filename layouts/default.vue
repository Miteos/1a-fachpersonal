<template>
  <div class="wrapper">
    <navigation />
    <banner />
    <v-app id="1">
      <Nuxt />
      <!--      <Footer />-->
    </v-app>
  </div>
</template>

<script>
import Nav from '@/components/layout/Nav'
import Banner from '~/components/layout/Banner'
import Footer from '~/components/layout/Footer'

export default {
  components: {
    Footer: Footer,
    navigation: Nav,
    banner: Banner,
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
@import '../assets/styles/colors';
.wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to right bottom,
    #003d7e 25%,
    #004888,
    #005393,
    #005f9c,
    #006aa6
  ) !important;
}
.v-application--wrap {
  min-height: 100%;
}
.theme--light.v-application {
  background: none;
}
</style>
