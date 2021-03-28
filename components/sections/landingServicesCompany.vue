<template>
  <section :class="{ 'services--reverse': reverse }" class="services">
    <div class="services--img">
      <img src="@/static/images/frontpage/landing-1.jpg" />
    </div>
    <div class="services--text">
      <h2>Für Arbeitgeber</h2>
      <p>
        Wir begeben uns nachdem wir Ihre Wünsche, Unternehmenskultur und
        Vorstellungen kennengelernt haben auf die Suche nach Ihrem künftigen
        Personal. Wir suchen nur für Sie die besten Kandidaten aus und senden
        Ihnen dementsprechend anonymisierte Kandidatenprofile (m/w/d) zu.
      </p>
      <p>
        Wir setzen auf langfristige Partnerschaften und deshalb stehen wir Ihnen
        immer zu unseren Öffnungszeiten bzw. in der 24 – Stunden Hotline für
        Beratung und Fragen zur Seite. Dies ist für Sie selbstverständlich
        kostenlos.
      </p>
      <p>
        Die Vergütung erfolgt erst bei der Übernahme des Bewerbers dies können
        Sie jederzeit gerne in unseren AGB’s entnehmen.
      </p>
      <p>Melden Sie sich jetzt für ein unverbindliches Beratungsgespräch.</p>
      <v-btn
        dark
        width="200"
        height="40"
        color="#003D7E"
        style="margin-top: 10px"
        >Read more</v-btn
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'Landing-services-company',
  props: {
    reverse: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
.services {
  display: flex;
  flex-wrap: wrap;
  background-color: $background-grey;
  &--reverse {
    flex-direction: row-reverse;
  }
  &--img {
    width: 50%;
    max-height: 620px;
    & img {
      max-height: 620px;
      width: 100%;
    }
  }
  &--text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 60px;
    height: 620px;
    & h2 {
      padding-bottom: 50px;
      font-size: 35px;
      text-transform: uppercase;
    }
    & p {
      padding-bottom: 10px;
    }
  }
}
</style>
