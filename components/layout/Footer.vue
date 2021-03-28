<template>
  <v-footer
    dark
    padless
    style="background-image: linear-gradient(to right bottom, rgb(0 61 126) 70%, rgb(0 72 136); padding: 0 60px"
  >
    <v-card
      flat
      tile
      class="lighten-1 white--text text-center"
      color="transparent"
      style="width: 100%"
    >
      <div class="footer-info">
        <div class="pt-4 d-flex">
          <img src="@/static/images/logo_1.jpg" alt="logo" />
        </div>
        <div>
          <v-list color="transparent">
            <v-list-item class="d-flex justify-center">
              <span>1A - FachPersonal.de </span>
            </v-list-item>
            <v-list-item class="d-flex justify-center">
              <span> Agentur für Zeitarbeit <br />und Arbeitsvermittlung</span>
            </v-list-item>
          </v-list>
        </div>
        <div>
          <v-list color="transparent" class="endlist">
            <v-list-item class="d-flex">
              <span
                >Adresa: Ul.Josipa Jurja Strossmayera 21, 32000, Vukovar
              </span>
            </v-list-item>
            <v-list-item class="d-flex">
              <span>Telefon: 032 524 119</span>
            </v-list-item>
            <v-list-item class="d-flex">
              <span>RADNO VRIJEME: pon-pet: 08-16 h'</span>
            </v-list-item>
          </v-list>
        </div>
      </div>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>1A - FachPersonal.de</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      social: [
        {
          icons: 'mdi-facebook',
          to: 'https://www.facebook.com/MedicalManagementCroatiaGroup',
        },
        {
          icons: 'mdi-linkedin',
          to: 'https://www.linkedin.com/company/mmcgrupa/',
        },
        {
          icons: 'mdi-instagram',
          to: 'https://www.instagram.com/mmcgroup_doo/',
        },
      ],
      icons: ['mdi-facebook', 'mdi-linkedin', 'mdi-instagram'],
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/mixins.scss';
.footer-info {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: end;
  & img {
    max-height: 100px;
    width: auto;
    border-radius: 10px;
  }
  @include tablets {
    grid-template-columns: 1fr;
    place-items: center;
  }
  & .endlist {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: right;
    @include tablets {
      text-align: center !important;
      justify-content: center !important;
      place-items: center;
    }
    & div {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
