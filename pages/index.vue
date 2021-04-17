<template>
  <div class="position--relative">
    <landing-services-company />
    <landing-services-jobseeker reverse />
    <landing-jobs />
    <landing-carousel />
    <landing-boxes />
    <landing-contact />
  </div>
</template>

<script>
import landingServicesCompany from '@/components/sections/landingServicesCompany'
import landingServicesJobseeker from '@/components/sections/landingServicesJobseeker'
import landingJobs from '@/components/sections/landingJobs'
import landingCarousel from '@/components/sections/landingCarousel'
import landingBoxes from '@/components/sections/landingBoxes'
import landingContact from '@/components/sections/landingContact'
export default {
  components: {
    'landing-services-company': landingServicesCompany,
    'landing-services-jobseeker': landingServicesJobseeker,
    'landing-jobs': landingJobs,
    'landing-carousel': landingCarousel,
    'landing-boxes': landingBoxes,
    'landing-contact': landingContact,
  },
}
</script>

<style lang="scss"></style>
