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
export default {
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
        'Was Sie über 1A-Spezialisten als Arbeitgeber und Arbeitnehmer wissen sollten Die Suche nach Bewerbern in den größten Jobportalen.' +
          'Die Vorgespräche mit den Antragstellern.' +
          'Die Auswahl geeigneter Bewerber für Ihr Unternehmen',
        'Umgang mit Ihren Daten Ihre Daten sind bei uns sicher. Ihre Daten werden auf Basis der Allgemeinen Datenschutzverordnung (DSGVO) verarbeitet und gespeichert',
        'Unser Service Nach Erhalt Ihrer Unterlagen wird sich Ihr persönlicher Ansprechpartner innerhalb von 24 Stunden mit Ihnen in Verbindung setzen.',
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
  font-size: 32px !important;
  max-width: 800px;
  text-align: center;
  @include tablets {
    font-size: 26px !important;
    padding: 30px;
  }
  @include smallphones {
    font-size: 16px !important;
    padding: 30px;
  }
}
</style>
