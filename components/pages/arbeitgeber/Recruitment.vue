<template>
  <v-row>
    <v-col cols="6"> <text-card :text1="text1" :text2="text2" /> </v-col>
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
  name: 'recruitment',
  components: {
    'text-card': TextCard,
  },
  data() {
    return {
      text1:
        '1A - Fachpersonal.vue steht für hochwertige, effiziente Personallösungen in allen Branchen und Sparten und gehört unter den Personalvermittlern zu den Marktführern für den deutschen Mittelstand im Münsterland. Wir vermitteln Ihrem Unternehmen qualifizierte Fach- und Führungskräfte zur Festanstellung und bieten strategische Lösungen für Ihren Personalbedarf. Unsere Services ermöglichen die notwendige Flexibilität, um den Anforderungen der Märkte gerecht zu werden. Mit unserer Personalberatung helfen wir Ihnen, Ihr Unternehmen erfolgreicher zu machen. Große Ideen brauchen gute Köpfe. Doch offene Stellen mit geeigneten Mitarbeitern (m/w/d) zu besetzen, wird schwieriger. Deshalb greifen Unternehmen im Rahmen der Personalplanung immer häufiger auf die direkte Personalvermittlung zurück.',
      text2:
        'Große Ideen brauchen gute Köpfe. Doch offene Stellen mit geeigneten Mitarbeitern (m/w/d) zu besetzen, wird schwieriger. Deshalb greifen Unternehmen im Rahmen der Personalplanung immer häufiger auf die direkte Personalvermittlung zurück',
    }
  },
}
</script>
