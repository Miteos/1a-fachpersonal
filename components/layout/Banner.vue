<template>
  <div v-if="$route.name === 'index'" class="banner">
    <div class="banner img-container" v-if="$vuetify.breakpoint.mdAndUp">
      <v-img
        data-aos="zoom-out-down"
        data-aos-duration="800"
        contain
        :height="$vuetify.breakpoint.mdAndDown ? 400 : 600"
        width="auto"
        src="/images/frontpage/banner_2.png"
      />
    </div>
    <div class="banner--text">
      <h1
        data-aos="fade-left"
        data-aos-duration="800"
        v-if="$route.name !== 'index'"
      >
        {{ computedTitle }}
      </h1>
      <h1
        data-aos="fade-left"
        data-aos-duration="900"
        v-if="$route.name === 'index'"
      >
        Rekrutierung - Arbeitssuche - HR
      </h1>
      <grey-btn
        data-aos="fade-right"
        data-aos-duration="1000"
        text="kontaktiere uns"
        to="/kontakt"
      />
    </div>
  </div>
  <div
    v-else
    class="small-banner"
    data-aos="zoom-out-down"
    data-aos-duration="800"
  >
    <div class="small-banner--text">
      <h1 v-if="$route.name !== 'index'">
        {{ computedSmallTitle }}
      </h1>
    </div>
  </div>
</template>

<script>
import landingContact from '@/components/sections/landingContact'
import greyBtn from '@/components/elements/buttons/greyBtn'
export default {
  name: 'Banner',
  components: {
    'landing-contact': landingContact,
    greyBtn,
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
      if (this.$route.path.includes('arbeitspl%C3%A4tze'))
        return 'arbeitsplätze'
      if (this.$route.name !== '/') return this.$route.name
    },
  },
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
@import 'assets/styles/mixins';
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
    padding: 50px 50px 50px;
    color: $secondary;
    font-size: 24px;
    text-transform: capitalize;
    @include phones {
      font-size: 16px;
    }
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
  justify-content: center;
  @include phones {
    height: 100vh;
  }
  @include tablets {
    flex-direction: column;
  }
  & .img-container {
    width: 40%;
    margin-top: 100px;
    @include tablets {
      width: 80%;
    }
    & img {
      max-height: 800px;
      border-radius: 50px;
      background-repeat: no-repeat;
      background-size: cover;
      @include tablets {
        max-height: 400px;
        width: 80%;
      }
    }
  }
  &--text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.7em;
    width: 50%;
    height: 50vh;
    color: $secondary;
    font-size: 20px;
    text-align: left;
    @include biggermonitors {
      font-size: 18px;
    }
    @include highresmonitors {
      font-size: 16px;
    }
    @include lowresmonitors {
      font-size: 14px;
    }
    @include tablets {
      width: 100%;
      font-size: 18px;
      height: 80vh;
    }
    @include phones {
      width: 100%;
      font-size: 16px;
    }
    @include smallphones {
      width: 100%;
      font-size: 12px;
    }
    & h1 {
      padding-bottom: 100px;
      @include phones {
        padding: 10px;
        margin-bottom: 20px;
        font-size: 30px;
      }
      @include smallphones {
        padding: 10px;
        margin-bottom: 20px;
        font-size: 16px;
      }
    }
  }
}
</style>
