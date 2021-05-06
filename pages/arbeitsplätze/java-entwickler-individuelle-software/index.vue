<template>
  <v-container>
    <job-card
      job-name="Java Entwickler (m / w / d) - Individuelle Software"
      :job-location="['Konstanz'].join(' / ')"
      job-categories="IT"
      job-branch="1A-Fachpersonal UG"
    />
    <job-card-content
      job-description="whatever the fuck"
      data-aos="fade-up-right"
      data-aos-duration="800"
    >
      <template #description>
        <p>
          <strong
            >Hinweis zur aktuellen Lage Covid-19 (Coronavirus): Wir stellen ein!
            Deine Bewerbung wird auch weiterhin ganz normal bearbeitet. Alle
            Interviews finden per Video Call oder telefonisch statt. Wir freuen
            uns auf deine Bewerbung.</strong
          >
        </p>
        <p>
          <strong>
            Du bist überzeugt, dass innovative Technologie und Software
            gesellschaftlich relevante Themen unterstützt, verändert und
            vorantreibt? Das sind wir auch!</strong
          >
        </p>
        <p>
          Unsere Kunden sind vielfältig. Unsere Software Projekte ebenso. Wir
          lassen die großen Visionen unserer Kunden Wirklichkeit werden und
          helfen ihnen dabei die Digitalisierung in Deutschland voran zu
          treiben. Dabei setzen wir auf unsere Begeisterung für
          Software-Engineering, Open Source und agiles Mindset.
        </p>
        <p><strong>Java Developer (m/w/d) - Individualsoftware</strong></p>
        <p>Software Development & Services <br />Konstanz, Deutschland</p>
        <h3 class="py-3">Das erwartet dich - deine Aufgaben:</h3>
        <ul>
          <li>
            Du denkst dich mit Begeisterung in die fachlichen Fragestellungen
            unserer Kunden ein und findest innovative Lösungen.
          </li>
          <li>
            Du konzipierst und implementierst gemeinsam mit deinen
            Teamkollegen/innen User Stories in Java.
          </li>
          <li>
            Du entwickelst automatisierte Tests, um die Qualität des Codes zu
            gewährleisten.
          </li>
          <li>
            Du führst Code Reviews im Team durch und arbeitest im Pair
            Programming, um die Qualität zu verbessern und Know-How zu
            verteilen.
          </li>
          <li>
            Du verwendest und optimierst die im Team etablierte Continuous
            Integration / Continuous Delivery Pipeline.
          </li>
        </ul>
        <h3 class="py-3">DAS BRINGST DU MIT:</h3>
        <ul>
          <li>
            Ein abgeschlossenes Studium oder eine vergleichbare Ausbildung im
            Bereich Informatik
          </li>
          <li>
            Gute Kenntnisse in der Entwicklung von Anwendungen mit Java unter
            Einsatz von aktuellen Frameworks wie Spring Boot, o. ä. und
            Werkzeugen wie Jenkins und GIT
          </li>
          <li>
            Lust auf agiles Arbeiten sowie Motivation dich kontinuierlich mit
            neuen Technologien und Trends auseinanderzusetzen
          </li>
          <li>Spaß am Arbeiten im Team und persönlicher Weiterentwicklung</li>
          <li>Gute Deutschkenntnisse</li>
        </ul>
        <h3 class="py-3">Das bieten wir dir:</h3>
        <ul>
          <li>
            Du arbeitest mit namhaften Kunden an gesellschaftlich relevanten und
            innovativen Projekten.
          </li>
          <li>
            Du bist Teil eines selbstorganisierten Teams im agilen Umfeld mit
            hoher Eigenverantwortung.
          </li>
          <li>
            Durch das breite Technologiespektrum und die Vielfältigkeit unserer
            Projekte und Kunden hast du die Möglichkeit, dich stetig
            weiterzuentwickeln.
          </li>
          <li>
            Du trittst in ein wachsendes Unternehmen mit langfristiger
            Perspektive ein.
          </li>
          <li>
            Um optimale Arbeitsbedingungen zu ermöglichen, setzen wir uns für
            dich und deine Familie ein.
          </li>
          <li>Umfangreiche Benefits runden unser Angebot ab.</li>
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
