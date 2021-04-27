<template>
  <v-container fluid class="mt-0 pt-0">
    <div class="tabs-nav" v-if="$vuetify.breakpoint.lgAndUp">
      <ul>
        <li
          v-for="(tab, tabName) in tabs"
          v-if="$vuetify.breakpoint.lgAndUp"
          :key="tabName"
        >
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
      v-model="tab"
    >
      <v-tabs-slider color="primary"></v-tabs-slider>

      <v-tab ripple v-for="i in tabsMobile" :key="i.tabTitle">
        {{ i.tabTitle }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" v-if="$vuetify.breakpoint.mdAndDown">
      <v-tab-item
        v-for="(item, i) in tabsMobile"
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
    <article v-if="$vuetify.breakpoint.lgAndUp">
      <div class="article-container" id="tab_1">
        <div v-if="activeTab === 'Industrie'" class="content">
          <h1>{{ tabs.Industrie.title }}</h1>
          <industries />
        </div>
        <div v-if="activeTab === 'Personallösungen'" class="content">
          <h1>{{ tabs.Personallösungen.title }}</h1>
          <personnel />
        </div>
        <div
          v-if="activeTab === 'Personalvermittlung'"
          class="content animateLeft"
        >
          <h1>{{ tabs.Personalvermittlung.title }}</h1>
          <recruitment />
        </div>
        <div v-if="activeTab === 'Prozess'" class="content">
          <h1>{{ tabs.Prozess.title }}</h1>
          <process />
        </div>
        <div v-if="activeTab === 'Mitarbeiter'" class="content">
          <h1>{{ tabs.Mitarbeiter.title }}</h1>
          <employee />
        </div>
        <div v-if="activeTab === 'Leistungen'" class="content">
          <h1>{{ tabs.Leistungen.title }}</h1>
          <services />
        </div>
      </div>
    </article>
  </v-container>
</template>

<script>
import Industries from '@/components/pages/arbeitgeber/Industries.vue'
import Recruitment from '@/components/pages/arbeitgeber/Recruitment.vue'
import Personnel from '@/components/pages/arbeitgeber/Personnel.vue'
import Process from '@/components/pages/arbeitgeber/Process.vue'
import Employee from '@/components/pages/arbeitgeber/Employee.vue'
import Services from '@/components/pages/arbeitgeber/Services.vue'

export default {
  components: {
    industries: Industries,
    recruitment: Recruitment,
    personnel: Personnel,
    process: Process,
    employee: Employee,
    services: Services,
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
      tabsMobile: [
        {
          tabTitle: 'Industrie',
          title: 'Rekrutierung für die Industrie',
          component: Industries,
        },
        {
          tabTitle: 'Personallösungen',
          title: 'Personallösungen für Ihren Bedarf',
          component: Recruitment,
        },
        {
          tabTitle: 'Personalvermittlung',
          title:
            'Personalvermittlung – Kompetenz durch Spezialisierung, Erfahrung und frische Ideen!',
          component: Personnel,
        },
        {
          tabTitle: 'Prozess',
          title: 'Vermittlung von qualifiziertem Personal aus allen Branchen',
          component: Process,
        },
        {
          tabTitle: 'Mitarbeiter',
          title: 'Der ideale Mitarbeiter für Ihr Unternehmen',
          component: Employee,
        },
        {
          tabTitle: 'Leistungen',
          title:
            'Wenn Sie mit 1A-FachPersonal.de arbeiten, können Sie Folgendes erwarten:',
          component: Services,
        },
      ],
      tabs: {
        Industrie: {
          title: 'Rekrutierung für die Industrie',
        },
        Personallösungen: {
          title: 'Personallösungen für Ihren Bedarf',
        },
        Personalvermittlung: {
          title:
            'Personalvermittlung – Kompetenz durch Spezialisierung, Erfahrung und frische Ideen! ',
        },
        Prozess: {
          title: 'Vermittlung von qualifiziertem Personal aus allen Branchen',
        },
        Mitarbeiter: {
          title: 'Der ideale Mitarbeiter für Ihr Unternehmen',
        },
        Leistungen: {
          title:
            'Wenn Sie mit 1A-FachPersonal.de arbeiten, können Sie Folgendes erwarten: ',
          body:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab nam alias architecto officia, dolores animi qui debitis incidunt eius temporibus nostrum nihil soluta commodi molestiae necessitatibus ducimus amet. Suscipit, saepe!',
        },
      },
      activeTab: 'Industrie',
    }
  },
  computed: {
    tabContent() {
      return this.tabs[this.activeTab]
    },
  },
  mounted() {
    this.activeTab = 'Industrie'
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
@import 'assets/styles/mixins';
$purple: #8a6cb4;
$pink: #d07faf;
.tabs-nav {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 20px solid #fff;
  ul {
    display: flex;
    flex-direction: row;
  }
  li {
    list-style: none;
  }
  .tab {
    $border-radius: 8px;
    $transition-duration: 0.24s;
    $transition-timing: cubic-bezier(0.86, 0, 0.07, 1);
    font-weight: bold;
    font-size: 16px;
    color: $secondary;
    border: none;
    padding: 16px 40px;
    margin: 0 24px 0;
    outline: none;
    cursor: pointer;
    position: relative;
    background: none;
    &:hover {
      .tab {
        &-background {
          height: 16px;
        }
        &-rounding {
          transform: scaleY(1);
        }
      }
    }
    &.active {
      color: $main;
      .tab {
        &-background {
          height: 100%;
        }
        &-rounding {
          transform: scaleY(1);
        }
      }
    }
    &-copy {
      position: relative;
      z-index: 1;
    }
    &-background {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 0;
      height: 0;
      border-radius: $border-radius $border-radius 0 0;
      transition: height $transition-timing $transition-duration;
    }
    &-rounding {
      $rounding-size: $border-radius;
      $background-color: #fff;
      //padding:$rounding-size / 2;
      padding: $rounding-size / 2 $rounding-size;
      display: block;
      position: absolute;
      overflow: hidden;
      bottom: 0;
      transform: scaleY(0);
      transform-origin: bottom;
      transition: transform $transition-timing $transition-duration;
      &:before {
        content: '';
        position: absolute;
        width: $rounding-size * 2;
        height: $rounding-size * 2;
        top: -$rounding-size;
        left: -$rounding-size;
        border-radius: 100%;
      }
      &.left {
        left: -$rounding-size;
        &:before {
          box-shadow: 0 0 0 10rem $background-color;
        }
      }
      &.right {
        right: -$rounding-size;
        &:before {
          left: $rounding-size;
          box-shadow: 0 0 0 10rem $background-color;
        }
      }
    }
  }
}
article {
  .article-container {
    width: 100%;
    min-height: 70vh;
    padding: 40px;
    box-sizing: border-box;
    margin: 0 auto;
    background-color: $secondary;
    @include lowresmonitors {
      padding: 20px;
    }
    @include phones {
      padding: 10px;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 42px;
    margin-bottom: 10px;
    color: $main;
    @include lowresmonitors {
      font-size: 26px;
      padding: 20px 0;
      text-align: center;
    }
    @include phones {
      font-size: 18px;
    }
  }
  h2 {
    @include phones {
      margin-left: 10px;
      font-size: 20px;
    }
  }
  p {
    line-height: 1.6;
    font-size: 18px;
    color: rgba(#000, 0.7);
    margin-bottom: 20px;
    @include phones {
      font-size: 14px;
    }
  }
  li {
    @include phones {
      margin-left: 0 !important;
    }
  }
}
.content {
  position: relative;
}
.animateLeft {
  position: relative;
  animation: fromLeft 0.5s;
}
.animateTop {
  position: relative;
  animation: fromTop 0.5s;
}
.animateRight {
  position: relative;
  animation: fromRight 0.5s;
}
.animateBottom {
  position: relative;
  animation: fromBottom 0.5s;
}
@keyframes fromRight {
  from {
    right: -100px;
  }
  to {
    right: 0;
  }
}
@keyframes fromTop {
  from {
    top: -100px;
  }
  to {
    top: 0;
  }
}
@keyframes fromBottom {
  from {
    bottom: -100px;
  }
  to {
    bottom: 0;
  }
}
@keyframes fromLeft {
  from {
    left: -100px;
  }
  to {
    left: 0;
  }
}
.fade-enter-active,
.fade-leave-active {
  & > * {
    transition-duration: 200ms;
    transition-property: opacity, transform;
    transition-timing-function: cubic-bezier(0.6, 0.15, 0.35, 0.8);
  }
}

$delay: 100ms;
$delayStep: 100ms;

.fade-enter,
.fade-leave-to {
  & > * {
    opacity: 0;
    transform: translateY(40px);
  }
}
.fade-enter-active {
  & > * {
    &:nth-child(2) {
      transition-delay: $delay;
    }
    &:nth-child(3) {
      transition-delay: $delay + $delayStep;
    }
  }
}
.fade-leave-active {
  & > * {
    &:nth-child(1) {
      transition-delay: $delay + $delayStep;
    }
    &:nth-child(2) {
      transition-delay: $delay;
    }
  }
}
</style>
