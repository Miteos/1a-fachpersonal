<template>
  <v-row>
    <v-col cols="6">
      <text-card :text1="text1" :text2="text2" />
      <div>
        <ul class="pl-4">
          <li class="font--larger py-3" style="list-style: none">
            <strong>{{ list.title }}</strong>
          </li>
          <li
            v-for="(l, i) in list.text"
            :key="l.i"
            class="font--standard ml-12 py-1"
            style="list-style: square"
          >
            {{ l }}
          </li>
        </ul>
      </div>
    </v-col>
    <v-col cols="6">
      <v-img
        contain
        src="/images/arbeitgeber/arbeit_1.jpg"
        style="width: auto; max-height: 415px"
    /></v-col>
  </v-row>
</template>

<script>
import TextCard from '@/components/elements/TextCard'
export default {
  name: 'fachpersonal',
  components: {
    'text-card': TextCard,
  },
  data() {
    return {
      list: {
        title: 'Ihre Vorteile',
        text: [
          'Interessante Positionen bei attraktiven Unternehmen in verschiedenen Branchen',
          'Zugang zu Stellenangeboten, die sonst nirgendwo ausgeschrieben sind. Weder in Zeitungen, im Internet noch bei der Bundesagentur für Arbeit',
          'Unkomplizierte und kostenfreie Vermittlung in einen spannenden Job',
          'Intensive Vorbereitung auf Vorstellungsgespräche',
          'Umfangreiche Beratung und Unterstützung innerhalb der gesamten Bewerbungsphase bis hin zur Unterzeichnung des Arbeitsvertrag.',
        ],
      },
      text1:
        'Als innovativer Personalvermittler unterstützen wir Sie bei der Suche nach einer neuen beruflichen Herausforderung. Dabei vermitteln wir Sie direkt zur Festanstellung bei unseren Kundenunternehmen.',
      text2:
        'Durch die aktive Ansprache von passenden Unternehmen bieten sich Ihnen die besten Chancen. Dabei profitieren Sie nicht nur von unserer jahrelangen Erfahrung, sondern auch von unseren Kontakten und unserem Netzwerk.',
    }
  },
}
</script>
