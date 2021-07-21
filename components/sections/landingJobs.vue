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
          Treten Sie unserem Netzwerk bei und wir können zusammenarbeiten, um
          herauszufinden, welche neue Herausforderung am besten zu Ihnen passt.
        </p>
      </div>
      <v-row style="width: 100%">
        <v-col v-for="c in cards" :key="c.id" xl="4" lg="4" md="12">
          <v-card
            :to="'arbeitsplätze' + c.to"
            hover
            class="landing-jobs--cards"
          >
            <div>
              <v-img :src="c.img" />
            </div>
            <v-card-title> {{ c.title }}</v-card-title>
            <v-divider></v-divider>
            <div class="landing-jobs--cards--content">
              <v-card-text
                >{{ c.text }}
                <ul v-for="l in c.list">
                  <li>{{ l }}</li>
                </ul>
              </v-card-text>
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
            </div>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  data() {
    return {
      cards: [
        {
          title: 'Full-Stack-Entwickler m/w/d',
          text:
            'Eigenverantwortliche Beratung, Gestaltung & Umsetzung der IT-Projekte unserer Kunden\n' +
            '\n' +
            'Technische Umsetzung komplexer fachlicher Anforderungen in klassischen und agilen Entwicklungsteams\n' +
            '\n' +
            'Entwicklung moderner Client-Server Anwendungen mit Web Frontend und Java Backend für unsere Kunden\n' +
            '\n' +
            'partnerschaftliche Zusammenarbeit & offene Kommunikation mit unseren Kunden & Stakeholdern',
          list: null,
          vacancies: 'Ennigerloh ',
          type: 'Vollzeit',
          img: '/images/jobs/jobs_1.jpg',
          id: 1,
          to: '/full-stack-entwickler',
        },
        {
          title: 'Webentwickler (m/w/d) PHP / JavaScript',
          text:
            'Konzeption, Planung und Umsetzung umfangreicher Online-Projekte/Webapplikationen\n' +
            'Weiterentwicklung bereits bestehender Systeme\n' +
            'Implementieren und Testen von Softwarekomponenten',
          list: [
            'Konzeption, Planung und Umsetzung umfangreicher Online-Projekte/Webapplikationen',
            'Weiterentwicklung bereits bestehender Systeme',
            'Implementieren und Testen von Softwarekomponenten',
          ],
          vacancies: '\n' + 'Köln / Sachsenheim',
          type: 'Vollzeit',
          id: 2,
          img: '/images/jobs/jobs_2.jpg',
          to: '/webentwickler-php-javascript',
        },
        {
          title: 'IT Support Engineer (m/w/d)',
          text:
            'In Deinem Arbeitsalltag im IT-Team bei Swyx übernimmst du als IT-Support-Ingenieur innerhalb unserer Organisation die erste Anlaufstelle für ICT-bezogene Fragen',
          list: [
            'die Beantwortung von Fragen und hilfst Mitarbeitern weiter',
            'Mitverantwortung für das Management der (Office IT) Windows Server, der Microsoft Azure Plattform und der Microsoft Office 365 Umgebung die',
            'Bearbeitung von 1st und 2nd line internen ITSupportanfragen\n',
          ],
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
    min-height: 900px;
    margin: 100px 0;
    &--content {
      display: flex;
      flex-direction: column;
    }
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
