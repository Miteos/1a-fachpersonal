<template>
  <TabContent>
    <template #text>
      <TextCard :text1="text1" size="5" />
    </template>
    <template #image>
      <v-img
        contain
        src="/images/arbeitgeber/arbeit_1.jpg"
        style="width: auto; max-height: 415px"
      />
    </template>
  </TabContent>
</template>

<script>
import TextCard from '@/components/elements/TextCard'
import TabContent from '@/components/layout/TabContent'
export default {
  name: 'personnel',
  components: {
    TextCard,
    TabContent,
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
