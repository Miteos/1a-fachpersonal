<template>
  <div>
    <v-card-title v-if="title" class="font--xlarge font--center"
      >{{ title }}
    </v-card-title>
    <v-divider
      :inset="$vuetify.breakpoint.lgAndUp"
      :style="{ borderColor: $vuetify.theme.themes.light.primary }"
    />
    <div class="pt-5">
      <v-card-text class="font--larger">
        {{ text1 }}
      </v-card-text>
      <v-card-text v-if="text2" class="font--larger">
        {{ text2 }}
      </v-card-text>
      <v-card-text v-if="text3" class="font--larger">
        {{ text3 }}
      </v-card-text>
      <v-card-text v-if="text4" class="font--larger">
        {{ text4 }}
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'text-card',
  props: {
    title: {
      type: String,
      required: false,
    },
    text1: '',
    text2: '',
    text3: '',
    text4: '',
  },
}
</script>
