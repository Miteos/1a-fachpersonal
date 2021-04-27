<template>
  <TabContent>
    <template #text>
      <text-card :text1="text1" :text2="text2" />
      <div class="list-align">
        <ul class="pl-4">
          <li class="font--larger py-3" style="list-style: none">
            <strong>{{ list.title }}</strong>
          </li>
          <li
            v-for="(l, i) in list.text"
            :key="l.i"
            class="font--standard ml-4 py-1"
            style="list-style: square"
          >
            {{ l }}
          </li>
        </ul>
      </div>
    </template>
    <template #image>
      <v-img
        contain
        src="/images/arbeitgeber/arbeit_1.jpg"
        style="width: auto; max-height: 700px"
      />
    </template>
  </TabContent>
</template>

<script>
import TextCard from '@/components/elements/TextCard'
import TabContent from '@/components/layout/TabContent'
export default {
  name: 'fachpersonal',
  components: {
    'text-card': TextCard,
    TabContent,
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

<style lang="scss">
@import 'assets/styles/mixins';
.list-align {
  & li {
    @include phones {
      margin-left: 5px;
    }
  }
}
</style>
