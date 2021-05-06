<template>
  <v-container>
    <job-card
      job-name="Webentwickler (m/w/d) PHP / JavaScript"
      :job-location="['Köln', 'Sachsenheim'].join(' / ')"
      job-categories="IT"
      job-branch="Sundara Ramaiah Knight"
    />
    <job-card-content
      job-description="placeholder"
      data-aos="fade-up-right"
      data-aos-duration="800"
    >
      <template #description>
        <p>
          <strong>Wir sind</strong> Hersteller der beliebten Onlineshop-Software
          Merconis und programmieren für unsere Kunden individuelle
          Sonder­lösungen im E-Commerce-Umfeld. Das ist für Dich als
          Web­entwickler sicher der wichtigste Teil unserer Selbst­beschreibung.
          Wir sind darüber hinaus eine Full-Service-Agentur, die diesen Namen
          wirklich verdient. Von der klassischen Web­site bis zur komplexen
          E-Commerce-Platt­form bieten wir unseren Kunden nämlich alles aus
          einer Hand. Auch SEO, Web­hosting und was eben dazu­gehört. Mit
          unserer primären Aus­richtung auf den Online­handel und weil wir uns
          insgesamt sehr breit auf­gestellt haben, sind wir trotz der aktuellen
          Corona-Krise auf Wachstums­kurs und für Dich ein sicherer
          Arbeit­geber.
        </p>
        <p>
          <strong>Du bist</strong> Programmierer aus Begeisterung und brennst
          dafür, Dein Wissen und Deine Erfahrung in spannenden Web­projekten
          einzu­bringen. Mit PHP und JavaScript kennst Du Dich gut aus, in
          mindestens einem der beiden sogar sehr gut. Wie Du beides im
          Zusammen­spiel mit HTML/CSS effektiv einsetzt, weißt Du genau. Falls
          Du das Content-Management-System Contao bzw. das dahinter­stehende
          Frame­work bereits kennst, ist das von Vor­teil. Aber kein Problem,
          wenn Du damit noch nichts zu tun hattest. Du wirst von uns eine
          gründ­liche Einarbeitung bekommen und bist bei uns daher herzlich
          will­kommen, unabhängig davon, mit welchen Frameworks Du bisher
          gearbeitet hast.
        </p>
        <p>
          Bei uns zählt übrigens, was Du kannst, und nicht, wie Du es gelernt
          hast. Ein abgeschlossenes Studium oder eine einschlägige
          Berufs­ausbildung wissen wir auf jeden Fall zu schätzen, aber wir
          freuen uns auch über Deine Bewerbung, wenn Du Dir Deine Fähigkeiten
          als Auto­didakt angeeignet hast. Für die Kommunikation im Team und mit
          Kunden sind gute Deutsch­kenntnisse unerlässlich.
        </p>
        <p>
          <strong>Du wirst</strong> bei uns tolle Projekte bekommen. Das kann z.
          B. die Programmierung eines besonderen Konfigurators für einen
          Onlineshop sein oder die Erstellung einer ganz individuellen
          Webanwendung von Grund auf und noch vieles mehr. Außerdem wirst Du ein
          wichtiges Mitglied des Programmierer-Teams von Merconis. Vor uns
          liegen jede Menge spannende Aufgaben, auf die wir uns gemeinsam mit
          Dir freuen. Übrigens kannst Du bei uns einiges erreichen. Sofern es
          Dir liegt und Du das möchtest, kannst Du zusätzlich
          Projektverantwortung übernehmen und Projekte planen, Abläufe
          koordinieren und Kunden in technisch anspruchsvollen Bereichen
          betreuen.
        </p>
        <p>
          <strong>Bei uns</strong> macht die Arbeit aus vielen Gründen Freude.
          Sicherlich wirst Du Dich über unser attraktives Arbeitszeitmodell mit
          flexibler Gleitzeit bei vollem Überstundenausgleich freuen und die
          gute Bezahlung zu schätzen wissen. Vor allem aber wirst Du Dich in
          unserem Team wohl fühlen. Dass Du von uns mit hervorragendem Equipment
          ausgestattet wirst, versteht sich von selbst.
        </p>
        <p>
          <strong>Dein Arbeitsort</strong> kann abhängig von Deinem Wohnort
          entweder unsere Niederlassung in Köln oder unsere Niederlassung in
          Sachsenheim nahe Ludwigsburg sein. Beide sind sowohl mit den
          Öffentlichen als auch mit dem Auto optimal zu erreichen. Falls beide
          Standorte für Dich zu weit entfernt sind, ermöglichen wir Dir auch die
          Arbeit aus dem Homeoffice. Aufgrund der Corona-Situation ist die
          Arbeit im Homeoffice zurzeit natürlich unabhängig von Deinem Wohnort
          jederzeit problemlos möglich.
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
