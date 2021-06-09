<template>
  <v-container>
    <job-card
      job-name="Ingenieur (m/w/d) - Versorgungstechnik Führend und motivierend"
      job-location="Münster"
      job-categories="IT"
      job-branch="1A-Fachpersonal UG"
    />
    <job-card-content
      job-description="whatever the fuck"
      data-aos="fade-up-right"
      data-aos-duration="800"
    >
      <template #description>
        <h3 class="py-3">Ihre Tätigkeit fordert mehr als Standard.</h3>
        <ul>
          <li>
            Planung und Überwachung von versorgungstechnischen Projekten (HKL,
            Sanitär)
          </li>
          <li>
            Eigenverantwortliche Auswahl der benötigten Systeme und deren
            Spezifikationen
          </li>
          <li>Auslegung der unterschiedlichen Anlagenkomponenten</li>
          <li>
            Sicherstellung der Einhaltung relevanter Standards und rechtlicher
            Rahmenbedingungen
          </li>
          <li>
            Überwachung der Kosten-, Termin- und Qualitätsaspekte Dynamisch und
            erfolgreich
          </li>
        </ul>
        <h3 class="pt-6 pb-3">Ihre Karriere liegt vor Ihnen:</h3>
        <ul>
          <li>
            Professionelle Unterstützung zur Vereinbarkeit von Familie und Beruf
          </li>
          <li>Attraktive, leistungsgerechte Vergütungsstrukturen</li>
          <li>
            Förderung eigener Methodenkompetenzen<br />
            Fachlich und persönlich - Ihre Qualifikation ist überzeugend.
          </li>
          <li>
            Studium der Versorgungstechnik/Gebäudetechnik oder ein
            vergleichbarer Abschluss
          </li>
          <li>Fundierte Erfahrung in dem beschriebenen Aufgabengebiet</li>
          <li>Hohe Qualitätsorientierung und Termintreue</li>
          <li>Durchsetzungsfähigkeit</li>
          <li>Reisebereitschaft für Dienstreisen</li>
        </ul>
      </template>
    </job-card-content>
  </v-container>
</template>

<script>
import JobCard from '@/components/elements/JobCard'
import JobCardContent from '@/components/elements/JobCardContent'
export default {
  components: {
    'job-card': JobCard,
    'job-card-content': JobCardContent,
  },
}
</script>
