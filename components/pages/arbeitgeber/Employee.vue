<template>
  <TabContent>
    <template #text>
      <TextCard :text1="text1" :text2="text2" :text3="text3" :text4="text4"
    /></template>
    <template #image>
      <v-img
        contain
        src="/images/arbeitgeber/arbeit_7.jpg"
        style="width: auto; max-height: 600px; border-radius: 10px"
      />
    </template>
  </TabContent>
</template>

<script>
import TextCard from '@/components/elements/TextCard'
import TabContent from '@/components/layout/TabContent'
export default {
  name: 'employee',
  components: {
    TextCard,
    TabContent,
  },
  data() {
    return {
      text1:
        'Warum einen Personalvermittler? Es stellt sich oft als schwierig heraus, den richtigen\n' +
        'Mitarbeiter für ein Unternehmen zu finden. Das Arbeitsverhältnis sollte immer ein\n' +
        'Gleichgewicht zwischen Geben und Nehmen aufrechterhalten.',
      text2:
        'Wir übernehmen die Suche nach Ihnen, um Ihnen Zeit und bürokratischen Aufwand zu\n' +
        'ersparen.',
      text3:
        'Nachdem Sie uns, die 1A-Fachpersonal, beauftragt haben, beschäftigen wir uns mit Ihrer\n' +
        'Unternehmenskultur und Ihren individuellen Auswahlkriterien.',
      text4:
        'Unser Ziel ist es, die richtigen Mitarbeiter für Sie zu finden. Die Vergütung wird natürlich\n' +
        'nur im Falle einer Beschäftigung gezahlt!',
    }
  },
}
</script>
