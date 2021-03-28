<template>
  <div class="position--relative">
    <landing-services-company />
    <landing-services-jobseeker reverse />
    <landing-jobs />
  </div>
</template>

<script>
import landingServicesCompany from '@/components/sections/landingServicesCompany'
import landingServicesJobseeker from '@/components/sections/landingServicesJobseeker'
import landingJobs from '@/components/sections/landingJobs'
export default {
  components: {
    'landing-services-company': landingServicesCompany,
    'landing-services-jobseeker': landingServicesJobseeker,
    'landing-jobs': landingJobs,
  },
}
</script>

<style lang="scss"></style>
