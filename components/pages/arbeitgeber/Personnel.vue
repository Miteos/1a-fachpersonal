<template>
  <v-row>
    <v-col cols="6">
      <text-card :text1="text1" size="5" />
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
  name: 'personnel',
  components: {
    'text-card': TextCard,
  },
  data() {
    return {
      text1:
        '  Kein Unternehmen gleicht dem anderen – und genauso unterschiedlich\n' +
        '          sind auch die Bedürfnisse im Personalmanagement. Unser vielseitiges\n' +
        '          Dienstleistungsangebot garantiert Ihnen dabei eine Flexibilisierung\n' +
        '          Ihres Personalmanagements bei geringem operativem Risiko. Gleichzeitig\n' +
        '          sparen Sie signifikant Zeit und Kosten dank effizienter\n' +
        '          Auswahlprozesse und strukturierter Abläufe.',
    }
  },
}
</script>
