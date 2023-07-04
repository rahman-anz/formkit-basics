<script lang="ts" setup></script>

<template>
  <nav>
    <nuxt-link to="/">Form Fields</nuxt-link>
    <nuxt-link to="/new">New Form</nuxt-link>
  </nav>
  <slot />
</template>

<style scoped>
nav {
  display: flex;
  gap: 3rem;
  font-size: 2rem;
  margin-bottom: 2rem;
}
</style>
