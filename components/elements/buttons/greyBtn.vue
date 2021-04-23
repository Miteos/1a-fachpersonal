<template>
  <button class="grey-button">
    <a :href="to">{{ text.toUpperCase() }}</a>
  </button>
</template>

<script>
export default {
  props: {
    text: '',
    to: '',
  },
}
</script>

<style lang="scss">
@import 'assets/styles/colors';
@import 'assets/styles/mixins';
.grey-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $secondary;
  color: $main;
  font-weight: 900;
  border-radius: 5px;
  width: 250px;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease-out;
  @include tablets {
    font-size: 14px;
    width: 200px;
  }
  & a {
    width: 100%;
    text-decoration: none;
    color: $main;
    padding: 5px;
  }
  &:hover {
    border: thin solid $secondary;
    background: transparent;
    color: $secondary;
    transition: 0.3s ease-in;
    & a {
      color: $secondary;
    }
  }
}
</style>
