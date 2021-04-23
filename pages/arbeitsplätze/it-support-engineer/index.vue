<template>
  <v-container>
    <job-card
      job-name="IT Support Engineer (m/w/d)"
      :job-location="['Dortmund'].join(' / ')"
      job-categories="IT"
      job-branch="Sundara Ramaiah Knight"
    />
    <job-card-content job-description="whatever the fuck">
      <template #description>
        <p>
          <strong>1A-Fachpersonal.de</strong> ist der führende Anbieter von
          Unified-Communications- und Collaboration-Lösungen für den
          Mittelstand. Mit unseren Software-Lösungen verbessern wir
          Kommunikation und Zusammenarbeit in Unternehmen und schreiben seit
          mehr als 20 Jahren Erfolgsgeschichte. Damit wir auch weiterhin zu den
          Technologie- und Innovationsführern im Bereich IP-Kommunikation
          gehören, suchen wir engagierte Mitarbeiter, die gemeinsam mit uns die
          Digitalisierung des Mittelstands vorantreiben wollen.
        </p>
        <p>
          <strong>
            Du begeisterst Dich für innovative Lösungen und möchtest uns dabei
            unterstützen, unsere Mitarbeiter noch erfolgreicher zu machen? Dann
            verstärke unser Team bei 1a-fachpersonal.de und Enreach als
          </strong>
        </p>
        <p>
          <strong
            >VOLLZEIT<br />
            DORTMUND</strong
          >
        </p>
        <h3 class="py-3">IT Support Engineer (m/w/d)</h3>
        <h3 class="py-3">
          In Deinem Arbeitsalltag im IT-Team bei 1a-fachpersonal.de übernimmst
          du
        </h3>
        <ul>
          <li>
            als IT-Support-Ingenieur innerhalb unserer Organisation die erste
            Anlaufstelle für ICT-bezogene Fragen
          </li>
          <li>die Beantwortung von Fragen und hilfst Mitarbeitern weiter</li>
          <li>
            Mitverantwortung für das Management der (Office IT) Windows Server,
            der Microsoft Azure Plattform und der Microsoft Office 365 Umgebung
          </li>
          <li>
            die Bearbeitung von 1st und 2nd line internen IT-Supportanfragen
          </li>
          <li>
            das Installieren und Verwalten von Hardware (Laptops und Handys)
          </li>
          <li>
            das Bereitstellen und Konfigurieren von Benutzerkonten und Lizenzen
            für den Zugriff auf Systeme und Dienste
          </li>
          <li>
            die Fehlerbehebung und Lösung von Problemen in unserer IT-Umgebung
          </li>
          <li>
            das Verwalten und Konfigurieren einer qualitativ hochwertigen
            IT-Umgebung
          </li>
          <li>
            Überlegungen zu Plänen im Bereich des Server- und
            Workstation-Managements
          </li>
        </ul>
        <h3 class="py-3">Das bringst Du mit zu 1a-fachpersonal.de</h3>
        <ul>
          <li>
            Abgeschlossene Ausbildung als Fachinformatiker/in für
            Systemintegration (oder vergleichbare Ausbildung)
          </li>
          <li>
            Mindestens 2 Jahre einschlägige Praktikums- oder Berufserfahrung im
            Bereich IT-Support/ Arbeitsplatzmanagement
          </li>
          <li>
            Kenntnisse bzw. Erfahrungen mit Windows Server Active Directory /
            Office 365
          </li>
          <li>
            Kenntnisse der neuesten Microsoft-Produkte und - Technologien sind
            ein Plus
          </li>
          <li>
            Idealerweise erste Erfahrungen mit 1a-fachpersonal.deWare oder
            anderen VoIP-Systemen
          </li>
          <li>Selbstständige und proaktive Arbeitseinstellung</li>
          <li>Pragmatisches Vorgehen</li>
          <li>
            Fließendes Deutsch und sehr gutes bis fließendes Englisch in Wort
            und Schrift
          </li>
        </ul>
        <div class="py-5">
          <a
            href="https://www.jobware.de/apply/zBXNqSAJ1WoJI7-WGZgiTpvDcFnN07y1hy3n1MwW1HCYHWJQg13OoOfW76eeB_pBY6SOOKTBAgobNy3dEEAu3l8UNbynNGFgzHtCiejpbb6osYy4Lu2LF-tboPyfTgkRDk7Lz4j1tJ_pq4HKbg"
            >Jetzt bewerben</a
          >
        </div>
        <h3 class="py-3">
          Darum lohnt es sich, bei 1a-fachpersonal.de zu arbeiten
        </h3>
        <p>
          Neben einer ausgezeichneten Arbeitsatmosphäre erwarten Dich bei uns
          eine moderne Ausstattung und flexible Arbeitszeiten. Als Teil von
          Enreach, einer europäischen Unternehmensgruppe mit mehr als 850
          Mitarbeitern an Standorten in acht Ländern, bieten wir Dir vielfältige
          Entwicklungs- und Gestaltungsmöglichkeiten sowie beste Perspektiven.
          Während dein Fokus auf 1a-fachpersonal.de liegt, hat unser schnell
          wachsendes Mutterunternehmen Enreach noch mehr Niederlassungen mit
          lokalen IT-Teams, mit denen du eng zusammenarbeiten wirst. Gemeinsam
          versuchen wir, so viel IT-Synergie wie möglich zu erreichen, um so
          effizient wie möglich miteinander zu arbeiten. Schon heute
          unterstützen wir mehr als zwei Millionen Anwender mit innovativen
          Kommunikationslösungen und gemeinsam mit Dir wollen wir weiterwachsen.
        </p>
        <h3 class="py-3">Besonderer Hinweis</h3>
        <p>
          Aufgrund von Corona arbeiten derzeit die meisten unserer Kollegen von
          zu Hause aus. Innerhalb dieser Funktion kannst du auch von zu Hause
          aus arbeiten, aber je nach Tätigkeit musst du für bestimmte Aufgaben
          auch mal im Büro sein. Aber auch wenn Corona vorbei ist, wirst du die
          Möglichkeit haben, abwechselnd von zu Hause aus und im Büro zu
          arbeiten. Das wird mit den direkten IT-Kollegen abgestimmt, um ein
          gesundes Maß an Flexibilität und Anwesenheit in der IT-Abteilung im
          Büro sicherzustellen.
        </p>
        <p>
          Bewirb Dich jetzt mit Deinen vollständigen Bewerbungsunterlagen und
          unter Angabe Deines frühestmöglichen Eintrittstermins sowie Deiner
          Gehaltsvorstellung.
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
