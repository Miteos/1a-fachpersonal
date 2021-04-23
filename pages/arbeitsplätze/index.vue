<template>
  <v-container fluid class="pa-10" style="min-height: 100vh">
    <v-row class="ma-0 d-flex justify-center">
      <v-col cols="5">
        <v-text-field
          filled
          dark
          dense
          outlined
          v-model="search"
          placeholder="Suche..."
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn width="100px" height="40"><v-icon>mdi-printer</v-icon></v-btn>
      </v-col>
      <v-spacer><</v-spacer>
    </v-row>
    <v-card>
      <v-row>
        <v-col cols="12" class="pb-0">
          <v-data-table
            style="min-height: max-content"
            :items-per-page="10"
            :search="search"
            :headers="headers"
            hide-default-footer
            text-center
            :items="jobs"
          >
            <template #body="{ items }">
              <tr class="table-rows" v-for="item in items">
                <td v-if="$vuetify.breakpoint.mdAndUp">
                  <img :src="item.img" />
                </td>
                <td>
                  <nuxt-link e :to="'arbeitsplätze' + item.to">{{
                    item.job
                  }}</nuxt-link>
                </td>
                <td class="text-center">{{ item.date }}</td>
                <td class="text-center">{{ item.clicks }}</td>
              </tr>
            </template>
          </v-data-table>
        </v-col></v-row
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
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
          job: 'Full-Stack-Entwickler m / w / d',
          date: '15. Februar 2021',
          clicks: 28,
          img: '/images/jobs/jobs_1.jpg',
          to: '/full-stack-entwickler',
        },
        {
          job: 'Java Entwickler (m / w / d) - Individuelle Software',
          date: '15. Februar 2021',
          clicks: 30,
          img: '/images/jobs/jobs_4.jpg',
          to: '/java-entwickler-individuelle-software',
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
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
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
</style>
