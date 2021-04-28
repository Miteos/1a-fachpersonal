<template>
  <TabContent>
    <template #text>
      <v-divider
        class="py-5"
        :inset="$vuetify.breakpoint.lgAndUp"
        :style="{ borderColor: $vuetify.theme.themes.light.primary }"
      />
      <div>
        <ul v-for="(l, i) in list" :key="l.i" class="pl-0 pb-5">
          <li class="font--standard ml-6 py-1" style="list-style: square">
            {{ l }}
          </li>
        </ul>
        <h2>Unsere Leistungen</h2>
        <v-expansion-panels focusable flat inset>
          <v-expansion-panel v-for="(item, i) in panels" :key="i">
            <v-expansion-panel-header>{{
              item.title
            }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </template>
    <template #image>
      <v-img
        contain
        src="/images/arbeitgeber/arbeit_8.jpg"
        style="width: auto; max-height: 600px; border-radius: 10px"
      />
    </template>
  </TabContent>
</template>

<script>
import TextCard from '@/components/elements/TextCard'
import TabContent from '@/components/layout/TabContent'
export default {
  name: 'services',
  components: {
    TextCard,
    TabContent,
  },
  data() {
    return {
      list: [
        'Wir entwickeln das Werbekonzept für Stellenanzeigen, die Ihr Unternehmen repräsentieren.',
        'Wir stellen für Sie Kontakt zu den Kandidaten her.',
        'Wir sind jederzeit Ihr Ansprechpartner',
      ],
      panels: [
        {
          title: 'Stellenanzeigen',
          content:
            'In den größten Portalen finden wir die richtigen Bewerber für Sie.',
        },
        {
          title: 'Der erste Kontakt',
          content:
            'Wir stellen den ersten Kontakt zu den Bewerbern her. Dabei stellen wir sicher, dass die beruflichen Fähigkeiten Ihren individuellen Auswahlkriterien entsprechen.',
        },
        {
          title: 'Vergütung',
          content:
            'Die Vergütung wird nur im Falle einer Beschäftigung gezahlt.',
        },
        {
          title: 'Kein Personalmangel mehr',
          content:
            'Wenn Sie Fragen haben oder interessiert sind, zögern Sie bitte nicht, uns per Telefon oder E-Mail zu kontaktieren...',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
</style>
