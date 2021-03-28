<template>
  <section class="landing-jobs">
    <div class="landing-jobs--title">
      <h2>Ausgewählte Jobs</h2>
      <p>
        Hier sind einige Möglichkeiten mit den besten Unternehmen auf dem
        heutigen Markt. Treten Sie unserem Netzwerk bei und wir können
        zusammenarbeiten, um herauszufinden, was zu Ihnen passt.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.landing-jobs {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  &--title {
    max-width: 800px;
    text-align: center;
    & h2 {
      font-size: 45px;
    }
    & p {
      padding-top: 20px;
    }
  }
}
</style>
