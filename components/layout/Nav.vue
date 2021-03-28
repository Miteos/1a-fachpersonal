<template>
  <v-app>
    <nav class="navbar" id="nav">
      <nuxt-link to="/">
        <img src="@/static/images/logo_1.jpg" alt="logo" />
      </nuxt-link>
      <ul>
        <NuxtLink v-for="l in links" :to="l.to"
          ><li class="nav-links">
            {{ l.title }}
          </li></NuxtLink
        >
      </ul>
    </nav>
  </v-app>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
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
          to: '/uber-uns',
        },
        {
          id: 4,
          title: 'Kontakt',
          to: '/kontakt',
        },
      ],
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
          }
        } else {
          if (nav_classes.contains('shrink') === true) {
            nav_classes.toggle('shrink')
          }
        }
      })
    })
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
.navbar {
  padding: 20px 50px;
  width: 100%;
  margin: auto;
  transition: all 0.5s;
  display: flex;
  justify-content: space-between;
  position: fixed;
  background: transparent;
  z-index: 10;
  & ul {
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  & img {
    max-height: 75px;
    transition: all 0.5s;
    border-radius: 5px;
  }
  & img:hover {
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
  }
}
.navbar.shrink {
  padding: 5px 50px;
  background: $secondary;
  color: $main;
  & .nav-links:hover {
    border-bottom: 1px solid $main;
    color: $main !important;
  }
  & .nav-links {
    color: $main !important;
  }
  & a {
    color: $main !important;
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
</style>
