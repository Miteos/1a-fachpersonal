<template>
  <nav class="navbar" id="nav">
    <nuxt-link to="/">
      <img src="@/static/images/logo_1.jpg" alt="logo" />
    </nuxt-link>
    <v-spacer />
    <ul v-if="$vuetify.breakpoint.mdAndUp">
      <NuxtLink v-for="l in links" :to="l.to"
        ><li class="nav-links">
          {{ l.title }}
        </li></NuxtLink
      >
    </ul>
    <div v-if="$vuetify.breakpoint.smAndDown">
      <v-btn icon fab class="hamburger" @click="overlay = !overlay"
        ><v-icon>mdi-menu</v-icon></v-btn
      >
      <v-overlay :value="overlay" opacity="1" class="overlay-container">
        <div v-if="overlay" class="nav-overlay">
          <v-row no-gutters>
            <v-col
              class="mt-8"
              style="
                display: flex;
                justify-content: end;
                align-items: end;
                height: 10vh;
                padding-top: 20px;
              "
            >
              <v-spacer />
              <v-btn icon large fab @click="overlay = !overlay"
                ><v-icon>mdi-close</v-icon></v-btn
              >
            </v-col>
          </v-row>
          <div>
            <ul class="nav-mobile-list" v-if="overlay">
              <li v-for="l in links" @click="overlay = !overlay">
                <NuxtLink :to="l.to">{{ l.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </v-overlay>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      overlay: false,
      links: [
        {
          id: 1,
          title: 'Arbeitgeber',
          to: '/arbeitgeber',
        },
        {
          id: 2,
          title: 'Arbeitskräfte',
          to: '/arbeitskräfte',
        },
        {
          id: 3,
          title: 'Arbeitsplätze',
          to: '/arbeitsplätze',
        },
        {
          id: 4,
          title: 'Über uns',
          to: '/über-uns',
        },
        {
          id: 4,
          title: 'Kontakt',
          to: '/kontakt',
        },
      ],
      shrink: false,
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', function () {
        const navbar = document.getElementById('nav')
        const nav_classes = navbar.classList
        if (document.documentElement.scrollTop >= 100) {
          if (nav_classes.contains('shrink') === false) {
            nav_classes.toggle('shrink')
            this.shrink = false
          }
        } else {
          if (nav_classes.contains('shrink') === true) {
            nav_classes.toggle('shrink')
            this.shrink = true
          }
        }
      })
    })
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/mixins';
.navbar {
  padding: 20px 50px;
  width: 100%;
  margin: auto;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: transparent;
  z-index: 10;
  @include lowresmonitors {
    padding: 10px 10px;
  }
  & .hamburger {
    color: $secondary;
  }
  & ul {
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  & img {
    max-height: 75px;
    transition: all 0.5s;
    border-radius: 5px;
    @include phones {
      max-height: 60px;
    }
  }
  & img:hover {
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  }
}
.navbar.shrink {
  padding: 5px 50px;
  background: $secondary;
  color: $main;
  @include tablets {
    padding: 10px 10px;
  }
  & .nav-links:hover {
    border-bottom: 1px solid $main;
    color: $main !important;
  }
  & .nav-links {
    color: $main;
  }
  & .hamburger {
    color: $main;
  }
  & a {
    color: $main;
  }
}
.nav-overlay {
  min-width: 320px;
  max-width: 740px;
  min-height: 100vh;
  & ul {
    display: flex;
    flex-direction: column !important;
    & li {
      padding: 20px 0;
      list-style: none;
    }
  }
}
.nav-mobile-list {
  height: 80vh;
  display: flex;
  justify-content: space-evenly;
  & li a {
    color: $secondary !important;
    font-size: 1.7em;
  }
}
@keyframes mobileMenu {
  from {
    opacity: 0;
    transform: rotateY(-30deg) translateY(100px);
  }
  to {
    opacity: 1;
    transform: rotateY(0deg) translateY(0);
  }
}
@for $i from 1 through 5 {
  .nav-mobile-list > li:nth-child(#{$i}) {
    animation: {
      name: mobileMenu;
      duration: 400ms;
      delay: 80ms * $i;
      timing-function: linear;
      fill-mode: backwards;
    }
  }
}
.nav-links {
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: $secondary;
  cursor: pointer;
  transition: 0.5s ease-out;
  @include lowresmonitors {
    font-size: 16px;
  }
  &:hover {
    margin-right: 10px;
    border-bottom: 1px solid $secondary-grey;
  }
}
a {
  height: 100%;
  color: $secondary;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
a:hover {
  transition: ease-in 0.5s;
}
.overlay-container >>> .v-overlay__content {
  width: 100%;
  height: 100%;
}
</style>
