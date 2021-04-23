<template>
  <v-row>
    <v-col cols="9">
      <v-card class="job_form_card">
        <h1 class="card_title">
          {{ jobName }}
        </h1>
        <v-spacer></v-spacer>
        <div class="inner_followed">
          <v-row>
            <v-col class="d-flex py-2" cols="5" lg="2" md="3" sm="3">
              <img
                class="pr-2"
                style="max-height: 20px"
                src="@/static/images/icons/tiny1.svg"
              />

              Arbeitgeber:
            </v-col>
            <v-col class="py-2" cols="7" lg="10" md="9" sm="9">
              <h4 style="font-weight: 400; color: #2e9adc">
                {{ jobBranch }}
              </h4>
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-row>
            <v-col class="py-2" cols="5" lg="2" md="3" sm="3">
              <div class="d-flex">
                <img
                  class="pr-2"
                  style="max-height: 20px"
                  src="@/static/images/icons/tiny5.svg"
                />
                <span>Kategorie:</span>
              </div>
            </v-col>
            <v-col
              cols="7"
              lg="10"
              md="9"
              sm="9"
              class="py-2"
              style="margin-top: 4px; line-height: 1.4em"
            >
              {{ jobCategories }}
            </v-col>
          </v-row>
          <v-spacer></v-spacer>
          <v-row>
            <v-col class="d-flex py-2" cols="5" lg="2" md="3" sm="3">
              <img
                class="pr-2"
                style="max-height: 20px"
                src="@/static/images/icons/tiny6.svg"
              />
              <span> Arbeitsplatz:</span>
            </v-col>
            <v-col class="py-2" cols="7" lg="10" md="9" sm="9">{{
              jobLocation
            }}</v-col>
          </v-row>
        </div>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card height="233px" class="job_form_card">
        <h1 class="card_title py-2">Kontakt</h1>
        <v-card-text class="d-flex align-center flex-column">
          <v-btn width="300" dark color="primary">
            <v-icon class="pr-2">mdi-mail</v-icon>
            <a
              style="color: white; text-decoration: none"
              href="mailto:pasu@1a-fachpersonal.de"
              >pasu@1a-fachpersonal.de</a
            >
          </v-btn>
          <v-btn width="300" dark color="primary" class="my-3">
            <v-icon class="pr-2">mdi-phone</v-icon>
            <a
              style="color: white; text-decoration: none"
              href="tel:+49 17631795158 "
              >+49 17631795158
            </a>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    jobCategories: {
      type: Array,
    },
    jobName: {
      type: String,
      required: false,
    },
    jobLocation: {
      type: String,
      required: false,
    },
    jobBranch: {
      type: String,
      required: false,
    },

    data() {
      return {
        backgroundImage: 'background-image',
      }
    },
  },
}
</script>

<style lang="scss">
.list_card .v-list-item {
  font-weight: 100;
  min-height: 36px;
  padding: 0 !important;
}
.list_card .v-list-item span {
  font-weight: 100 !important;
}
.deadline {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  direction: ltr;
  margin: 0;
  border: 0;
  zoom: 1;
  width: 38px;
  box-sizing: border-box;
  padding: 3px;
  position: absolute;
  left: auto;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  right: 30px;
  top: 25px;
  min-width: 90px;
  height: 90px;
  background: #fc4443;
  border-radius: 100px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font: 100 12px Circular, Arial, Helvetica, sans-serif;
  color: #fff;
  -webkit-box-pack: center;
  justify-content: center;
  letter-spacing: 0em;
  background-image: linear-gradient(141deg, #fc734d 0%, #f9872c 100%);
  @media screen and (max-width: 680px) {
    right: 20px;
    top: 20px;
    font-size: 10px;
    min-width: 75px;
    height: 75px;
  }
}
.deadline em {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  direction: ltr;
  text-align: center;
  font: 100 12px Circular, Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  line-height: 22px;
  margin: 0;
  font-style: normal;
  font-size: 36px;
  display: inline-block;
  font-weight: 700;
  color: #fff;
  width: 100%;
  padding: 1px 0 6px;
  letter-spacing: 0;
  @media screen and (max-width: 680px) {
    font-size: 26px;
    padding: 0;
    letter-spacing: -0.02em;
  }
}
.card_title {
  font: normal 12px/16px Circular, Arial, Helvetica, sans-serif;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Circular, Arial, Helvetica, sans-serif;
  direction: ltr;
  clear: both;
  letter-spacing: -0.005em;
  border: none;
  color: #333;
  height: auto;
  font-weight: 900;
  font-size: 36px;
  margin: 0;
  box-sizing: border-box;
  padding: 0 95px 30px 0;
  line-height: 1.1em;
  @media screen and (max-width: 680px) {
    font-size: 20px;
    padding-bottom: 50px;
  }
}
.job_form_card {
  border-radius: 10px !important;
  padding: 25px 35px 20px;
  -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1) !important;
  background: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 20px;
  @media screen and (max-width: 480px) {
    padding: 20px;
  }
}
.inner_followed {
  min-height: 120px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
