<template>
  <section class="contact">
    <div class="contact--left"></div>
    <div :class="{ 'contact--right dark': dark }" class="contact--right">
      <div class="contact--right--text">
        <h1 class="contact--right--title">Get In Touch, Say Hello!</h1>
        <p>
          Have a few questions you want to ask? Do you want to know about the
          recruitment process? Drop us a note, text, or call.
        </p>
        <v-row v-for="items in info" class="py-4">
          <v-col cols="1"
            ><v-icon
              size="45"
              class="pt-1"
              :color="$vuetify.theme.themes.light.secondary"
              >{{ items.icon }}</v-icon
            ></v-col
          >
          <v-col>
            <h3 class="pb-1 contact--right--title">{{ items.title }}</h3>
            <a :href="'tel:' + items.text" v-if="items.type === 'button'">
              <v-icon class="pr-2" color="tertiary">mdi-perm_phone_msg </v-icon
              >{{ items.text }}</a
            >
            <p v-if="items.type === 'text'">{{ items.text }}</p>
            <nuxt-link v-if="items.type === 'link'" to="/arbeitsplätze">{{
              items.text
            }}</nuxt-link>
          </v-col>
        </v-row>
      </div>
    </div>

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
.contact {
  position: relative;
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: row;
  &--left {
    width: 30%;
    background-color: $background-grey;
  }
  & .dark {
    background-color: $secondary-darker-grey;
    background-image: none;
  }
  &--right {
    width: 70%;
    background-image: linear-gradient(
      to right bottom,
      #003d7e 25%,
      #004888,
      #005393,
      #005f9c,
      #006aa6
    );
    &--text {
      padding: 100px 100px 300px 500px;
      color: $secondary;
    }
    &--title {
      font-size: 32px;
    }
  }
  &--card {
    padding: 75px 75px;
    position: absolute;
    min-width: 800px;
    top: 75px;
    left: 10%;
  }
}
.v-application a {
  color: gold;
}
</style>
