<template>
  <v-container>
    <job-card
      job-name="Full-Stack-Entwickler m / w / d"
      job-location="Carl - Orff Straße 19 59320 Ennigerloh"
      job-categories="IT"
      job-branch="1A-Fachpersonal UG"
    />
    <job-card-content job-description="whatever the fuck">
      <template #description>
        <h3 class="py-3">Einleitung</h3>
        <p>
          Die <strong>1A-Fachpersonal UG</strong> unterstützt ihre Kunden dabei,
          die Herausforderungen des digitalen Wandels zu ergreifen. Seit 8
          Jahren produzieren wir innovative Business-Lösungen für
          mittelständische Unternehmen. Am Firmensitz in Carl - Orff Straße 19
          59320 Ennigerloh arbeiten 4 Mitarbeiter. Unsere Software
          1A-Fachpersonal UG ist made in Germany und bietet smarte Lösungen für
          ERP, CRM, Logistik, E-Commerce und Stammdatenmanagement.
        </p>
        <h3 class="py-3">Ihre Aufgaben</h3>
        <p>
          Als neues Mitglied im Entwicklungs-Team „E-Commerce“ bringen Sie Ihre
          Programmierkenntnisse und Ihr Wissen ein, um mit uns eine
          E-Commerce-Lösung weiterzuentwickeln, die unsere Kunden begeistert.
          Neben der reinen Webentwicklung liegt unser Ziel in einer tiefen
          Unterstützung der Anwender über alle Geschäftsprozesse hinweg. Dabei
          bringen Sie Ihre Ideen, Erfahrungen und Ihre Motivation in unsere
          E-Commerce-Portallösung mit ein. Sie entwerfen und implementieren die
          Prozesse in Abstimmung mit dem Product-Owner und dem Entwicklungsteam.
          Mit Kreativität, Erfahrung und Teamgeist gestalten sie eine qualitativ
          hochwertige und gut dokumentierte Lösung.
        </p>
        <h3 class="py-3">Ihr Profil</h3>
        <ul>
          <li>
            Sie haben Erfahrung in der Entwicklung von webbasierter Lösungen,
            basierend auf einer objektorientierten Programmiersprache
          </li>
          <li>
            Idealerweise haben Sie Kenntnisse im Bereich ASP.NET MVC, Entity
            Framework, JavaScript, C#
          </li>
          <li>
            Der Umgang mit relationalen Datenbanken (SQL-Server) ist Ihnen
            vertraut
          </li>
          <li>Sie kennen SCRUM und haben Freude am Teamwork</li>
          <li>
            Sie haben einen flexiblen, professionellen und teamorientierten
            Arbeitsstil, arbeiten kundenorientiert und lernen gerne Neues
          </li>
        </ul>
        <h3 class="pt-6 pb-3">Wir bieten</h3>
        <ul>
          <li>
            Einen attraktiven und modernen Arbeitsplatz in einem Unternehmen, in
            welchem Engagement, Eigeninitiative und gegenseitige Unterstützung
            großgeschrieben werden
          </li>
          <li>
            Sie werden Teil eines wirtschaftlich gesunden Unternehmens, das
            zukunftssicher aufgestellt ist und sich auf Wachstumskurs befindet
          </li>
          <li>
            Die Möglichkeit, sich persönlich und fachlich weiterzuentwickeln
            sowie die Ermutigung, Verantwortung zu übernehmen
          </li>
          <li>
            Fachliche Einarbeitung mit der Teilnahme an einem qualifizierten
            Einführung in eNVenta ERP und unseren Webshop
          </li>
          <li>Sozialleistungen und leistungsgerechte Vergütung</li>
          <li>
            Flexible Arbeitszeitgestaltung mit Teilzeit- und
            Home-Office-Modellen
          </li>
          <li>Umfangreiche Teamevents während des Jahres</li>
          <li>
            Mehrere Kaffeeküchen, frische Obstkörbe und eine tolle Lounge im
            Innenhof
          </li>
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
