<template>
  <section class="landing-boxes py-12">
    <div class="landing-boxes--title">
      <h2>Unsere Erfahrung im Umgang mit Arbeitgebern und Arbeitnehmern.</h2>
    </div>
    <div class="landing-boxes--cards">
      <v-card
        rounded
        class="rounded-lg"
        hover
        elevation="5"
        v-for="c in cards"
        :key="c.id"
      >
        <v-card-title
          style="font-size: 72px"
          class="d-flex justify-center pa-12"
        >
          {{ c.title }}</v-card-title
        >
        <v-card-text class="d-flex justify-center pa-5" style="font-size: 24px"
          >{{ c.text }}
        </v-card-text>
      </v-card>
    </div>
  </section>
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
    }
    & p {
      padding-top: 20px;
      margin: 0 !important;
    }
  }
  &--cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    justify-content: center;
    align-items: center;
    min-width: 400px;
    font-size: 24px;
    margin: 100px 0;
    & .v-card__text {
      font-size: 18px;
    }
    &.v-card__title {
      font-size: 45px !important;
    }
  }
}
</style>
