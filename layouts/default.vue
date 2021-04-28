<template>
  <div class="wrapper">
    <navigation />
    <banner />
    <v-app id="1">
      <Nuxt />
      <v-speed-dial
        v-model="fab"
        fixed
        right
        :direction="direction"
        bottom
        transition="fab-transition"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="primary" light fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-arrow-up-bold</v-icon>
          </v-btn>
        </template>
        <v-card ripple min-width="200" max-width="300px" style="left: -75px">
          <v-card-title>Share</v-card-title>
          <v-divider></v-divider>
          <v-list nav>
            <v-list-item v-for="c in social" :key="c.title" class="dial-list">
              <v-icon color="primary" class="pr-5">{{ c.icon }}</v-icon>
              {{ c.title }}
            </v-list-item>
          </v-list>
        </v-card>
      </v-speed-dial>
    </v-app>
  </div>
</template>

<script>
import Nav from '@/components/layout/Nav'
import Banner from '~/components/layout/Banner'

export default {
  components: {
    navigation: Nav,
    banner: Banner,
  },
  data() {
    return {
      fab: false,
      direction: 'top',
      social: [
        {
          title: 'Facebook',
          icon: 'mdi-facebook',
        },
        {
          title: 'Instagram',
          icon: 'mdi-instagram',
        },
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
        },
        {
          title: 'WhatsApp',
          icon: 'mdi-whatsapp',
        },
      ],
    }
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
.dial-list {
  padding: 10px;
  transition: 0.3s ease-out;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: $background-grey;
    transition: 0.3s ease-in;
    cursor: pointer;
  }
}
</style>
