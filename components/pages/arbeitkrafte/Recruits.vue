<template>
  <TabContent>
    <template #text>
      <TextCard :text1="text1" />
      <h2>Einen Job zu finden ist einfach</h2>
      <div>
        <ul class="pl-4">
          <li
            class="font--larger py-3"
            v-for="(l, i) in list"
            style="list-style: none"
          >
            <strong>{{ l.title }}</strong>
            <v-card-text class="font--standard">
              {{ l.text }}
            </v-card-text>
          </li>
        </ul>
      </div>
    </template>
    <template #image>
      <v-img
        contain
        src="/images/arbeitkrafte/ak_3.jpg"
        style="width: auto; max-height: 600px; border-radius: 10px"
      />
    </template>
  </TabContent>
</template>

<script>
import TextCard from '@/components/elements/TextCard'
import TabContent from '@/components/layout/TabContent'
export default {
  name: 'recruits',
  components: {
    TextCard,
    TabContent,
  },
  data() {
    return {
      list: [
        {
          title: 'Die Suche',
          text:
            'Nachdem Sie Ihre Karriereziele und einen Lebenslauf mit Qualifikationen gesendet haben, werden wir nach dem richtigen Arbeitgeber suchen.',
        },
        {
          title: 'Der erste Kontakt',
          text:
            'Der erste Kontakt mit Ihrem neuen Arbeitgeber erfolgt über uns',
        },
        {
          title: 'Immer da für dich',
          text:
            'Auch nach einem erfolgreichen Praktikum bleiben wir jederzeit Ihr Ansprechpartner.',
        },
      ],
      text1:
        'Personalvermittlung ist eine Form der Dienstleistung, bei der erfahrene Jobvermittler die Schnittstelle zwischen Fachkräften und Unternehmen darstellen. Immer mehr Firmen und Bewerber aus allen Branchen nehmen unsere Services als professioneller Personalvermittler in Anspruch. Kein Wunder, schließlich ist das Prinzip einfach und gleichzeitig äußerst effektiv: Arbeitgeber wenden sich an die 1A - Fachpersonal, um vakante Positionen schnellstmöglich mit passendem Personal zu besetzen. Diese offenen Stellen werden dann in unserer Jobbörse veröffentlicht. Als Arbeitssuchende/r können Sie ohne weiteres auf die verschiedenen zugreifen und sich direkt bei uns bewerben.',
    }
  },
}
</script>
