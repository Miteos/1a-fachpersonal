<template>
  <v-container fluid class="mt-0 pt-0">
    <div class="tabs-nav">
      <ul>
        <li v-for="(tab, tabName) in tabs" :key="tabName">
          <button
            class="tab"
            @click="setTabActive(tabName)"
            :class="{ active: tabName === activeTab }"
          >
            <span class="tab-copy">{{ tabName }}</span>
            <span class="tab-background">
              <span class="tab-rounding left"></span>
              <span class="tab-rounding right"></span>
            </span>
          </button>
        </li>
      </ul>
    </div>
    <article>
      <div class="article-container" id="tab_1">
        <div v-if="activeTab === '1AFachPersonal'" class="content">
          <h1>{{ tabs['1AFachPersonal'].title }}</h1>
          <fachpersonal />
        </div>
        <div v-if="activeTab === 'Karriereplanung'" class="content">
          <h1>{{ tabs.Karriereplanung.title }}</h1>
          <career />
        </div>
        <div
          v-if="activeTab === 'Personalvermittlung'"
          class="content animateLeft"
        >
          <h1>{{ tabs.Personalvermittlung.title }}</h1>
          <recruits />
        </div>
      </div>
    </article>
  </v-container>
</template>

<script>
import Fachpersonal from '@/components/pages/arbeitkrafte/Fachpersonal.vue'
import Carrer from '@/components/pages/arbeitkrafte/Career.vue'
import Recruits from '@/components/pages/arbeitkrafte/Recruits.vue'

export default {
  components: {
    fachpersonal: Fachpersonal,
    career: Carrer,
    recruits: Recruits,
    TabContent: {
      props: {
        data: Object,
      },
    },
  },
  data() {
    return {
      changedTab: false,
      tabs: {
        '1AFachPersonal': {
          title: 'Was sollten Sie sonst noch wissen über 1AFachPersonal',
          body: 'whatever the fuck',
        },
        Karriereplanung: {
          title:
            'Lassen Sie uns gemeinsam Ihre Karriereplanung aktiv angehen! ',
          body:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!',
        },
        Personalvermittlung: {
          title: 'Personalvermittlung - wie es funktioniert ',
          body:
            'Lorem ipsasdfasdfasd alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!',
        },
      },
      activeTab: '1AFachPersonal',
    }
  },
  computed: {
    tabContent() {
      return this.tabs[this.activeTab]
    },
  },
  mounted() {
    this.activeTab = '1AFachPersonal'
  },
  methods: {
    setTabActive(tab) {
      this.activeTab = tab
    },
  },
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
</style>
