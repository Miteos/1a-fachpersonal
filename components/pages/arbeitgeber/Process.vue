<template>
  <TabContent>
    <template #text>
      <TextCard :text1="text1" />
      <div>
        <ul v-for="(l, i) in list" :key="l.i" class="pl-4">
          <li class="font--larger py-3" style="list-style: none">
            {{ l.title }}
          </li>
          <li
            class="font--standard ml-12 py-1"
            style="list-style: square"
            v-for="text in l.content"
          >
            {{ text }}
          </li>
        </ul>
      </div>
    </template>
    <template #image>
      <v-img
        contain
        src="/images/arbeitgeber/arbeit_1.jpg"
        style="width: auto; max-height: 450px"
      />
    </template>
  </TabContent>
</template>

<script>
import TextCard from '@/components/elements/TextCard'
import TabContent from '@/components/layout/TabContent'
export default {
  name: 'process',
  components: {
    TextCard,
    TabContent,
  },
  data() {
    return {
      text1:
        'Wir bieten für alle Branchen Personalvermittlung an. Unsere Bewerberdatenbank enthält insbesondere qualifiziertes Personal für Maschinenbau und Handwerk, kaufmännische Berufe und Verwaltung, Technik und IT sowie Luft- und Raumfahrt.',
      list: [
        {
          title: 'Klärung der Anforderung und Zielanalyse',
          content: [
            'Überprüfung unseres Kandidatenpools',
            'Erstellung von Bewerberprofilen',
            'Ausschreibung passgenauer Stellenanzeigen',
          ],
        },
        {
          title: 'Kontakt, Selektion und Einstellung',
          content: [
            'Sichtung und Auswahl eingehender Bewerbungen',
            'Ansprache potentieller Kandidaten (Active Sourcing)',
            'Generierung passgenauer Kandidatenvorschläge',
            'aktive Begleitung des Einstellungsprozesses',
          ],
        },
      ],
    }
  },
}
</script>
