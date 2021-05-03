<template>
  <v-container class="pa-0" fluid>
    <section class="contact">
      <v-row
        class="d-flex"
        :class="{ 'flex-column-reverse': $vuetify.breakpoint.mdAndDown }"
      >
        <v-col cols="12" xl="4" lg="4" md="12" class="contact--left">
          <div></div>
        </v-col>
        <v-col
          xl="8"
          lg="8"
          md="12"
          cols="12"
          :class="{ 'contact--right dark': dark }"
          class="contact--right"
        >
          <div class="contact--right--text">
            <h1 class="contact--right--title">
              Nehmen Sie Kontakt auf, sagen Sie Hallo!
            </h1>
            <p class="mb-10">
              Haben Sie ein paar Fragen, die Sie stellen möchten? Möchtest du
              etwas darüber wissen? der Rekrutierungsprozess? Schreiben Sie uns
              eine Nachricht, einen Text oder einen Anruf.
            </p>
            <v-row v-for="items in info" :key="items.icon" class="py-1 ma-0">
              <v-col
                cols="2"
                sm="2"
                lg="1"
                md="1"
                v-if="$vuetify.breakpoint.smAndUp"
                ><v-icon
                  size="45"
                  class="pt-1"
                  :color="$vuetify.theme.themes.light.secondary"
                  >{{ items.icon }}</v-icon
                ></v-col
              >
              <v-col cols="12" sm="10" lg="11" md="11" class="pad--x">
                <h3 class="pb-1 pad--x contact--right--title">
                  {{ items.title }}
                </h3>
                <a
                  class="pad--x"
                  :href="'tel:' + items.text"
                  v-if="items.type === 'button'"
                >
                  <v-icon class="pr-5" color="tertiary"
                    >mdi-perm_phone_msg </v-icon
                  >{{ items.text }}</a
                >
                <div class="pad--x">
                  <p v-if="items.type === 'text'">
                    {{ items.text }}
                  </p>
                  <nuxt-link v-if="items.type === 'link'" to="/arbeitsplätze">{{
                    items.text
                  }}</nuxt-link>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
      <v-card class="contact--card rounded-lg" elevation="5">
        <v-card-title class="contact--right--title">
          Senden Sie Ihre Nachricht</v-card-title
        >
        <v-card-text>
          <v-text-field
            v-model="mailForm.first_name"
            filled
            label="Name"
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="mailForm.last_name"
            filled
            label="Nachname"
            color="primary"
          ></v-text-field>
          <v-text-field
            v-model="mailForm.from"
            filled
            label="E-Mail-Addresse"
            color="primary"
          ></v-text-field>
          <v-textarea
            v-model="mailForm.message"
            filled
            label="Botschaft"
            color="primary"
          ></v-textarea>
          <file-upload label="cv" v-model="mailForm.file" />
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn
            right
            @click="sendMail"
            dark
            width="200"
            height="40"
            color="#003D7E"
            style="margin-top: 10px"
            >Nachricht senden</v-btn
          >
        </v-card-actions>
      </v-card>
    </section>
  </v-container>
</template>

<script>
import fileUpload from '@/components/elements/form_elements/fileUpload'
export default {
  components: {
    fileUpload,
  },
  name: 'landingContact',
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mailForm: {
        first_name: '',
        last_name: '',
        from: '',
        message: '',
        file: '',
      },
      info: [
        {
          icon: 'mdi-mail',
          title: 'Schreiben Sie uns eine E-Mail',
          type: 'text',
          text:
            '\n' +
            'Verwenden Sie das Kontaktformular, um uns eine Nachricht zu senden oder nach unserem Pool talentierter Kandidaten für Ihr medizinisches Geschäft zu fragen. pasu@1a-fachpersonal.de',
        },
        {
          icon: 'mdi-phone',
          title: 'Rufen Sie uns an',
          type: 'button',
          text: '+4917631795158',
        },
        {
          icon: 'mdi-clipboard-account-outline',
          type: 'link',
          title: 'Siehe Stellenangebote',
          text:
            '\n' +
            'Schauen Sie sich unsere Stellenangebote an, es sind nur einige unserer Angebote.',
        },
      ],
    }
  },
  methods: {
    sendMail() {
      const sub = this.mailForm.first_name + ' ' + this.mailForm.last_name
      this.$mail.send({
        from: this.mailForm.from,
        subject: sub,
        text: this.mailForm.message,
        auth: {
          user: '16ec7dcf7c736b',
          pass: '5f37923245b091',
        },
        attachments: [
          {
            filename: this.mailForm.file,
            path: 'http://localhost:5000/cvs/' + this.mailForm.file,
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/colors';
@import 'assets/styles/mixins';
.contact {
  position: relative;
  min-height: 500px;
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
  flex-direction: row;
  &--left {
    background-color: $background-grey;
    min-height: 900px;
    @include phones {
      min-height: 800px;
    }
  }
  & .dark {
    background-color: $secondary-darker-grey;
    background-image: none;
  }
  &--right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: linear-gradient(
      to right bottom,
      #003d7e 25%,
      #004888,
      #005393,
      #005f9c,
      #006aa6
    );
    @include highresmonitors {
      padding-left: 10px;
      justify-content: flex-end;
    }
    @include lowresmonitors {
      padding-left: 10px;
      justify-content: center;
    }
    &--text {
      max-width: 700px;
      padding-right: 100px;
      color: $secondary;
      @include biggermonitors {
        padding: 40px 40px 40px 100px;
      }
      @include lowresmonitors {
        padding-left: 20px;
      }
      @include phones {
        padding: 20px;
      }
      & p {
        @include phones {
          margin-bottom: 10px !important;
        }
      }
    }
    &--title {
      font-size: 32px;
      @include phones {
        font-size: 26px;
      }
      @include smallphones {
        font-size: 22px;
      }
    }
  }
  &--card {
    padding: 50px 50px;
    position: absolute;
    min-width: 800px;
    top: 75px;
    left: 13%;
    @include biggermonitors {
      min-width: 700px;
      left: 3%;
    }
    @include highresmonitors {
      min-width: 500px;
      left: 3%;
    }
    @include lowresmonitors {
      min-width: 1000px;
      top: 650px;
      left: 10%;
    }
    @include tablets {
      min-width: 90%;
      margin: auto;
      top: 750px;
      left: 5%;
    }
    @include phones {
      min-width: 100%;
      padding: 10px;
      top: 575px;
      left: 0;
    }
    @include midphones {
      top: 525px;
    }
    @include smallphones {
      top: 725px;
    }
    @include smallestphones {
      top: 800px;
    }
  }
}
.v-application a {
  color: gold;
}
</style>
