<template>
  <section class="services" data-aos="fade-down-left" data-aos-duration="800">
    <v-container fluid class="pa-0">
      <v-row style="flex-direction: row-reverse" no-gutters>
        <v-col xl="6" lg="6" md="12">
          <div class="services--img">
            <v-img
              max-height="620"
              :height="$vuetify.breakpoint.lgAndDown ? '100%' : 640"
              width="auto"
              src="/images/frontpage/landing-2.jpg"
            />
          </div>
        </v-col>
        <v-col xl="6" lg="6" md="12">
          <div class="services--text">
            <h2>FÜR Arbeitnehmer</h2>
            <p>
              Wir vermitteln Ihnen eine Festanstellung bei Ihrem
              Wunschunternehmen.
            </p>
            <p>
              Die Personalvermittlung, auch Direktvermittlung genannt, ist kurz
              gesagt die Übernahme des Rekrutierungsprozesses eines Unternehmens
              durch einen Personalvermittler. Das bedeutet, wenn ein Unternehmen
              nach Bewerbern sucht, hat es die Möglichkeit, einen
              Personalvermittler, wie zum Beispiel die 1A - Fachpersonal, für
              die Personalvermittlung zu beauftragen. Der Personalvermittler
              schreibt dann die vom Unternehmen zu besetzenden Stellen aus,
              übernimmt die Bewerbungsgespräche und vermittelt so Personal an
              das Unternehmen – daher der Name Personalvermittlung. Bei einer
              Personalvermittlung geht es immer um eine Festanstellung beim
              Kundenunternehmen.
            </p>
            <p>
              „Wähle einen Beruf, den du liebst, und du brauchst keinen Tag in
              deinem Leben mehr zu arbeiten.“<br />
              – Konfuzius
            </p>
            <v-btn
              dark
              width="200"
              :height="$vuetify.breakpoint.lgAndDown ? 35 : 40"
              color="#003D7E"
              to="/arbeitskräfte"
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
  name: 'Landing-services-jobseeker',
  props: {
    reverse: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
}
</script>

<style lang="scss"></style>
