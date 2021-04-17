<template>
  <v-row>
    <v-col cols="6" class="pa-4">
      <v-divider
        inset
        :style="{ borderColor: $vuetify.theme.themes.light.primary }"
      />
      <v-list color="transparent">
        <v-list-item
          flat
          class="boxes font--larger"
          v-for="l in list"
          :key="l.title"
        >
          <v-list-item-icon>
            <v-icon size="50">
              {{ l.icon }}
            </v-icon>
          </v-list-item-icon>
          {{ l.text }}
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="6" class="justify-end">
      <v-row>
        <v-col cols="6" class="pa-4">
          <v-img
            src="/images/arbeitgeber/arbeit_1.jpg"
            style="width: auto; height: 50%"
          />
          <v-img
            contain
            src="/images/arbeitgeber/arbeit_2.jpg"
            style="width: auto; height: 50%"
          />
        </v-col>
        <v-col cols="6" class="pa-4">
          <v-img
            contain
            src="/images/arbeitgeber/arbeit_3.jpg"
            style="width: auto; max-height: 97%"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Industries',
  data() {
    return {
      list: [
        {
          icon: 'mdi-screw-machine-flat-top',
          text: 'Maschinenbau',
        },
        {
          icon: 'mdi-hammer-screwdriver',
          text: 'Handwerk',
        },
        {
          icon: 'mdi-handshake',
          text: 'Kaufmännische Berufe und Verwaltung',
        },
        {
          icon: 'mdi-desktop-classic',
          text: 'Technik und IT',
        },
        {
          icon: 'mdi-airplane-takeoff',
          text: 'Luft- und Raumfahrt',
        },
        {
          icon: 'mdi-infinity',
          text: 'Andere',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.boxes {
  transition: 0.3s ease-out;
  padding: 10px;
  &:hover {
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2) !important;
    transition: 0.3s ease-in;
    border-radius: 10px;
    margin-left: 50px;
  }
}
</style>
