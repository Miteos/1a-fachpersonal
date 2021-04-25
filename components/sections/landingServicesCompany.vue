<template>
  <section :class="{ 'services--reverse': reverse }" class="services">
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col xl="6" lg="6" md="12" class="d-flex justify-center">
          <div class="services--img">
            <v-img
              max-height="620"
              :height="$vuetify.breakpoint.lgAndDown ? '100%' : 620"
              width="auto"
              src="/images/frontpage/landing-1.jpg"
            />
          </div>
        </v-col>
        <v-col xl="6" lg="6" md="12">
          <div class="services--text">
            <h2>Für Arbeitgeber</h2>
            <p>
              Wir begeben uns nachdem wir Ihre Wünsche, Unternehmenskultur und
              Vorstellungen kennengelernt haben auf die Suche nach Ihrem
              künftigen Personal. Wir suchen nur für Sie die besten Kandidaten
              aus und senden Ihnen dementsprechend anonymisierte
              Kandidatenprofile (m/w/d) zu.
            </p>
            <p>
              Wir setzen auf langfristige Partnerschaften und deshalb stehen wir
              Ihnen immer zu unseren Öffnungszeiten bzw. in der 24 – Stunden
              Hotline für Beratung und Fragen zur Seite. Dies ist für Sie
              selbstverständlich kostenlos.
            </p>
            <p>
              Die Vergütung erfolgt erst bei der Übernahme des Bewerbers dies
              können Sie jederzeit gerne in unseren AGB’s entnehmen.
            </p>
            <p>
              Melden Sie sich jetzt für ein unverbindliches Beratungsgespräch.
            </p>
            <v-btn
              dark
              width="200"
              :height="$vuetify.breakpoint.lgAndDown ? 35 : 40"
              color="#003D7E"
              to="/arbeitgeber"
              style="margin-top: 10px"
              >Weiterlesen</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
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
@import 'assets/styles/mixins';
.services {
  display: flex;
  flex-wrap: wrap;
  background-color: $background-grey;
  &--reverse {
    flex-direction: row-reverse;
  }
  &--img {
    width: 100%;
    & img {
      height: auto;
      width: 100%;
    }
  }
  &--text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    word-break: break-word;
    text-align: left;
    position: relative;
    box-sizing: border-box;

    @include biggermonitors {
      padding: 20px;
      height: 100%;
    }
    padding: 60px;
    height: 620px;
    width: 100%;
    & h2 {
      padding-bottom: 50px;
      font-size: 35px;
      text-transform: uppercase;
      @include biggermonitors {
        font-size: 24px;
        padding-bottom: 20px;
      }
    }
    & p {
      padding-bottom: 10px;
      @include biggermonitors {
        font-size: 14px;
        padding-bottom: 5px;
      }
    }
  }
}
</style>
