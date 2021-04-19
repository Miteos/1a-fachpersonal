<template>
  <!--  <landing-contact v-if="$route.name === 'kontakt'" />-->
  <div v-if="$route.name === 'index'" class="banner">
    <div class="banner--text">
      <h1 v-if="$route.name !== 'index'">{{ computedTitle }}</h1>
      <h1 v-if="$route.name === 'index'">Text text</h1>
    </div>
    <div class="img-container">
      <img src="@/static/images/frontpage/banner.png" />
    </div>
  </div>
  <div v-else class="small-banner">
    <div class="small-banner--text">
      <h1 v-if="$route.name !== 'index'">
        {{ computedSmallTitle }}
      </h1>
    </div>
  </div>
</template>

<script>
import landingContact from '@/components/sections/landingContact'
export default {
  name: 'Banner',
  components: {
    'landing-contact': landingContact,
  },
  data() {
    return {
      small: false,
    }
  },
  mounted() {
    console.log(this.$route)
  },
  computed: {
    computedTitle() {
      this.$route.name.toUpperCase()
    },
    computedSmallTitle() {
      if (
        this.$route.path === '/arbeitspl%C3%A4tze/webentwickler-php-javascript'
      )
        return 'arbeitsplätze'
      if (this.$route.name !== '/') return this.$route.name.replace('-', ' ')
    },
  },
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
.small-banner {
  height: 30vh;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  &--text {
    padding: 50px 50px 75px;
    color: $secondary;
    font-size: 32px;
    text-transform: capitalize;
  }
}
.banner {
  height: 100vh;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
