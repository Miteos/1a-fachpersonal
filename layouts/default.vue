<template>
  <div class="wrapper">
    <navigation />
    <banner />
    <v-app>
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
}
</script>

<style lang="scss">
@import '../assets/styles/colors';
.wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
