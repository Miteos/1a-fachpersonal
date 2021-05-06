<template>
  <v-container fluid class="mt-0 pt-0">
    <div
      class="tabs-nav"
      v-if="$vuetify.breakpoint.lgAndUp"
      data-aos="fade-left"
      data-aos-duration="800"
    >
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
    <v-tabs
      v-if="$vuetify.breakpoint.mdAndDown"
      show-arrows
      centered
      center-active
      v-model="tab"
    >
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab ripple v-for="i in tabMobile" :key="i.tabTitle">
        {{ i.tabTitle }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" v-if="$vuetify.breakpoint.mdAndDown">
      <v-tab-item
        v-for="(item, i) in tabMobile"
        :key="'tab_' + i"
        class="article-container"
      >
        <article>
          <div class="article-container">
            <div class="content">
              <h1>
                {{ item.title }}
              </h1>
              <component v-bind:is="item.component" />
            </div>
          </div>
        </article>
      </v-tab-item>
    </v-tabs-items>
    <article
      v-if="$vuetify.breakpoint.lgAndUp"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <div class="article-container" id="tab_1">
        <div v-if="activeTab === '1AFachPersonal'" class="content">
          <h1>{{ tabs['1AFachPersonal'].title }}</h1>
          <fachpersonal />
        </div>
        <div v-if="activeTab === 'Karriereplanung'" class="content">
          <h1>{{ tabs.Karriereplanung.title }}</h1>
          <career />
        </div>
        <div v-if="activeTab === 'Personalvermittlung'" class="content">
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
      tab: null,
      tabMobile: [
        {
          tabTitle: '1AFachPersonal',
          title: 'Was sollten Sie sonst noch wissen über 1AFachPersonal',
          component: Fachpersonal,
        },
        {
          tabTitle: 'Karriereplanung',
          title:
            'Lassen Sie uns gemeinsam Ihre Karriereplanung aktiv angehen! ',
          component: Carrer,
        },

        {
          tabTitle: 'Personalvermittlung',
          title: 'Personalvermittlung - wie es funktioniert ',
          component: Recruits,
        },
      ],
      tabs: {
        '1AFachPersonal': {
          title: 'Was sollten Sie sonst noch wissen über 1AFachPersonal',
          component: Fachpersonal,
        },
        Karriereplanung: {
          title:
            'Lassen Sie uns gemeinsam Ihre Karriereplanung aktiv angehen! ',
          component: Carrer,
        },
        Personalvermittlung: {
          title: 'Personalvermittlung - wie es funktioniert ',
          component: Recruits,
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
