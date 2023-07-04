<script lang="ts" setup>
const user = ref({
  username: "danielloven@y",
  password: "123445",
});
const handleSubmit = async (data) => {
  await wait(3000);
  console.log(data);
};
</script>
<template>
  <div>
    <FormKit type="form" :value="user" @submit="handleSubmit">
      <h1>Login</h1>
      <FormKit type="text" label="Username" name="username" />
      <FormKit type="password" label="Password" name="password" />
    </FormKit>
  </div>
</template>
<script setup></script>

<style scoped></style>
