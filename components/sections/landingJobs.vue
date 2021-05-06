<template>
  <v-container fluid class="pa-0">
    <section
      class="landing-jobs pt-12"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <div class="landing-jobs--title">
        <h2>Ausgewählte Jobs</h2>
        <p>
          Hier sind einige Möglichkeiten mit den besten Unternehmen auf dem
          heutigen Markt. Treten Sie unserem Netzwerk bei und wir können
          zusammenarbeiten, um herauszufinden, was zu Ihnen passt.
        </p>
      </div>
      <v-row style="width: 100%">
        <v-col v-for="c in cards" :key="c.id" xl="4" lg="4" md="12">
          <v-card
            data-aos="fade-up-right"
            data-aos-duration="1200"
            :to="'arbeitsplätze' + c.to"
            hover
            class="landing-jobs--cards"
          >
            <div>
              <v-img :src="c.img" />
            </div>
            <v-card-title> {{ c.title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text>{{ c.text }} </v-card-text>
            <v-list>
              <v-list-item class="pl-0">
                <v-list-item-icon
                  ><v-icon>mdi-map-marker</v-icon></v-list-item-icon
                >
                <p class="ma-0">{{ c.vacancies }}</p></v-list-item
              >
              <v-list-item class="pl-0">
                <v-list-item-icon
                  ><v-icon
                    >mdi-clock-time-four-outline</v-icon
                  ></v-list-item-icon
                >
                <p class="ma-0">{{ c.type }}</p>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Full-Stack-Entwickler m/w/d',
          text:
            '5-8 years of experience as a java developer and at least 2 years managing IT projects.',
          vacancies: 'Ennigerloh ',
          type: 'Vollzeit',
          img: '/images/jobs/jobs_1.jpg',
          id: 1,
          to: '/full-stack-entwickler',
        },
        {
          title: 'Webentwickler (m/w/d) PHP / JavaScript',
          text:
            '5-8 years of experience as a java developer and at least 2 years managing IT projects.',
          vacancies: '\n' + 'Köln / Sachsenheim',
          type: 'Vollzeit',
          id: 2,
          img: '/images/jobs/jobs_2.jpg',
          to: '/webentwickler-php-javascript',
        },
        {
          title: 'IT Support Engineer (m/w/d)',
          text:
            '5-8 years of experience as a java developer and at least 2 years managing IT projects.',
          vacancies: 'Dortmund',
          type: 'Vollzeit',
          img: '/images/jobs/jobs_3.jpg',
          id: 3,
          to: '/it-support-engineer',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/mixins';
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
      @include phones {
        font-size: 32px;
        margin: 20px 0 20px 0;
      }
    }
    & p {
      padding-top: 20px;
      margin: 0 !important;
      @include phones {
        padding: 10px;
      }
    }
  }
  &--cards {
    justify-content: center;
    align-items: center;
    font-size: 18px;
    margin: 100px 0;
    @include highresmonitors {
      font-size: 16px;
      margin: 50px 0;
    }
    @include phones {
      font-size: 16px;
      margin: 20px 0;
    }
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
