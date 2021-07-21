<template>
  <v-container fluid style="min-height: 100vh">
    <v-row
      v-resize="onResize"
      column
      class="ma-0 d-flex justify-center"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <v-col cols="12" xl="5" lg="5" md="5">
        <v-text-field
          filled
          dark
          dense
          outlined
          v-model="search"
          placeholder="Suche..."
        ></v-text-field>
      </v-col>
      <v-col v-if="$vuetify.breakpoint.mdAndUp" xl="2" lg="2" md="2">
        <!--        <v-btn width="100px" height="40"><v-icon>mdi-printer</v-icon></v-btn>-->
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    <v-card data-aos="fade-up-right" data-aos-duration="1100">
      <v-row>
        <v-col cols="12" class="pb-0">
          <client-only>
            <v-data-table
              style="min-height: max-content"
              :items-per-page="10"
              :search="search"
              :headers="headers"
              hide-default-footer
              :loading="!isLoading"
              text-center
              :hide-default-header="isMobile"
              :class="isMobile ? 'mobile' : ''"
              :items="jobs"
            >
              <template v-slot:body="{ items }">
                <tr
                  class="table-rows"
                  v-if="!isMobile"
                  v-for="item in items"
                  :key="item.job"
                >
                  <td v-if="$vuetify.breakpoint.mdAndUp">
                    <img :src="item.img" />
                  </td>
                  <td>
                    <nuxt-link :to="'arbeitsplätze' + item.to">{{
                      item.job
                    }}</nuxt-link>
                  </td>
                  <td class="text-center">{{ item.date }}</td>
                  <td class="text-center">{{ item.clicks }}</td>
                </tr>
                <tr v-else-if="isMobile" :key="items.job">
                  <td>
                    <v-container
                      fluid
                      class="ma-0 pa-0"
                      style="display: inline-block; width: 100%"
                    >
                      <ul class="flex-content">
                        <li class="flex-item--full">
                          <v-img
                            max-height="200"
                            width="auto"
                            :src="item.img"
                          />
                        </li>
                        <li class="flex-item" data-label="Titel">
                          <NuxtLink :to="'arbeitsplätze' + item.to">{{
                            item.job
                          }}</NuxtLink>
                        </li>
                        <li class="flex-item" data-label="Erstellungsdatum">
                          <span>{{ item.date }}</span>
                        </li>
                        <li class="flex-item" data-label="Zugriffe">
                          <span>{{ item.clicks }}</span>
                        </li>
                      </ul>
                    </v-container>
                  </td>
                </tr>
              </template>
              <v-alert
                slot="no-results"
                :value="true"
                color="error"
                icon="warning"
              >
                Your search for "{{ search }}" found no results.
              </v-alert>
            </v-data-table>
          </client-only>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin],
  components: {
    TableContent: {
      props: {
        data: Object,
      },
    },
  },
  data() {
    return {
      search: '',
      isMobile: false,
      isLoading: true,
      headers: [
        {
          text: '',
          value: 'img',
          align: 'left',
          width: '20%',
          sortable: false,
        },
        {
          text: 'Titel',
          value: 'job',
          align: 'left',
        },
        { text: 'Erstellungsdatum', value: 'date', align: 'center' },
        { text: 'Zugriffe', value: 'clicks', align: 'center' },
      ],
      jobs: [
        {
          job: 'Ingenieur (m/w/d)-Versorgungstechnik Führend und motivierend',
          date: '9. Juni 2021',
          clicks: 0,
          img: '/images/jobs/jobs_3.jpg',
          to: '/ingenieur-versorgungstechnik-führend-und-motivierend',
        },
        {
          job: 'Full Stack Web Developer (m/w/d)',
          date: '9. Juni 2021',
          clicks: 0,
          img: '/images/jobs/jobs_1.jpg',
          to: '/full-stack-web-developer',
        },
        {
          job: 'Java Entwickler (m/w/d) - Individuelle Software',
          date: '15. Februar 2021',
          clicks: 30,
          img: '/images/jobs/jobs_4.jpg',
          to: '/java-entwickler-individuelle-software',
        },
        {
          job: 'Full-Stack-Entwickler m/w/d',
          date: '15. Februar 2021',
          clicks: 28,
          img: '/images/jobs/jobs_1.jpg',
          to: '/full-stack-entwickler',
        },
        {
          job: 'IT Support Engineer (m/w/d)',
          date: '01. Februar 2021',
          clicks: 46,
          img: '/images/jobs/jobs_3.jpg',
          to: '/it-support-engineer',
        },
        {
          job: 'Webentwickler (m/w/d) PHP / JavaScript',
          date: '01. Februar 2021',
          clicks: 36,
          img: '/images/jobs/jobs_2.jpg',
          to: '/webentwickler-php-javascript',
        },
        {
          job: 'IT-Administrator 2nd Level (m/w/d)',
          date: '01. Februar 2021',
          clicks: 35,
          img: '/images/jobs/jobs_5.jpg',
          to: '/it-administrator',
        },
      ],
    }
  },
  computed: {
    tableContent() {
      return this.jobs
    },
  },
  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 960
    },
  },
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
@import 'assets/styles/mixins';
.table-rows {
  height: 200px;
  transition: 0.3s ease-in;
  &:last-child {
    border-bottom: none !important;
  }
  &:hover {
    background-color: #ededed;
    transition: 0.3s ease-out;
  }
  & td {
    font-size: 18px;
    text-align: left;
    border-bottom: thin solid $secondary-darker-grey;
    & img {
      max-height: 200px;
      margin: 20px;
      padding: 5px;
      border: thin solid $secondary-darker-grey;
      border-radius: 10px;
      background-position: center;
      background-size: cover;
    }
  }
}
.v-data-table ::v-deep th {
  font-size: 18px !important;
}
.v-data-table ::v-deep td {
  font-size: 16px !important;
}
.mobile {
  color: #333;
}

@include smallerTablet {
  .mobile ul {
    width: 100%;
    position: relative;
    display: block;
    & li:before {
      content: attr(data-label);
      padding-right: 0.5em;
      font-size: 14px;
      text-align: left;
      display: block;
      color: #999;
      @include smallerTablet {
        font-size: 16px;
      }
      @include smallphones {
        font-size: 14px;
      }
    }
    & ul {
      display: flex;
      width: 100%;
      border-bottom: 1px solid #f5f5f5;
      height: auto;
    }
  }

  .v-data-table tbody tr:nth-of-type(even) {
    border-left: 6px solid cyan;
  }

  .v-data-table tbody tr td {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #f5f5f5;
    height: auto;
    padding: 10px;
  }
}
.flex-content {
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 10px 10px 0 !important;
}

.flex-item {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 5px 5px;
  max-width: 764px;
  height: 60px;
  white-space: normal;
  font-weight: bold;
  & a {
    @include smallerTablet {
      max-width: 500px;
    }
    @include smallphones {
      max-width: 250px;
      font-size: 14px;
    }
  }
  &--full {
    width: 100%;
  }
}
</style>
