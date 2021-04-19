<template>
  <v-row>
    <v-col cols="6">
      <text-card :text1="text1" :text2="text2" :text3="text3" :text4="text4" />
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
  name: 'career',
  components: {
    'text-card': TextCard,
  },
  data() {
    return {
      text1:
        'Wir werden für Sie eine Arbeit suchen, die Sie ausfüllt und befriedigt. Eine Position, in der Sie sich entfalten können, in der die Rahmenfaktoren Ihrem Können, Ihrer Qualifikation und Ihren Erwartungen entsprechen. Dazu gehören auch Faktoren wie Betriebsklima, Arbeitsumgebung, Unternehmenskultur, Führungsstil, Arbeitsweg, Arbeitszeitflexibilität, Familienfreundlichkeit und die Möglichkeit, im Home Office zu arbeiten. Wir achten auf alles, was Ihnen wichtig ist.',
      text2:
        'Wir geben Ihrer Karriere den entscheidenden Schub. Wir eröffnen Ihnen dazu auch den sogenannten „verdeckten Stellenmarkt“. Denn gerade die nicht frei zugänglichen Stellenangebote sind oft die spannendsten. Melden Sie sich gerne proaktiv! Vielleicht kommen Sie sogar in die engere Wahl.',
      text3:
        'Wir werden Ihnen nicht nur „einen Job beschaffen“, sondern Sie mittel- bis langfristig bei Ihrer Karriereentwicklung begleiten und beraten.\n',
      text4:
        'Ein Hinweis: Aus Diskretionsgründen können wir nicht alle aktuellen Projekte hier aufführen. Fragen Sie gegebenenfalls gern bei uns nach weiteren ­– nicht öffentlichen – ­Job-Profilen, die für Sie interessant sein könnten.',
    }
  },
}
</script>
