<template>
  <v-carousel
    data-aos="fade-down-left"
    data-aos-duration="800"
    cycle
    :height="$vuetify.breakpoint.xs ? 400 : 600"
    hide-delimiter-background
    show-arrows-on-hover
    class="background-image"
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-row class="fill-height" align="center" justify="center">
        <div class="text--center carousel-text">
          {{ slide }}
        </div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  name: 'landingCarousel',
  data() {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'Personalberatung und Headhunt aus einer Hand      -> 1A-Fachpersonal.',
        ' Dank eines nahezu perfekten Executive Search Instrumentariums sowie herausragender Managementdiagnostiken und Organisationsdiagnostiken findet die 1A - Fachpersonal für Sie die passenden Führungskräfte und Manager.',
        'Dabei profitiert Ihr Unternehmen von der Beratungskompetenz und Branchenerfahrung.',
        'Ihre Daten sind bei uns sicher. Ihre Daten werden auf\n' +
          'Basis der Allgemeinen Datenschutzverordnung (DSGVO)\n' +
          'verarbeitet und gespeichert.',
        'Nach Erhalt Ihrer Unterlagen wird sich garantiert Ihr\n' +
          'persönlicher Ansprechpartner innerhalb von 24 Stunden\n' +
          'mit Ihnen in Verbindung setzen.',
      ],
    }
  },
}
</script>
<style lang="scss">
@import 'assets/styles/mixins';
.background-image {
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('~static/images/frontpage/carousel.jpg');
  background-size: cover;
  /*background-size: 100% 20%;*/
  background-position: center;
  background-repeat: no-repeat;
}
.carousel-text {
  font-size: 28px !important;
  max-width: 800px;
  text-align: center;
  @include tablets {
    font-size: 24px !important;
    padding: 30px;
  }
  @include smallphones {
    font-size: 14px !important;
    padding: 30px;
  }
}
</style>
