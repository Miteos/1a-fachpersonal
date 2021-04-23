<template>
  <v-container>
    <job-card
      job-name="IT-Administrator 2nd Level (m/w/d)"
      :job-location="['Gronau'].join(' / ')"
      job-categories="IT"
      job-branch="Sundara Ramaiah Knight"
    />
    <job-card-content job-description="whatever the fuck">
      <template #description>
        <p>
          Wir suchen Dich als
          <strong>IT-Administrator 2nd Level (m/w/d)</strong>, Vollzeit - in
          unserem Headoffice in Gronau.
        </p>
        <p>
          <strong>1A-Fachpersonal.de</strong> ist ein zukunftsorientiertes und
          international agierendes Fashion-Label für anspruchsvolle und
          modebegeisterte Frauen mit über 200 Mitarbeitern, 16 Stores, 500
          Partnerflächen und weiteren 2200 Fachhandelspartnern in 37 Ländern.
          Ready-to-wear-Outfits mit dem gewissen Etwas und ein talentiertes Team
          mit einem hohen Anspruch und Begeisterung für die Sache haben uns zu
          dem gemacht, was wir heute sind. Und wir wollen mehr!
        </p>
        <h3 class="py-3">DEIN AUFGABENGEBIET IST:</h3>
        <ul>
          <li>
            Eigenständige Bearbeitung von Ticket Requests im Rahmen des 2nd
            Level Supports
          </li>
          <li>
            Administration von Windows Servern mit Active Directory, Exchange,
            Hyper-V-Cluster und Netzwerk
          </li>
          <li>
            Fehleranalyse/-behebung und Dokumentation der Hard- und
            Softwaresysteme bei auftretenden Störungen (Remote, vor Ort, per
            Telefon)
          </li>
          <li>
            Aktive Mitarbeit an verschiedenen zukunftsträchtigen IT-Projekten
          </li>
        </ul>
        <h3 class="py-3">DAS ERWARTET DICH:</h3>
        <ul>
          <li>
            Leistungsgerechte Vergütung sowie eine technisch hochmoderne
            Ausstattung
          </li>
          <li>
            Spannende, anspruchsvolle Tätigkeit mit flachen Hierarchien und
            kurzen Kommunikationswegen
          </li>
          <li>
            Ein innovatives und vielfältiges Team in einer gemeinschaftlichen
            Arbeitsatmosphäre
          </li>
          <li>
            Warme Speisen, frische Salatbar sowie diverse Getränke in unserem
            hausinternen Bistro
          </li>
          <li>
            Neues, stylisches Headoffice inkl. eines attraktiven
            Outdoor-Bereiches
          </li>
        </ul>
        <h3 class="py-3">DU BRINGST MIT:</h3>
        <ul>
          <li>
            Eine abgeschlossene Ausbildung als Fachinformatiker für
            Systemintegration oder eine vergleichbare Ausbildung
          </li>
          <li>
            Mindestens 2 Jahre Berufserfahrung in einer vergleichbaren Position
          </li>
          <li>Kenntnisse in dem Bereich Windows Server (2016 und 2019)</li>
          <li>Erfahrung mit Netzwerk-Technologien (VLAN, Routing)</li>
          <li>
            Gute Fähigkeit zur selbstständigen und zielorientierten
            Lösungsfindung
          </li>
          <li>
            Teamfähigkeit, gute Kommunikationseigenschaften und Begeisterung für
            neue Innovationen und Technologien
          </li>
        </ul>
        <p class="py-3">
          Wir freuen uns auf Deine Bewerbung per E-Mail (Anhänge bitte als
          PDF-Datei) unter Angabe des frühestmöglichen Eintrittstermins und
          Deiner Gehaltsvorstellung.
        </p>
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
