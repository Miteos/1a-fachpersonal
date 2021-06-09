<template>
  <v-container fluid class="pa-0">
    <section
      class="landing-boxes py-12"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <div class="landing-boxes--title">
        <h2>
          Unsere Erfahrungen im Umgang mit Arbeitgebern und Arbeitnehmern.
        </h2>
      </div>
      <v-row style="width: 100%" justify="center">
        <v-col
          v-for="c in cards"
          :key="c.id"
          xl="3"
          lg="3"
          md="7"
          sm="8"
          cols="12"
        >
          <v-card
            rounded
            hover
            elevation="3"
            class="landing-boxes--cards rounded-lg"
          >
            <v-card-title
              style="font-size: 50px"
              :style="{ 'font-size: 72px': $vuetify.breakpoint.mdAndDown }"
              class="d-flex justify-center pa-9"
              :class="{ 'pa-6': $vuetify.breakpoint.mdAndDown }"
            >
              {{ c.title }}</v-card-title
            >
            <v-card-text class="d-flex text-center justify-center pa-5"
              >{{ c.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'landingBoxes',
  data() {
    return {
      cards: [
        {
          title: '68+',
          text: 'Kandidaten bewerben sich jeden Monat* bei uns',
          id: 1,
        },
        {
          title: '+10 Jahre',
          text: 'Langjährige Erfahrung im Umgang mit Personal',
          id: 2,
        },
        {
          title: '1',
          text: 'Persönlicher Kontakt für Sie',
          id: 3,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/mixins';
.landing-boxes {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $background-grey;
  width: 100%;
  &--title {
    max-width: 800px;
    text-align: center;
    font-size: 45px !important;
    & h2 {
      font-size: 45px;
      @include phones {
        font-size: 26px;
      }
      @include smallphones {
        font-size: 22px;
      }
    }
    & p {
      padding-top: 20px;
      margin: 0 !important;
    }
  }
  &--cards {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 250px;
    min-width: 100%;
    font-size: 18px;
    margin: 100px 0;
    @include highresmonitors {
      margin: 25px 0;
    }
    @include phones {
      font-size: 16px;
      margin: 20px 0;
    }
    & .v-card__text {
      font-size: 18px;
    }
    &.v-card__title {
      font-size: 45px !important;
    }
  }
}
</style>
