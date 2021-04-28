<template>
  <TabContent>
    <template #text>
      <TextCard :text1="text1" :text2="text2" :text3="text3"
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
        'Warum eine Personalagentur? Es stellt sich oft als schwierig heraus, den richtigen Mitarbeiter für ein Unternehmen zu finden. Das Arbeitsverhältnis sollte immer ein Gleichgewicht zwischen Geben und Nehmen aufrechterhalten.',
      text2:
        'Wir übernehmen die Suche nach Ihnen, um Ihnen Zeit und bürokratischen Aufwand zu ersparen.',
      text3:
        'Nachdem Sie uns, die 1A-FachPersonal.de-Personalvermittlung, beauftragt haben, beschäftigen wir uns mit Ihrer Unternehmenskultur und Ihren individuellen Auswahlkriterien. Unser Ziel ist es, die richtigen Mitarbeiter für Sie zu finden. Die Vergütung wird natürlich nur im Falle einer Beschäftigung gezahlt.',
    }
  },
}
</script>
