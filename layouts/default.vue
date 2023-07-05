<script lang="ts" setup></script>

<template>
  <nav>
    <nuxt-link class="text-blue-400" to="/">Form Fields</nuxt-link>
    <nuxt-link class="text-blue-400" to="/new">New Form</nuxt-link>
    <nuxt-link class="text-blue-400" to="/schema">Schema</nuxt-link>
    <nuxt-link class="text-blue-400" to="/component">Component</nuxt-link>
    <nuxt-link class="text-blue-400" to="/tailwind">Tailwind</nuxt-link>
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
