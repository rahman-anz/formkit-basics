<script lang="ts" setup>
const user = ref({
  username: "danielloven@y",
  password: "123445",
});
const handleSubmit = async (data) => {
  await wait(3000);
  console.log(data);
};
const username_is_unique = (node) => {
  const userNames = ["lindapark", "freddymercury", "jonas"];
  return !userNames.includes(node.value);
};
</script>
<template>
  <div>
    <FormKit
      type="form"
      submit-label="Login"
      :value="user"
      @submit="handleSubmit"
    >
      <h1>Login</h1>
      <FormKit
        type="text"
        validation="+length:8|*?url"
        label="Username"
        name="username"
      />
      <FormKit
        type="text"
        validation="(500)username_is_unique"
        :validation-rules="{ username_is_unique }"
        :validation-messages="{
          username_is_unique: 'This username is already taken',
        }"
        label="Name"
        name="name"
      />
      <FormKit
        type="password"
        validation="required|length:8,12"
        label="Password"
        name="password"
      />
    </FormKit>
  </div>
</template>
<script setup></script>

<style scoped></style>
