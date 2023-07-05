<template>
  <FormKit type="form">
    <FormKit
      :type="ms"
      label="Framework"
      :options="framework"
      value="svelte"
      multiple="true"
    ></FormKit>
  </FormKit>
</template>
<script setup>
import { createInput } from "@formkit/vue";
import VueMultiSelectForm from "../formkit-components/VueMultiSelectForm.vue";
const ms = createInput(VueMultiSelectForm);
const framework = ref(["vue", "react", "angular", "nuxy"]);
</script>
