<template>
  <v-row>
    <v-col cols="6">
      <text-card :text1="text1" :text2="text2" :text3="text3" />
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
  name: 'employee',
  components: {
    'text-card': TextCard,
  },
  data() {
    return {
      text1:
        'Warum eine Personalagentur? Es stellt sich oft als schwierig heraus, den richtigen Mitarbeiter für ein Unternehmen zu finden. Das Arbeitsverhältnis sollte immer ein Gleichgewicht zwischen Geben und Nehmen aufrechterhalten.',
      text2:
        'Wir übernehmen die Suche nach Ihnen, um Ihnen Zeit und bürokratischen Aufwand zu ersparen.',
      text3:
        'Nachdem Sie uns, die 1A-FachPersonal.de-Personalvermittlung, beauftragt haben, beschäftigen wir uns mit Ihrer Unternehmenskultur und Ihren individuellen Auswahlkriterien. Unser Ziel ist es, die richtigen Mitarbeiter für Sie zu finden. Die Vergütung wird natürlich nur im Falle einer Beschäftigung gezahlt.',
    }
  },
}
</script>
