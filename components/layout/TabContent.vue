<template>
  <v-row :class="{ 'flex-column-reverse': $vuetify.breakpoint.mdAndDown }">
    <v-col xl="6" lg="6" cols="12">
      <slot name="text"></slot>
    </v-col>
    <v-col xl="6" lg="6" cols="12" class="d-flex align-center">
      <slot name="image"></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TabContent',
}
</script>
