<template>
  <v-container :fluid="$vuetify.breakpoint.lgAndDown">
    <v-row class="ma-0">
      <v-col cols="12" xl="8" lg="9" md="12" sm="12" class="px-0">
        <div class="mb-5">
          <v-card-title class="about--title">
            Alles was Sie über uns wissen sollten!
          </v-card-title>
          <v-divider
            :inset="$vuetify.breakpoint.lgAndUp"
            :style="{ borderColor: $vuetify.theme.themes.light.secondary }"
          />
          <v-card-text class="font--larger">
            <v-list color="transparent" dark>
              <v-list-item flat class="about--text py-3">
                <v-list-item-icon
                  ><v-icon :size="$vuetify.breakpoint.xs ? 25 : 50"
                    >mdi-run-fast</v-icon
                  ></v-list-item-icon
                >
                Schnell und einfach</v-list-item
              >
              <v-list-item class="about--text py-3"
                ><v-list-item-icon
                  ><v-icon :size="$vuetify.breakpoint.xs ? 25 : 50"
                    >mdi-account-tie</v-icon
                  ></v-list-item-icon
                >
                Individuell an Ihre Wünsche angepasst</v-list-item
              >
              <v-list-item class="about--text pt-3">
                <v-list-item-icon
                  ><v-icon :size="$vuetify.breakpoint.xs ? 25 : 50"
                    >mdi-professional-hexagon</v-icon
                  ></v-list-item-icon
                >
                Fachmann</v-list-item
              >
            </v-list>
          </v-card-text>
        </div>
      </v-col>
    </v-row>
    <div class="about ma-0">
      <v-row class="ma-0">
        <v-col xl="5" lg="6" md="12" class="px-0">
          <v-img
            style="border-radius: 10px"
            src="/images/about-us/about_1.jpg"
          />
        </v-col>
        <v-col xl="7" lg="6" md="12" class="pl-0">
          <div>
            <v-card-title class="about--title">Unser Ziel</v-card-title>
            <v-divider
              :inset="$vuetify.breakpoint.lgAndUp"
              :style="{ borderColor: $vuetify.theme.themes.light.secondary }"
            />
            <v-card-text class="font font--larger about--text"
              >Seit 2016 beschäftigen wir uns mit den Themen Personal,
              Personalbeschaffung und Personalmangel. Wir kommen ursprünglich
              aus der Transportbranche. Dort wurde uns schnell klar, dass
              zuverlässiges, pünktliches und gewissenhaftes Personal keine
              Selbstverständlichkeit ist. Aus diesem Grund haben wir uns
              entschlossen, verschiedene Konzepte für eine erfolgreiche
              Personalakquise zu entwickeln. Zeit ist ein wertvolles Gut, das
              sorgfältig aufgeteilt werden sollte.Unser Ziel ist es, Ihnen Zeit
              und bürokratischen Aufwand für Anwendungen zu sparen.
            </v-card-text>
          </div>
        </v-col>
      </v-row>
      <v-row class="ma-0 column-reverse">
        <v-col xl="7" lg="6" md="12" class="pl-0">
          <div>
            <v-card-title class="about--title">Unser Service</v-card-title>
            <v-divider
              :inset="$vuetify.breakpoint.lgAndUp"
              :style="{ borderColor: $vuetify.theme.themes.light.secondary }"
            />
            <v-card-text class="font font--larger about--text"
              >Nachdem wir Ihre Wünsche, Ihre Unternehmenskultur und Ihre Ideen
              kennengelernt haben, suchen wir nach Ihren zukünftigen
              Mitarbeitern. Wir wählen nur das Beste für Sie aus und senden
              Ihnen anonymisierte Kandidaten. Wir setzen auf langfristige
              Partnerschaften und stehen Ihnen daher während unserer
              Öffnungszeiten immer zur Seite, um Ratschläge und Fragen zu
              erhalten. Dies ist für Sie natürlich kostenlos. Die Vergütung wird
              erst gezahlt, wenn der Antragsteller akzeptiert wird. Dies finden
              Sie in unseren Allgemeinen Geschäftsbedingungen.
            </v-card-text>
          </div>
        </v-col>
        <v-col xl="5" lg="6" md="12" class="px-0">
          <v-img
            class="mt-5"
            style="border-radius: 10px"
            src="/images/about-us/about_1.jpg"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss">
@import 'assets/styles/mixins';
@import 'assets/styles/colors';
.about {
  color: white;
  & img {
    width: 100%;
    border-radius: 5px;
  }
  &--title {
    color: $secondary;
    font-size: 36px;
    word-break: break-word;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    @include phones {
      font-size: 24px;
      margin-bottom: 0;
      margin-top: 0;
      display: flex;
      justify-content: center;
    }
    @include midphones {
      font-size: 18px;
    }
    @include smallphones {
      font-size: 16px;
      margin-right: 0;
    }
  }
  &--text {
    color: $secondary;
    padding: 40px;
    @include phones {
      font-size: 20px !important;
      padding: 10px;
    }
    @include midphones {
      font-size: 14px !important;
    }
  }
}
.column-reverse {
  @include lowresmonitors {
    flex-direction: column-reverse;
  }
}
</style>
