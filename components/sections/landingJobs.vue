<template>
  <section class="landing-jobs pt-12">
    <div class="landing-jobs--title">
      <h2>Ausgewählte Jobs</h2>
      <p>
        Hier sind einige Möglichkeiten mit den besten Unternehmen auf dem
        heutigen Markt. Treten Sie unserem Netzwerk bei und wir können
        zusammenarbeiten, um herauszufinden, was zu Ihnen passt.
      </p>
    </div>
    <div class="landing-jobs--cards">
      <v-card v-for="c in cards" :key="c.id" hover>
        <div>
          <img :src="c.img" />
        </div>
        <v-card-title> {{ c.title }}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>{{ c.text }} </v-card-text>
        <v-list>
          <v-list-item class="pl-0">
            <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
            <p class="ma-0">{{ c.vacancies }}</p></v-list-item
          >
          <v-list-item class="pl-0">
            <v-list-item-icon
              ><v-icon>mdi-clock-time-four-outline</v-icon></v-list-item-icon
            >
            <p class="ma-0">{{ c.type }}</p>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Jr. Java Developer',
          text:
            '5-8 years of experience as a java developer and at least 2 years managing IT projects.',
          vacancies: '22',
          type: 'Full-time',
          img: '/images/jobs/jobs_1.jpg',
          id: 1,
        },
        {
          title: 'Jr. Java Developer',
          text:
            '5-8 years of experience as a java developer and at least 2 years managing IT projects.',
          vacancies: '22',
          type: 'Full-time',
          id: 2,
          img: '/images/jobs/jobs_2.jpg',
        },
        {
          title: 'Jr. Java Developer',
          text:
            '5-8 years of experience as a java developer and at least 2 years managing IT projects.',
          vacancies: '22',
          type: 'Full-time',
          img: '/images/jobs/jobs_3.jpg',
          id: 3,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
.landing-jobs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #003d7e 25%,
    #004888,
    #005393,
    #005f9c,
    #006aa6
  );
  width: 100%;
  &--title {
    max-width: 800px;
    text-align: center;
    color: $secondary;
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
    max-width: 400px;
    font-size: 18px;
    margin: 100px 0;
    & img {
      min-width: 200px;
      height: 350px;
    }
    & .v-card__text {
      font-size: 18px;
    }
    &.v-card__title {
      font-size: 24px !important;
    }
  }
}
</style>
