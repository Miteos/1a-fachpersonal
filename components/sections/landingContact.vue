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
            <h1 class="contact--right--title">Get In Touch, Say Hello!</h1>
            <p class="mb-10">
              Have a few questions you want to ask? Do you want to know about
              the recruitment process? Drop us a note, text, or call.
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
              <v-col cols="12" sm="10" lg="11" md="11">
                <h3 class="pb-1 pl-2 contact--right--title">
                  {{ items.title }}
                </h3>
                <a
                  class="pl-2"
                  :href="'tel:' + items.text"
                  v-if="items.type === 'button'"
                >
                  <v-icon class="pr-5" color="tertiary"
                    >mdi-perm_phone_msg </v-icon
                  >{{ items.text }}</a
                >
                <div class="pl-2">
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
        <v-card-title class="contact--right--title"
          >Send your message</v-card-title
        >
        <v-card-text>
          <v-text-field filled label="Name" color="primary"></v-text-field>
          <v-text-field filled label="Last Name" color="primary"></v-text-field>
          <v-text-field
            filled
            label="E-mail Address"
            color="primary"
          ></v-text-field>
          <v-textarea filled label="Message" color="primary"></v-textarea>
          <v-file-input filled placeholder="Your CV"></v-file-input>
        </v-card-text>
        <v-card-actions class="d-flex justify-end">
          <v-btn
            right
            dark
            width="200"
            height="40"
            color="#003D7E"
            style="margin-top: 10px"
            >Send message</v-btn
          >
        </v-card-actions>
      </v-card>
    </section>
  </v-container>
</template>

<script>
export default {
  name: 'landingContact',
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      info: [
        {
          icon: 'mdi-mail',
          title: 'E-mail us',
          type: 'text',
          text:
            'Use the contact form to send us a message or ask about our pool of talented candidates for your medical business. pasu@1a-fachpersonal.de',
        },
        {
          icon: 'mdi-phone',
          title: 'Call Us',
          type: 'button',
          text: '+4917631795158',
        },
        {
          icon: 'mdi-clipboard-account-outline',
          type: 'link',
          title: 'See Job Openings',
          text: 'Check out our Job Openings, it’s just a few of our listings.',
        },
      ],
    }
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
  flex-direction: row;
  &--left {
    background-color: $background-grey;
    min-height: 900px;
    @include phones {
      min-height: 700px;
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
      top: 650px;
      left: 5%;
    }
    @include phones {
      min-width: 100%;
      padding: 10px;
      top: 525px;
      left: 0;
    }
    @include midphones {
      top: 525px;
    }
    @include smallphones {
      top: 600px;
    }
  }
}
.v-application a {
  color: gold;
}
</style>
