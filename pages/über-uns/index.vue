<template>
  <v-container>
    <v-row class="ma-0">
      <v-col cols="8">
        <div class="mb-5">
          <v-card-title style="font-size: 35px; color: white">
            Alles was Sie über uns wissen sollten!
          </v-card-title>
          <v-divider
            inset
            :style="{ borderColor: $vuetify.theme.themes.light.secondary }"
          />
          <v-card-text class="font--larger">
            <v-list color="transparent" dark>
              <v-list-item flat>
                <v-list-item-icon
                  ><v-icon size="50">mdi-run-fast</v-icon></v-list-item-icon
                >
                Schnell und einfach</v-list-item
              >
              <v-list-item
                ><v-list-item-icon
                  ><v-icon size="50">mdi-account-tie</v-icon></v-list-item-icon
                >
                Individuell an Ihre Wünsche angepasst</v-list-item
              >
              <v-list-item>
                <v-list-item-icon
                  ><v-icon size="50"
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
      <v-row class="mt-12 ma-0" style="margin-bottom: 100px !important">
        <v-col cols="5">
          <img src="@/static/images/about-us/about_1.jpg" />
        </v-col>
        <v-col cols="7">
          <div class="mb-8">
            <v-card-title style="font-size: 35px">Unser Ziel</v-card-title>
            <v-divider
              inset
              :style="{ borderColor: $vuetify.theme.themes.light.secondary }"
            />
            <v-card-text class="font font--larger pa-12"
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
      <v-row class="ma-0 my-12">
        <v-col cols="7">
          <div class="mb-5">
            <v-card-title style="font-size: 35px">Unser Service</v-card-title>
            <v-divider
              inset
              :style="{ borderColor: $vuetify.theme.themes.light.secondary }"
            />
            <v-card-text class="font font--larger pa-12"
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
        <v-col></v-col>
        <v-col class="d-flex justify-center align-center" cols="4">
          <v-card
            elevation="5"
            class="d-flex justify-center align-center pa-4"
            height="300"
          >
            <v-card-text
              class="font text-center"
              :style="{ color: $vuetify.theme.themes.light.tertiary }"
              style="font-size: 35px"
            >
              Arbeiten Sie jetzt zusammen und finden Sie Ihren neuen Mitarbeiter
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style lang="scss">
.about {
  color: white;
  & img {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
