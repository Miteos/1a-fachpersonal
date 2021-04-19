<template>
  <v-container>
    <job-card
      job-name="Webentwickler (m/w/d) PHP / JavaScript"
      :job-location="['Köln', 'Sachsenheim'].join(' / ')"
      job-categories="IT"
      job-branch="Sundara Ramaiah Knight"
    />
    <job-card-content job-description="whatever the fuck" />
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
