<template>
  <v-container>
    <job-card
      job-name="Full Stack Web Developer (m/w/d)"
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
        <h3 class="py-3">Beschreibung</h3>
        <p>
          Für unseren Kunden, ein zukunftsorientiertes Unternehmen mit über 30
          Jahren Erfahrung im Bereich der Steuerungstechnik, Verdichtungstechnik
          und dem Digitalisierten Straßenbau,suchen wir zum nächstmöglichen
          Zeitpunkt einen Full-Stack-Entwickler (m/w/d), der die Motivation
          mitbringt, dass IT-Team am Standort in Münster zu unterstützen.
        </p>
        <h3 class="py-3">Zuständigkeiten / Hauptaufgaben</h3>
        <ul>
          <li>Definieren von Schnittstellen zwischen Backend und Frontend</li>
          <li>Anpassung der Hauseigenen Datenbanken</li>
          <li>Weiterentwicklung von IoT-Applikationen zu SaaS-Applikationen</li>
          <li>Sie kennen SCRUM und haben Freude am Teamwork</li>
          <li>
            Implementierung von Steuerung und Darstellung in
            Echtzeitinformationen
          </li>
          <li>Design der Weboberflächen nach Usability, Responsive etc.</li>
        </ul>
        <h3 class="pt-6 pb-3">Qualifikationen / Anforderungen</h3>
        <ul>
          <li>
            Studium in Medieninformatik, Informatik oder angewandte Informatik
          </li>
          <li>Idealerweise Berufserfahrung im Bereich der Web-Entwicklung</li>
          <li>Gute Kenntnisse in aktuellen Frontend Technologien</li>
          <li>
            Erste Berührungspunkte mit Backend-Technologien wie Java, SQL und
            Frameworks Spring Boot u. Angular
          </li>
          <li>API Enticklung mit JSON (REST Services)</li>
          <li>Die Zusammenarbeit im Team ist selbstverständlich</li>
          <li>Umfangreiche Teamevents während des Jahres</li>
          <li>
            Kreativ denken, Probleme mit einem hohen Maß an Perfektion lösen
          </li>
        </ul>
        <h3 class="pt-6 pb-3">Leistungen der Anstellung</h3>
        <ul>
          <li>Langfristige und unbefristete Festanstellung</li>
          <li>Kollegiales u. Positives Arbeitsumfeld</li>
          <li>
            Überdurchschnittliche Vergütung mit Zuschuss zur Altersvorsorge
          </li>
          <li>Intensive Einarbeitung durch einen Paten</li>
          <li>API Enticklung mit JSON (REST Services)</li>
          <li>Kostenfreies Mittagessen, täglich frisch</li>
          <li>Ein stabiles Unternehmensumfeld durch kurze Entscheidungswege</li>
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
